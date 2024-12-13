import React from 'react';

const cities = [
    ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "California City", "San Jose", "Fresno", "Oakland", "Long Beach", "Bakersfield"],
    ["San Bruno", "Anaheim", "Santa Barbara", "Palm Springs", "Santa Monica", "Riverside", "San Bernardino", "Stockton", "Irvine", "Monterey"],
    ["Malibu", "Beverly Hills", "Pasadena", "Modesto", "Berkeley", "Fremont", "Santa Rosa", "Visalia", "Santa Clara", "Temecula"],
    ["Merced", "Oxnard", "Huntington Beach", "Palmdale", "Newport Beach", "Santa Maria", "Victorville", "Pomona", "Glendale", "Oceanside"]
];

const Search = () => {
    return (
        <div className='mx-[3%] flex flex-col items-center justify-center my-12'>
            <h1 className='text-3xl font-bold'>Search in top cities</h1>
            <div className='w-full flex flex-wrap items-center justify-center gap-x-[30%] md:gap-x-[35%] lg:gap-x-[15%] gap-y-4 max-w-[970px] my-10'>
                {cities.map((cityGroup, index) => (
                    <div key={index} className='flex flex-col max-w-28 text-base font-medium'>
                        {cityGroup.map(city => (
                            <a key={city} href={`/${city.replace(/ /g, '-')}`} className='hover:text-[#C82021]'>{city}</a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
