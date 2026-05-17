import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-slate-800 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary group-hover:border-primaryLight transition-colors">
            <img src="/profile.jpg" alt="Mansi Thakkar" className="object-cover w-full h-full" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-primaryLight transition-colors">
            Mansi Thakkar
          </h3>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-primaryLight transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryLight transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-2xl text-slate-300 hover:text-primaryLight transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full glass flex flex-col items-center py-8 gap-6 transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={closeMenu}
            className="text-lg font-semibold text-slate-200 hover:text-primaryLight transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
