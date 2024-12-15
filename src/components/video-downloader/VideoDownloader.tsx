import React, { useState } from 'react';
import { SearchBox } from './SearchBox';
import getVideoId from 'get-video-id';
import { VideoFormat, VideoDetails } from 'downloader/app/types';
import { fetchVideoResponse } from 'downloader/utils';
import { EmbeddedVideoCard } from './EmbeddedVideoCard';
import { DownloadOption } from './DownloadOption';
import { Title } from '../common/Title';
import { Description } from '../common/Description';
import { LoadingText } from '../common/LoadingText';

export const VideoDownloader = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mediaLinks, setMediaLinks] = useState<VideoFormat[]>([]);
  const [videoDetails, setVideoDetails] = useState<VideoDetails>();

  const onSubmitButtonClickHandler = async () => {
    setIsLoading(true);
    if (searchVal === '') return;
    const videoId = getVideoId(searchVal);
    const response = await fetchVideoResponse(videoId?.id as string);
    setMediaLinks(() => {
      let filteredFormats: VideoFormat[] = response.formats.filter(
        (format: VideoFormat) => format.hasAudio && format.hasVideo,
      );
      filteredFormats.sort((a: VideoFormat, b: VideoFormat) => {
        return b.qualityLabel?.localeCompare(a?.qualityLabel as string) ?? 0;
      });
      return filteredFormats;
    });
    setVideoDetails(response.videoDetails);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Title>All-in-One Video Downloader</Title>
      <Description>
        Currently, works for videos on YouTube, Instagram and LinkedIn.
      </Description>
      <SearchBox
        searchValue={searchVal}
        setSearchValue={setSearchVal}
        onSubmit={onSubmitButtonClickHandler}
        isLoading={isLoading}
      />
      {isLoading ? <LoadingText /> : null}
      <div className="flex flex-row max-md:flex-col gap-3 items-center justify-center">
        {videoDetails && Object.keys(videoDetails).length ? (
          <EmbeddedVideoCard url={videoDetails?.embed?.iframeUrl} />
        ) : null}
        <div className="flex flex-col gap-2 items-center">
          {mediaLinks.length ? (
            <div>
              <h2 className="my-2 text-2xl font-bold">Download Options</h2>
              {mediaLinks.map((mediaItem, index) => (
                <DownloadOption
                  key={index}
                  format={mediaItem.container.toLocaleUpperCase()}
                  qualityLabel={mediaItem?.qualityLabel ?? '360p'}
                  contentSize={
                    mediaItem.contentLength
                      ? `| ${(
                          parseInt(mediaItem.contentLength) /
                          1024 /
                          1024
                        ).toFixed(2)}MB`
                      : ''
                  }
                  url={mediaItem.url}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
