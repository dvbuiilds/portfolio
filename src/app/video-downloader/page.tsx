'use client';
import { useEffect, useState } from 'react';

// THIRD_PARTY
import getVideoId from 'get-video-id';

// COMPONENTS
import { SearchBox } from 'downloader/components/video-downloader/SearchBox';
import {
  DownloadOption,
  EmbeddedVideoCard,
  VideoDownloader,
} from 'downloader/components/video-downloader';

// TYPES
import { VideoDetails, VideoFormat } from '../types';

// UTILS
import { fetchVideoResponse } from 'downloader/utils';
import { BannerAd } from 'downloader/components/common/BannerAd';

export default function Home() {
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
    <div className="flex flex-row max-md:flex-col items-center justify-center gap-2">
      <div className="w-[12.5%]">
        <BannerAd />
      </div>
      <div className="w-[75%] h-[100vh] scrollbar-hide overflow-y-scroll">
        <VideoDownloader />
      </div>
      <div className="w-[12.5%]">
        <BannerAd />
      </div>
    </div>
  );
}
