// import React from 'react'

// const Layout = () => {
//     return (
//         <div className='w-full h-24 flex flex-row'>
//             <div className='flex flex-row w-[727px] h-24 gap-[15px]'>
//                 <img src="/bottomImages/a.png" alt="image" className='w-[77px] h-20' />
//                 <img src="/bottomImages/a-1.png" alt="image" className='w-[147px] h-[75px]' />
//                 <img src="/bottomImages/a-2.png" alt="image" className='w-[103px] h-[73px]' />
//                 <img src="/bottomImages/a-3.png" alt="image" className='w-[146px] h-[92px]' />
//                 <img src="/bottomImages/a-4.png" alt="image" className='w-[80px] h-[81px]' />
//                 <img src="/bottomImages/a-5.png" alt="image" className='w-[99px] h-[96px]' />
//             </div>
//             <div className='flex flex-row w-[727px] h-24 gap-[15px]'>
//                 <img src="/bottomImages/a.png" alt="image" className='w-[77px] h-20' />
//                 <img src="/bottomImages/a-1.png" alt="image" className='w-[147px] h-[75px]' />
//                 <img src="/bottomImages/a-2.png" alt="image" className='w-[103px] h-[73px]' />
//                 <img src="/bottomImages/a-3.png" alt="image" className='w-[146px] h-[92px]' />
//                 <img src="/bottomImages/a-4.png" alt="image" className='w-[80px] h-[81px]' />
//                 <img src="/bottomImages/a-5.png" alt="image" className='w-[99px] h-[96px]' />
//             </div>
//         </div>
//     )
// }

// export default Layout






import React from 'react';

const Layout = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="flex flex-row w-full justify-between items-center">
                {['a.png', 'a-1.png', 'a-2.png', 'a-3.png', 'a-4.png', 'a-5.png'].map((img, index) => (
                    <img
                        key={index}
                        src={`/bottomImages/${img}`}
                        alt={`image-${index}`}
                        className="h-[96px] w-auto flex-shrink-0"
                    />
                ))}
                {['a.png', 'a-1.png', 'a-2.png', 'a-3.png', 'a-4.png', 'a-5.png'].map((img, index) => (
                    <img
                        key={index + 6}
                        src={`/bottomImages/${img}`}
                        alt={`image-${index + 6}`}
                        className="h-[96px] w-fit flex-shrink-1"
                    />
                ))}
            </div>
        </div>
    );
};

export default Layout;

