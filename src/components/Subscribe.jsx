
import React from "react";

const Subscribe = () => {
    return (
        <div className="mx-[3%] flex justify-center items-center px-4">
            <div className="flex flex-col text-center justify-center items-center w-full max-w-[1200px] md:h-[360px] h-auto bg-[#C82021] rounded-3xl my-4 p-6 md:p-8">
                <h1 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                    List your property with your ownership status.
                </h1>
                <p className="max-w-[792px] text-sm md:text-lg font-light text-white mb-6 md:mb-10">
                    Here is a compilation of the most memorable real estate company ever created. These engaging catchphrases are paired with the title "Greatest Real-Estate of All Time”.
                </p>
                <div className="w-full max-w-[625px] md:h-[60px] flex flex-col md:flex-row items-center space-y-4 md:space-y-0 relative">
                    <input
                        type="text"
                        placeholder="Enter email address"
                        className="w-full h-12 md:h-[60px] rounded-full p-4 text-base placeholder:text-gray-500"
                    />
                    <button className="md:absolute md:right-2.5 top-1.5  
                    w-full md:w-auto h-12 px-8 py-2 bg-[#2B2B2B] hover:bg-slate-600 text-white text-lg rounded-full font-medium md:ml-4 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
