import React from 'react'

const Information = () => {
    return (
        <div className='mx-[3%] flex flex-col items-center text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-[40px] font-medium m-7'>What’s Happening in Your Area</h1>
            <div className="max-w-3xl mb-6">
                <p className="text-base lg:text-lg font-light">
                    Whether you're in search of a new residence, an investment opportunity, or simply exploring the area, we are here to assist you in discovering precisely what meets your needs.
                </p>
            </div>

            <h2 className='text-2xl font-medium mb-10'>Malibu, California</h2>

            <div className='flex flex-wrap justify-center items-center max-w-[1160px] gap-5 mb-10'>
                <div className=' w-[40%] md:w-[40%] lg:w-[275px] h-32 md:h-36 lg:h-[157px]'>
                    <div className='flex flex-col justify-center items-center w-full h-full rounded-2xl bg-[#F6F6F6]'>
                        <h1 className='text-3xl md:text-4xl lg:text-[40px] font-medium text-[#C82021] mb-2'>165</h1>
                        <h2 className='text-base md:text-lg font-medium text-[#2B2B2B]'>Homes For Rent</h2>
                    </div>
                </div>
                <div className='w-[40%] md:w-[40%] lg:w-[275px] h-32 md:h-36 lg:h-[157px]'>
                    <div className='flex flex-col justify-center items-center w-full h-full rounded-2xl bg-[#F6F6F6]'>
                        <h1 className='text-3xl md:text-4xl lg:text-[40px] font-medium text-[#C82021] mb-2'>416</h1>
                        <h2 className='text-base md:text-lg font-medium text-[#2B2B2B]'>Homes For Sale</h2>
                    </div>
                </div>
                <div className='w-[40%] md:w-[40%] lg:w-[275px] h-32 md:h-36 lg:h-[157px]'>
                    <div className='flex flex-col justify-center items-center w-full h-full rounded-2xl bg-[#F6F6F6]'>
                        <h1 className='text-3xl md:text-4xl lg:text-[40px] font-medium text-[#C82021] mb-2'>741</h1>
                        <h2 className='text-base md:text-lg font-medium text-[#2B2B2B]'>Real Estate Agents</h2>
                    </div>
                </div>
                <div className='w-[40%] md:w-[40%] lg:w-[275px] h-32 md:h-36 lg:h-[157px]'>
                    <div className='flex flex-col justify-center items-center w-full h-full rounded-2xl bg-[#F6F6F6]'>
                        <h1 className='text-3xl md:text-4xl lg:text-[40px] font-medium text-[#C82021] mb-2'>251</h1>
                        <h2 className='text-base md:text-lg font-medium text-[#2B2B2B]'>Apartments Available</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information


