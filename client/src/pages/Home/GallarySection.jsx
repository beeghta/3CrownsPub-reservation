import { useEffect, useRef, useState } from "react";

import gallary1 from "../../img/real/photo-gallery2.jpg";
import gallary2 from "../../img/real/photo-gallery6.jpg";
import gallary3 from "../../img/real/photo-gallery8.jpg";
import gallary4 from "../../img/real/photo-gallery10.jpg";

function GallarySection() {
    const images = [
        gallary1,
        gallary2,
        gallary3,
        gallary4,
    ];

    // برای لوپ، تصاویر را چند بار تکرار می‌کنیم
    const sliderImages = [
        ...images,
        ...images,
        ...images,
    ];

    const [currentIndex, setCurrentIndex] = useState(4);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const sliderRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);

    useEffect(() => {
        function updateWidth() {
            if (sliderRef.current) {
                setSlideWidth(sliderRef.current.offsetWidth / 6);
            }
        }

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    function nextSlide() {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }

    function prevSlide() {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    }

    useEffect(() => {
        if (currentIndex >= 8) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(4);
            }, 500);

            return () => clearTimeout(timer);
        }

        if (currentIndex <= 1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(5);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <>
            <div className="text-center py50">
                <span className="devider">
                    What Happens Here
                    <p>Photo Gallery</p>
                    <i className="col-lg-12"></i>
                </span>
            </div>

            <div className="gallery-slider-wrapper">

                <button
                    className="gallery-arrow gallery-prev"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                <div
                    className="gallery-slider"
                    ref={sliderRef}
                >
                    <div
                        className="gallery-track"
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}px)`,
                            transition: isTransitioning
                                ? "transform 0.5s ease"
                                : "none",
                        }}
                    >
                        {sliderImages.map((image, index) => (
                            <div
                                className="gallery-slide"
                                key={index}
                            >
                                <div className="community-img">
                                    <img
                                        src={image}
                                        alt={`Photo Gallery ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="gallery-arrow gallery-next"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>

            </div>

            <section className="bg-gray text-center padding-section">
                <h3 className="Catamaran-Bold">
                    SHARE THIS PAGE
                </h3>

                <div className="row">
                    <div className="share">
                        <i className="fa fa-twitter"></i>
                    </div>

                    <div className="share">
                        <i className="fa fa-facebook"></i>
                    </div>

                    <div className="share">
                        <i className="fa fa-pinterest-p"></i>
                    </div>

                    <div className="share">
                        <i className="fa fa-linkedin"></i>
                    </div>

                    <div className="share">
                        <i className="fa fa-envelope"></i>
                    </div>

                    <div className="share">
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GallarySection;