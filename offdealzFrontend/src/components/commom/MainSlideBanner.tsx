import { useState, useEffect } from 'react';
import images from "../../assets/constants/images.js";

const slides = [
    { url: images.BannerImage1 },
    { url: images.BannerImage2 },
    { url: images.BannerImage5 },
    { url: images.BannerImage6 },
    { url: images.BannerImage7 },
    { url: images.BannerImage8 }
];

const MainSlideBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="max-w-7xl px-6 mx-auto py-4">
            <div className="relative w-full h-80 overflow-hidden rounded-3xl z-10">
                <div
                    className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-80 flex-shrink-0 "
                            style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                {/* Empty div for potential overlay content */}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                >
                    &#10095;
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-6 h-1 rounded ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSlideBanner;
