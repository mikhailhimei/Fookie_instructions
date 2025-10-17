import React, { useState } from 'react';

export const FullscreenImage = ({ src, alt }) => {
  console.log(src)
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const thumbnailStyle = {
    width: '300px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  };

  const fullscreenModalStyle = {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const fullscreenImageStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <div style={{margin:10}}>
      {/* Картинка для просмотра */}
      <img
        src={src}
        alt={alt}
        style={thumbnailStyle}
        onClick={handleClick}
      />

      {/* Модальное окно с изображением на полный экран */}
      {isOpen && (
        <div
          style={fullscreenModalStyle}
          onClick={closeModal}
        >
          <div
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} style={fullscreenImageStyle} />
            <button
              style={closeBtnStyle}
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};