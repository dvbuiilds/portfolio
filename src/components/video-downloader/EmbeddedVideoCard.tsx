import React from 'react';

interface EmbeddedVideoCardPropsType {
  url: string;
}

export const EmbeddedVideoCard: React.FC<EmbeddedVideoCardPropsType> = (
  props,
) => {
  const { url } = props;
  return (
    <div className="w-[800px] h-[400px] max-md:w-[400px] max-md:h-[200px] rounded-lg overflow-hidden">
      <iframe
        src={`${url}/?autoplay=1`}
        allow="autoplay"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};
