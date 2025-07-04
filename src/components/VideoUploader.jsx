import React, { useState, useEffect } from 'react';

export function VideoUploader({ videoPath }) {
  const [videoSrc, setVideoSrc] = useState(null);

  // Если проп videoPath передан — используем его как источник
  useEffect(() => {
    if (videoPath) {
      setVideoSrc(videoPath);
    }
  }, [videoPath]);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 max-w-3xl mx-auto">
      {/* Если есть видео-источник — показываем плеер */}
      {videoSrc ? (
        <div className="w-full max-w-xl">
          <video
          style={{width:500}}
            src={videoSrc}
            controls
            className="w-full rounded-lg shadow-md"
          >
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      ) : (
        <p className="text-gray-500">Видео не загружено</p>
      )}
    </div>
  );
}
