import React, { useEffect, useRef, useState } from "react";


const images = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZpaYPbCYMx2IpMFcaefwksFvoIyOPtd2U7yx4Uz6UJrTEL6hDbp0iKzj_eMeMTqbHBriz1i50hTuQqHQ9R57tRXIAYlhJt8SagvRlPZsQxEcs4zX9Jjggz-oI6glOQXlJ029_A-Dc6-D7m9GOyVVgiqYPnLR36ije25Z5T0PfyXayAWROiwi0B4FP/w1200-h630-p-k-no-nu/IMG-20221031-WA0050.jpg",
  "https://csrbox.org/company/proj_img/149484157446.jpg",
  "https://pbs.twimg.com/media/DXYqKmDVMAAiM_Q.jpg:large",
  "https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2023/12/25/dbcl_170350851765897a253b380_25jdp7geedam.jpg",
  "https://cache.careers360.mobi/media/schools/social-media/media-gallery/2083/2023/9/5/Aastha%20Vidya%20Mandir%20English%20Medium%20School-Group%20Photo.jpg",
  "https://i.ytimg.com/vi/xSJiYvKhihE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEwgZShWMA8=&rs=AOn4CLD7g1LYL0KAWUWT1G8SwJxhQupU_g",
  "https://pbs.twimg.com/media/DogZXJ4WkAA-J8i.jpg",
  "https://indiacsr.in/wp-content/uploads/2024/12/Astha-Gurukul.jpg",
  "https://www.schooldekho.org/storage/gallery//hzf6gt13kw00cwwwoo48wsocc4ccosc.jpg",
];

function AluminiScrolling() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + images.length) % images.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Left Button */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
        onClick={prevSlide}
      >
        ◀
      </button>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex transition-transform duration-500 ease-in-out w-full overflow-x-hidden"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-[600px] object-cover flex-shrink-0 rounded-lg"
          />
        ))}
      </div>

      {/* Right Button */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
        onClick={nextSlide}
      >
        ▶
      </button>
      </div>
  )
}
export default AluminiScrolling;