import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='text-center'>

            <div className='text-stone-500 mt-14 inline-flex items-center gap-2 bg-white px-5 py-1 rounded-full border border-neutral-500'>
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="" />
            </div>


            <h1 className='text-center mx-auto mt-10 text-4xl max-w-[300px] sm:text-6xl sm:max-w-[490px]'>
                Turn text to <span className='text-blue-600'>image</span>, in seconds.
            </h1>

            <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

            <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 rounded-full hover:scale-[1.01] transition-all'>
                Generate Images
            </button>

            <div className='flex flex-wrap justify-center mt-16 gap-3'>
                {Array(6).fill('').map((item, index) => (
                    <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer' width={70} key={index} src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} />
                ))}
            </div>
            <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
        </div>
    )
}

export default Header
