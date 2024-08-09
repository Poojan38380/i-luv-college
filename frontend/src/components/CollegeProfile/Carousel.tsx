// import { Image } from "@/hooks/Colleges/UseGetAllColleges";
// import { useEffect, useState } from "react";
// import { GoDotFill, GoDot } from "react-icons/go"; // Importing the icons

// interface CarouselProps {
//   images: Image[];
// }

// const Carousel = ({ images }: CarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Automatically move to the next slide every 10 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel mq800:w-full w-96 relative bg-base-200 rounded-box shadow-lg overflow-hidden">
//       <div
//         className="carousel-inner flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="carousel-item flex-shrink-0 w-full h-96 touch-pan-x"
//           >
//             <img
//               src={image.imageURL}
//               className="w-full object-contain h-full rounded-2xl"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dots indicators */}
//       <div className="absolute flex justify-center left-2 gap-1 bottom-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className="opacity-70 hover:opacity-100 transition-opacity"
//           >
//             {currentIndex === index ? (
//               <GoDotFill className="text-accent" />
//             ) : (
//               <GoDot className="text-gray-400" />
//             )}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import { Image } from "@/hooks/Colleges/UseGetAllColleges";
import { useEffect, useState } from "react";
import { GoDotFill, GoDot } from "react-icons/go"; // Importing the icons

interface CarouselProps {
  images: Image[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Automatically move to the next slide every 10 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (imageURL: string) => {
    setSelectedImage(imageURL);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="carousel mq800:w-full w-96 relative bg-base-200 rounded-box shadow-lg overflow-hidden">
      <div
        className="carousel-inner flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 w-full h-full touch-pan-x"
            onClick={() => openModal(image.imageURL)}
          >
            <img
              src={image.imageURL}
              className="w-full object-contain h-full rounded-2xl cursor-pointer"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Dots indicators */}
      <div className="absolute flex justify-center left-2 gap-1 bottom-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            {currentIndex === index ? (
              <GoDotFill className="text-accent" />
            ) : (
              <GoDot className="text-gray-400" />
            )}
          </button>
        ))}
      </div>

      {/* Modal for full image view */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-full max-h-[550px] rounded-2xl"
              alt="Full view"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
