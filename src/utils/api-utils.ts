export const fetchVideoResponse = async (videoId: string) => {
  const response = await fetch('http://localhost:3000/api/download', {
    method: 'POST',
    mode: 'cors',
    body: videoId,
  }).then((internalResponse) => internalResponse.json());
  return { formats: response.data.formats, videoDetails: response.data.videoDetails };
};
