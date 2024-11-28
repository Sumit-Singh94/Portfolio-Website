import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className='bg-black w-full p-4 mb-10 flex flex-col items-center'>
            <div className='text-center w-full'>
                <h1 className='text-white mb-4'>
                    My name is Sumit Singh, and I'm pursuing my degree in Bachelor's In Computer Application from NSHM College Of Management And Technology
                </h1>
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='bg-black rounded-md  ml-[600px] mb-10 max-w-sm md:max-w-md lg:max-w-lg'>
                    <img
                        src='./MyPhoto.jpg'
                        className='w-full rounded-md object-cover'
                        alt='My Photo'
                    />
                </div>
            </div>
        </div>
    );
}
