// components/ImageModal.js
import { useState } from 'react';

const ImageModal = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openImage = (imgSrc) => {
    setCurrentImage(imgSrc);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  const changeImage = (imgSrc) => {
    setCurrentImage(imgSrc);
  };

  return (
    <div>
      {/* Image Thumbnails */}
      <div className="flex flex-wrap justify-between gap-y-5">
        {images.map((imgSrc, index) => (
          <div key={index} className="w-[100%] md:w-[49%] lg:w-[31%]">
            <img
              className="img1 rounded-xl object-cover cursor-pointer"
              src={imgSrc}
              alt={`Image ${index + 1}`}
              onClick={() => openImage(imgSrc)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
           // Maintains scroll position
        >
          <div className="relative flex flex-col items-center">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-5 text-white text-4xl cursor-pointer"
              onClick={closeImage}
            >
              ×
            </button>
            
            {/* Main Image */}
            <div className="w-[330px] md:w-[700px] lg:w-[800px]">
              <img src={currentImage} alt="Enlarged" className="w-full rounded-md" />
            </div>

            {/* Image Thumbnails for Changing */}
            <div className="flex flex-wrap gap-3 mt-5">
              {images.map((imgSrc, idx) => (
                <img
                  key={idx}
                  className="cursor-pointer w-20 h-auto rounded-md"
                  src={imgSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => changeImage(imgSrc)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
