import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const images = [
  "https://picsum.photos/id/1015/1920/1080",
  "https://picsum.photos/id/1016/1920/1080",
  "https://picsum.photos/id/1018/1920/1080",
  "https://picsum.photos/id/1020/1920/1080",
];

export default function slider() {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  const showSlide = (i, animate = true) => {
    if (slideRef.current) {
      slideRef.current.style.transition = animate ? "transform 0.5s ease" : "none";
      slideRef.current.style.transform = `translateX(-${i * window.innerWidth}px)`;
    }
  };

  const nextSlide = () => {
    setIndex((prev) => {
      const nextIndex = prev + 1;
      showSlide(nextIndex);
      if (nextIndex === images.length) {
        setTimeout(() => {
          showSlide(0, false);
          setIndex(0);
        }, 500);
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setIndex((prev) => {
      if (prev === 0) {
        showSlide(images.length - 1, false);
        setTimeout(() => showSlide(images.length - 2, true), 10);
        return images.length - 2;
      } else {
        const newIndex = prev - 1;
        showSlide(newIndex);
        return newIndex;
      }
    });
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    showSlide(index);
    startInterval();

    const handleResize = () => showSlide(index, false);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="slider">
      <div className="slides" ref={slideRef}>
        {images.map((src, i) => (
          <img key={i} src={src} className="slide" alt={`Slide ${i + 1}`} />
        ))}
        <img src={images[0]} className="slide" alt="Duplicate First Slide" />
      </div>
      <button className="nav-btn prev" onClick={() => { prevSlide(); resetInterval(); }}>
        &#10094;
      </button>
      <button className="nav-btn next" onClick={() => { nextSlide(); resetInterval(); }}>
        &#10095;
      </button>
    </div>
  );
}
