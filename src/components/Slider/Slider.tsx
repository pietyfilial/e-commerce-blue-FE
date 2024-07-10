import React, { useState, useEffect } from 'react';
import { FaCaretLeft } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      'https://i1.wp.com/gadgeteerhub.com/wp-content/uploads/2021/06/samsung-Gadgeteer-Hub.jpg?fit=1920%2C640&ssl=1',
  },
  {
    id: 2,
    image:
      'https://i2.wp.com/gadgeteerhub.com/wp-content/uploads/2021/07/streaming-media-player-1.png?fit=1920%2C640&ssl=1',
  },
  {
    id: 3,
    image:
      'https://i2.wp.com/gadgeteerhub.com/wp-content/uploads/2021/06/get.png?fit=1920%2C640&ssl=1',
  },
  {
    id: 4,
    image:
      'https://i0.wp.com/gadgeteerhub.com/wp-content/uploads/2021/06/Gadget-Bru-Slider.jpg?fit=1920%2C640&ssl=1',
  },
  {
    id: 5,
    image:
      'https://i0.wp.com/gadgeteerhub.com/wp-content/uploads/2021/07/PRODUCTIVITY_PLUS_S-MLP.jpg?fit=1920%2C640&ssl=1',
  },
  {
    id: 6,
    image:
      'https://i1.wp.com/gadgeteerhub.com/wp-content/uploads/2021/07/get-ready-2019-gaming-release-landing-header-2.jpg?fit=1920%2C640&ssl=1',
  },
  {
    id: 7,
    image:
      'https://i2.wp.com/gadgeteerhub.com/wp-content/uploads/2021/07/Screenshot-21.png?fit=1920%2C640&ssl=1',
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className='relative w-full h-64 overflow-hidden'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-transform transform ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ transitionDuration: '1s' }}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className='w-full h-full object-contain'
            />
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          className='
          absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#001489] 
          text-white w-[40px] h-[40px] rounded-full pl-1'
          onClick={goToPrevSlide}>
          <FaCaretLeft size={'24px'} />
        </button>
        <button
          className='
          absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#001489] 
          text-white w-[40px] h-[40px] rounded-full pl-2'
          onClick={goToNextSlide}>
          <FaCaretRight size={'24px'} />
        </button>

        {/* Indicators */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
