

import React, { useState, useEffect } from "react";

const Home = () => {

    // Array of background images
    const backgrounds = [
        "/background1.jpg",
        "/background2.jpg",
        "/background3.jpg"
    ];

    // Set the default background to background1.jpg
    const [currentBackground, setCurrentBackground] = useState(0);
    const [startTransition, setStartTransition] = useState(false);

    useEffect(() => {
        // Start the background transition after 3 seconds
        const timer = setTimeout(() => {
            setStartTransition(true); // Start background cycling
        }, 3000); // 3 second delay

        // Change background every 5 seconds after transition starts
        let changeBackground;
        if (startTransition) {
            changeBackground = setInterval(() => {
                setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
            }, 5000); // Changes background every 5 seconds
        }

        // Clean up timers when the component unmounts
        return () => {
            clearTimeout(timer);
            clearInterval(changeBackground);
        };
    }, [startTransition]);

    const [activeLink, setActiveLink] = useState("Buy");

    const links = [
        { name: "Buy", width: "w-14" },
        { name: "Sell", width: "w-14" },
        { name: "Rent", width: "w-14" },
        { name: "Mortgage", width: "w-28" },
    ];

    return (
        <div className="w-full px-[3%] mt-24">

            <div className="lg:h-[570px] items-center justify-center relative rounded-2xl mb-8">

                {/* Background Layer with Grey Overlay */}
                <div
                    className="absolute w-full h-full bg-center transition-all duration-1000 ease-in-out rounded-2xl"
                    style={{
                        backgroundImage: `url(${backgrounds[currentBackground]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Grey Transparent Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-900 transition-opacity duration-1000 ease-in-out opacity-50 rounded-2xl"></div>
                </div>

                <div className='flex justify-center p-10 text-white relative'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h1 className='text-3xl md:text-5xl lg:text-[53px] font-bold pt-7'>Discover Your New Home</h1>
                        <p className='text-base md:text-xl lg:text-2xl font-normal pt-3 m-3'>Helping 100 million renters find their perfect fit.</p>
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 pt-6">
                            {links.map((link) => (
                                <div
                                    key={link.name}
                                    className={`flex flex-col justify-center items-center ${link.width} h-10`}
                                >
                                    <a
                                        href="#"
                                        className={`text-base md:text-lg lg:text-xl px-2 m-2 transition-all duration-300 ${activeLink === link.name ? "font-bold" : "font-normal"
                                            }`}
                                        onClick={() => setActiveLink(link.name)}
                                    >
                                        {link.name}
                                    </a>
                                    <img
                                        src="/underline.png"
                                        alt="underline"
                                        className={`w-[100%] h-[2px] md:h-1 text-white transition-opacity duration-300 rounded-xl ${activeLink === link.name ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="h-10 md:h-[55px] w-[90%] flex items-center bg-white m-8 rounded-full relative">
                            {/* Input Field */}
                            <input
                                type="text"
                                className="flex-grow bg-transparent pl-6 pr-16 rounded-full w-full h-full outline-none text-base font-medium placeholder:text-md placeholder:font-medium"
                                placeholder="Address, School, City, Zip or Neighborhood"
                            />
                            {/* Circular Ellipse */}
                            <button className="absolute right-2 h-7 md:h-11 w-7 md:w-11 bg-[#C82021] rounded-full flex items-center justify-center">
                                <img
                                    src="/Search.png"
                                    alt="Search"
                                    className="h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Navigation Dots */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                    {backgrounds.map((_, index) => (
                        <img
                            key={index}
                            src={`/dot${index + 1}.png`}
                            alt={`Dot`}
                            className={`w-5 h-1 rounded-xl transition-opacity duration-500 ${index === currentBackground ? "opacity-100" : "opacity-50"}`}
                        />
                    ))}
                </div>
                {/* Keyframe Animation for Slide Transition */}
                <style>
                    {`
          @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
          }
        `}
                </style>

            </div>
        </div>
    )
}

export default Home