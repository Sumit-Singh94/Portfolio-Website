import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { themeContext} from '../../context/theme';


function About() {
  // const { themeMode,lightTheme,darkTheme } = useContext(themeContext);

  return (
    <section className="animate__animated animate__fadeInLeftBig py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Frontend Developer Sumit Singh</h2>
              <p className="text-base font-normal leading-relaxed lg:text-start text-center">I'm a passionate Frontend Developer, who's always willing to thrive more in tech and try out new technologies. I'm a coder with a collaborative and growth mindset, passionate about tackling real-world problems and solving them through efficient solutions.</p>
            </div>
            <Link to='#'>
              <button onClick={() => { window.location = 'mailto:sumitsin3122@gmail.com' }} className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Connect With Me</span>
              </button>
            </Link>
          </div>
          <img className="lg:mx-0 mx-auto h-full rounded-2xl object-cover" src='./MyPhoto.jpg' alt="about Us image" />
        </div>
      </div>
    </section>
  );
}

export default About;
