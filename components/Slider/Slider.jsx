import { useEffect, useState } from "react";
import img2 from "/images/image2.png";
import img3 from "/images/image3.png";
import img4 from "/images/image4.png";

const Slider = () => {
    const slides = [
        { src: img2, alt: "اسلایدر اول new", href: "https://www.dastresi.com/brands/8" },
        { src: img3, alt: "اسلایدر دوم new", href: "https://www.dastresi.com/products/Charging-Cable" },
        { src: img4, alt: "اسلایدر سوم new", href: "https://www.dastresi.com/brands/39" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = (index) => {
        const total = slides.length;
        if (index < 0) {
            setCurrentIndex(total - 1);
        } else if (index >= total) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }
    };

    const next = () => goTo(currentIndex + 1);
    const prev = () => goTo(currentIndex - 1);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(id);
    }, [currentIndex, paused]);

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-8">
                <div className="portlet" id="yw0">
                    <div className="portlet-content">
                        <div
                            className="slider owl-carousel owl-theme shadow rounded-xl owl-rtl owl-loaded owl-drag"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            style={{ position: "relative" }}
                        >
                            <div className="owl-stage-outer" style={{ overflow: "hidden", width: "100%" }}>
                                <div
                                    className="owl-stage"
                                    style={{
                                        display: "flex",
                                        width: `${slides.length * 100}%`,
                                        transform: `translate3d(-${(currentIndex * 100) / slides.length}%, 0, 0)`,
                                        transition: "transform 300ms ease"
                                    }}
                                >
                                    {slides.map((slide, index) => (
                                        <div key={index} className={`owl-item${index === currentIndex ? " active" : ""}`} style={{ width: `${100 / slides.length}%` }}>
                                            <a target="_blank" rel="noopener noreferrer" href={slide.href}>
                                                <img
                                                    className="block w-full rounded-xl"
                                                    alt={slide.alt}
                                                    src={slide.src}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="owl-nav  bg-black/30 hover:bg-black/80">
                                <button
                                    type="button"
                                    role="presentation"
                                    className="owl-prev bg-gray-300 hover:bg-gray-500"
                                    onClick={prev}
                                    style={{
                                        position: "absolute",
                                        left: "0.5rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        borderRadius: "9999px",
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                       
                                    }}
                                >
                                    <span className="text-black" aria-label="Previous" style={{ fontSize: "1.25rem", lineHeight: 1 }}>‹</span>
                                </button>
                                <button
                                    type="button"
                                    role="presentation"
                                    className="owl-next  bg-gray-300 hover:bg-gray-500"
                                    onClick={next}
                                    style={{
                                        position: "absolute",
                                        right: "0.5rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        borderRadius: "9999px",
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <span className="text-black" aria-label="Next" style={{ fontSize: "1.25rem", lineHeight: 1 }}>›</span>
                                </button>
                            </div>
                            <div className="owl-dots">
                                {slides.map((_, index) => (
                                    <button key={index} role="button" className={`owl-dot${index === currentIndex ? " active" : ""}`} onClick={() => goTo(index)}>
                                        <span></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
        
    );
};
export default Slider;