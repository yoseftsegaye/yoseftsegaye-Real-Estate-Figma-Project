// import React from 'react'

// const Footer = () => {
//     return (
//         <div className='flex flex-col items-center justify-center w-full mx-[3%] my-10'>
//             <div className='w-[171px] h-[38px] my-10'>
//                 <img src="/UrbanEstate.png" alt="logo" />
//             </div>

//             <div className='flex flex-row justify-center gap-3 md:gap-40 max-w-[734px] px-1'>
//                 <div className='w-28 flex flex-col'>
//                     <h1 className='text-base font-medium py-2'>COMPANY</h1>
//                     <div className='text-sm font-normal'>
//                         <a href="">About Us</a>
//                         <a href="">Career</a>
//                         <a href="">Blog</a>
//                         <a href="">Rental Guides</a>
//                     </div>
//                 </div>
//                 <div className='w-40 text-[#2B2B2B] flex flex-col'>
//                     <h1 className='text-base font-medium py-2'>SUPPORT</h1>
//                     <div className='text-sm font-normal'>
//                         <a href="">Help Center</a>
//                         <a href="">Contact Us</a>
//                         <a href="">Terms and Conditions</a>
//                         <a href="">Feedback</a>
//                     </div>
//                 </div>
//                 <div className='w-36 text-[#2B2B2B] flex flex-col'>
//                     <h1 className='text-base font-medium py-2'>EXPLORE</h1>
//                     <div className='w-sm text-base font-normal'>
//                         <a href="">Adevertise with Us</a>
//                         <a href="">List Propety</a>
//                         <a href="">Landlord Resources</a>
//                         <a href="">Become a Agent</a>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Footer












import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full px-6 py-10 bg-gray-100 mt-5">
            {/* Logo */}
            <div className="w-[171px] h-[38px] my-6">
                <img src="/UrbanEstate.png" alt="Urban Estate Logo" />
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-40 max-w-6xl">
                {/* Company Section */}
                <div className="flex flex-col items-start justify-center md:text-left">
                    <h1 className="text-lg font-semibold mb-4 text-gray-800">COMPANY</h1>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Career</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Rental Guides</a></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className="flex flex-col items-start justify-center md:text-left">
                    <h1 className="text-lg font-semibold mb-4 text-gray-800">SUPPORT</h1>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Feedback</a></li>
                    </ul>
                </div>

                {/* Explore Section */}
                <div className="flex flex-col items-start justify-center md:text-left">
                    <h1 className="text-lg font-semibold mb-4 text-gray-800">EXPLORE</h1>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Advertise with Us</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">List Property</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Landlord Resources</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Become an Agent</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Urban Estate. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
