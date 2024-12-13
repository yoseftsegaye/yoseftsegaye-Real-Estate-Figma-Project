
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Close menu when clicking outside
    const closeMenu = () => {
        setOpen(false);
    };

    // Disable scrolling when the menu is open
    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [open]);

    return (
        <nav className="w-full h-20 fixed top-0 left-0 flex justify-between items-center bg-white z-[999] py-4 px-[3%] shadow-md">
            {/* Logo */}
            <div className="flex items-center min-w-[180px]">
                <a href="/" className="flex items-center font-bold text-lg">
                    <img src="/UrbanEstate.png" alt="Logo" className="h-5 w-auto" />
                </a>
            </div>

            {/* Links for large screens */}
            <div className="hidden lg:flex gap-7 font-medium text-base">
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Buy</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Sell</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Rent</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Mortgage</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Apartments</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Townhomes</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Agents</a>
            </div>

            {/* Login/Signup Buttons */}
            <div className="hidden lg:flex items-center gap-3">
                <a href="/" className="transition-transform font-medium hover:scale-105 px-3 py-2 hover:text-[#C82021]">Log in</a>
                <a
                    href="/"
                    className="transition-transform font-medium hover:scale-105 px-5 py-2 bg-[#C82021] text-white rounded-3xl text-base"
                >
                    Sign up
                </a>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden pr-4 z-[1001]">
                <img
                    src="/menu.png"
                    alt="Menu Icon"
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-[1000] lg:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-1/2 md:w-1/3 bg-gradient-to-r bg-white text-black shadow-md font-medium text-lg items-start pl-10 pt-10 flex flex-col  gap-6 transition-transform transform duration-500 z-[1001] ${open ? 'translate-x-0' : 'translate-x-full'
                    } lg:hidden`}
            >
                <div className="flex items-center justify-center w-full mb-10">
                    <a href="/"><img src="/UrbanEstate.png" alt="Logo" className="h-5 w-auto" /></a>
                </div>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Buy</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Sell</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Rent</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Mortgage</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Apartments</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Townhomes</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Real Estate Agents</a>
                <a href="/" className="transition-transform hover:scale-105 hover:text-[#C82021]">Log in</a>
                <a
                    href="/"
                    className="transition-transform font-medium hover:scale-105 px-5 py-2 bg-[#C82021] text-white rounded-3xl text-base"
                >
                    Sign up
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
