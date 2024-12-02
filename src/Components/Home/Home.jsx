import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';


export default function Home() {

    return (


        // INTRO PART

        <div className='bg-black'>

        <div className='animate__animated animate__fadeInLeftBig bg-black p-4 mb-10 flex flex-col lg:flex-row items-center'>

            <div className='w-full p-4'>
            <h1 className='text-white text-[50px] -mt-12 mb-10 font-mono'> Frontend Developer</h1>

                <h1 className='text-white mb-4 font-mono text-[20px]'>
                    My name is Sumit Singh, and I'm pursuing my degree in Bachelor's In Computer Application from NSHM College Of Management And Technology.
                     I'm a passionate Frontend Developer,and i have also <span className='text-cyan-400'>Contribute </span>in making my College Website with
                      <span className='text-cyan-400'> my team.</span>
                </h1>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center p-4'>
                <div className='bg-black mt-24 rounded-md mb-10 max-w-sm md:max-w-md lg:max-w-lg'>
                    <img
                        src='./MyPhoto.jpg'
                        className='w-full rounded-md object-cover'
                        alt='My Photo'
                    />
                </div>
            </div>
        </div>

        {/* PROJECTS   SECTION */}


        <div className='animate__animated  animate__fadeInLeftBig animate__delay-2s	 sm:w-full'>
        <div className='flex justify-center'>
        <h1 className='text-white ml-12 font-mono text-center text-[45px] hover:underline inline-flex underline-offset-4'>PROJECTS</h1></div>


          <div className="flex flex-col  sm:flex-row justify-evenly  mt-14 space-y-8 sm:space-y-0 sm:space-x-12 ">
          
          <div className="mb-[100px] group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-[400px] rounded-2xl hover:duration-700  ">
  <div className="w-[500px] h-52 bg-white text-gray-800 rounded-lg">
    <div className="flex flex-row justify-between ">
    <svg className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
  <path className="" d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
  </path>
  </svg>
  <svg className="fill-current stroke-current  h-8 p-2 m-1 hover:bg-lime-200 rounded-full" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
  <path className="svg-stroke-primary" d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
  </path>
  </svg>
    </div>
  </div>
  <div className="absolute bg-gray-50 -bottom-24 w-[500px]  p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
  <video controls className="rounded-xl "> <source src="RestroVideo.mp4" type="video/mp4"/> </video>
    <span className="text-lime-400 font-bold text-s">Restaurant-Website</span>
    <span className="text-gray-800 font-bold text-3xl">Restaurant-Website</span>
    <p className="text-neutral-800">This is a restaurant website made with Html,CSS,and Vanilla Javascript</p>

<Link to="https://restaurant-website-delta-one.vercel.app/">
<button
  type="submit"
  className="flex justify-center gap-2  text-black items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  Visit Website
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>
</Link>
  </div>
  </div>

{/* SECOND CARD */}

  <div className=" relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-[400px] w-[500px]  rounded-2xl hover:duration-700   ">
  <div className="h-72 bg-lime-400 text-gray-800">
    <div className="flex flex-row justify-between">
    <svg className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
  <path className="" d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
  </path>
  </svg>
  <svg className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
  <path className="svg-stroke-primary" d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
  </path>
  </svg>
    </div>
  </div>
  <div className=" h-[600px] absolute  bg-gray-50 -bottom-24 w-[500px] p-2 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
  <video controls className="rounded-xl "> <source src="ThemeVideo.mp4" type="video/mp4"/> </video>

    <span className="text-lime-400 font-bold text-s">Theme-Switcher</span>
    <span className="text-gray-800 font-bold text-3xl">Theme-Switcher</span>
    <p className="text-neutral-800">This is a Theme-Switcher made with Html,CSS,and Reactjs</p>

<button
  type="submit"
  className="flex justify-center gap-2  text-black items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  Visit Website
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>

  </div>
  
  
  </div>
  

</div>
        </div>

        </div>

        
    );

}
