import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MERN Stack Developer', 'Full Stack Developer', 'React Developer', 'Software Developer'],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Side */}
        <div className="flex flex-col gap-4 text-center md:text-left order-2 md:order-1 animate-[fadeInLeft_1s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            I am <span className="text-gradient">Mansi</span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 h-12 flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
            <span className="text-slate-300">I'm Aspiring</span>
            <span ref={el} className="text-primaryLight"></span>
          </div>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            Passionate about building scalable web applications and intuitive user experiences with modern technologies.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-primary hover:bg-primaryLight text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              View Projects
            </a>
            <a href="#about" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-8 py-3 rounded-full font-semibold transition-all">
              About Me
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex justify-center items-center order-1 md:order-2 animate-[fadeInRight_1s_ease-out]">
          <div className="text-center w-full max-w-[400px]">
            <img 
              src="/aboutmansi.jpg" 
              alt="Mansi Thakkar" 
              className="rounded-full shadow-2xl border-[4px] border-slate-800 w-full h-auto aspect-square object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
