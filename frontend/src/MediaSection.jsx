import React from 'react';

const MediaSection = ({ selectedMedia, handleMediaClick, articleData }) => (
  <div className="media-sections flex justify-center space-x-6">
    {['left', 'middle', 'right'].map((media) => (
      <div
        key={media}
        className={`media-column w-1/3 p-4 border-2 border-black ${
          selectedMedia === media ? 'bg-[rgba(200,183,159,0.6)] shadow-xl' : 'hover:scale-105 hover:bg-[rgba(200,183,159,0.257)] hover:shadow-lg'
        } transition-transform duration-300 ease-in-out`}
        onClick={() => handleMediaClick(media)}
      >
        <h2 className="text-2xl font-semibold">{media.charAt(0).toUpperCase() + media.slice(1)} Wing Media</h2>
        {articleData ? (
          <div>
            <h3>{articleData.title}</h3>
            <p>{articleData.text}</p>
          </div>
        ) : (
          <p>No data available for {media}</p>
        )}
      </div>
    ))}
  </div>
);

export default MediaSection;