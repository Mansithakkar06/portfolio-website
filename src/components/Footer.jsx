import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 bg-darkBg/80 backdrop-blur-sm py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Left: Branding & Copyright */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-slate-200 mb-2">Mansi Thakkar</h3>
          <p className="text-slate-400 text-sm font-medium tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        
        {/* Center: Contact Information */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col gap-3 text-slate-300 text-sm">
            <a href="mailto:mansithakkar203@gmail.com" className="hover:text-primaryLight transition-colors flex items-center justify-start gap-3 font-medium">
              <i className="fas fa-envelope text-lg w-5 text-center"></i> 
              <span>mansithakkar203@gmail.com</span>
            </a>
            <a href="tel:+8780079708" className="hover:text-primaryLight transition-colors flex items-center justify-start gap-3 font-medium">
              <i className="fa-solid fa-phone text-lg w-5 text-center"></i> 
              <span>+91 87800-79708</span>
            </a>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex-1 flex justify-center md:justify-end gap-6 items-center mt-4 md:mt-0">
          <a href="https://github.com/Mansithakkar06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300" aria-label="GitHub">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/mansi-thakkar06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors hover:-translate-y-1 transform duration-300" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/Mansi_thakkar06" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#e1306c] transition-colors hover:-translate-y-1 transform duration-300" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
