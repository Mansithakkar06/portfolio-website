import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const shoppyMartImages = [
    { src: '/sm1.png', alt: 'Home Page – Featured Products' },
    { src: '/sm2.png', alt: 'Admin Panel – Manage Products Table' },
    { src: '/sm3.png', alt: 'User Authentication – Login / Sign In' },
    { src: '/sm4.png', alt: 'Admin Dashboard – Overview & Recent Orders' },
    { src: '/sm7.png', alt: 'Customer Portal – Your Orders & Order Tracking' },
    { src: '/sm6.png', alt: 'Customer Portal – Order Summary & History' },
  ];

  const streamifyImages = [
    { src: '/Sc1.png', alt: 'Home Page & Video Feed' },
    { src: '/Sc2.png', alt: 'User Authentication – Login Page' },
    { src: '/Sc5.png', alt: 'Channel Profile, Playlists & Collections' },
    { src: '/Sc8.png', alt: 'Video Player, Comments & Recommended Feed' },
  ];

  const openModal = (images, index, projectTitle) => {
    setActiveModal({ images, currentIndex: index, projectTitle });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    if (!activeModal) return;
    setActiveModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    if (!activeModal) return;
    setActiveModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModal) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const otherProjects = [
    {
      title: "Blog App (React + Context API)",
      desc: "Developed a blog platform enabling user Authentication along with full CRUD operations for posts. Implemented global state management using Context API and persisted data via LocalStorage.",
      tech: "React, Context API, Tailwind CSS, JavaScript",
      link: "https://github.com/Mansithakkar06/blog_context"
    },
    {
      title: "Blog App 2.0 (Appwrite)",
      desc: "An advanced blog app featuring authentication, real-time CRUD operations, and a dark/light theme switcher. Developed with React, Redux Toolkit, React Hook Form, and Appwrite for scalable state and backend management.",
      tech: "React, Redux, React Hook Form, Tailwind CSS, Appwrite",
      link: "https://github.com/Mansithakkar06/appwrite_blog"
    },
    {
      title: "Hand Made Charm",
      desc: "Developed an online platform for buying and selling handmade handicraft products.",
      tech: "Python, Django, HTML, CSS, JavaScript, SQLite",
      link: "https://github.com/Mansithakkar06/ecommerce"
    },
    {
      title: "Learning Management System",
      desc: "A website where users can enroll in courses and take quizzes. Teachers can upload Courses, Create Quizzes, and Assign Assignments.",
      tech: "HTML, CSS, JS, React, Python, Django, MySQL",
      link: "https://github.com/Mansithakkar06/LMS"
    },
    {
      title: "Tic-Tac-Toe Game (Android)",
      desc: "Developed a classic Tic-Tac-Toe game for Android devices with a simple and user-friendly interface. Features two-player mode for local gameplay.",
      tech: "Java, Android Studio, XML",
      link: "https://github.com/Mansithakkar06/TicTacToe"
    },
    {
      title: "Amita Furnishing",
      desc: "Web based application made for purpose of buying raw materials and selling furnishing Items.",
      tech: "HTML, CSS, Bootstrap, JS, PHP, MySQL",
      link: "https://github.com/Mansithakkar06/amita"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-slate-100 mb-4">Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 rounded-full"></div>
      </div>

      {/* ===== Featured Projects Section ===== */}
      <div className="flex flex-col items-center mb-12">
        <h3 className="text-2xl font-bold text-slate-200">Featured Projects</h3>
      </div>

      {/* ===== Featured ShoppyMart Project ===== */}
      <div className="glass rounded-3xl overflow-hidden shadow-2xl mb-16 border border-slate-700/50 group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-primaryLight transition-colors">
              ShoppyMart – E-Commerce Application & Dynamic Admin Platform
            </h3>
            <p className="text-slate-300 mb-3 leading-relaxed">
              Developed a full-stack e-commerce application with JWT authentication, product and cart management, checkout, payments, order tracking, and a customer-facing shopping experience.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Built a metadata-driven dynamic admin platform with CRUD tables and forms; implemented Redux Toolkit for cart persistence and guest-to-user cart merging, and Stripe webhooks for payment and order updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'Stripe API', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://shoppymart-mansi.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary hover:bg-primaryLight text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
              <a href="https://github.com/Mansithakkar06/shopping_cart" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors border border-slate-700">
                <i className="fa-brands fa-github"></i> Code
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 md:p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 relative w-full h-full">
              {shoppyMartImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => openModal(shoppyMartImages, idx, 'ShoppyMart')}
                  className="relative group/thumb overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video bg-slate-900 border border-slate-700/50 hover:border-primary/50 transition-all"
                  title={`Click to view ${img.alt}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass-plus text-white text-2xl drop-shadow-md transform scale-90 group-hover/thumb:scale-100 transition-transform duration-200"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ===== Featured Streamify Project ===== */}
      <div className="glass rounded-3xl overflow-hidden shadow-2xl mb-20 border border-slate-700/50 group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-primaryLight transition-colors">
              Streamify – Media Sharing Platform
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Streamify is a full-stack media sharing web application that allows users to upload, stream, and interact with videos.
              It supports secure authentication, video playback, likes, comments, and subscriptions, with Cloud-based media storage using Cloudinary.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'Cloudinary'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://mansi-streamify.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary hover:bg-primaryLight text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
              <a href="https://github.com/Mansithakkar06/Streamify" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors border border-slate-700">
                <i className="fa-brands fa-github"></i> Code
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 md:p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 relative w-full h-full">
              {streamifyImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => openModal(streamifyImages, idx, 'Streamify')}
                  className="relative group/thumb overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video bg-slate-900 border border-slate-700/50 hover:border-primary/50 transition-all"
                  title={`Click to view ${img.alt}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass-plus text-white text-2xl drop-shadow-md transform scale-90 group-hover/thumb:scale-100 transition-transform duration-200"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ===== Other Projects Grid ===== */}
      <div className="flex flex-col items-center mb-12">
        <h3 className="text-2xl font-bold text-slate-200">Other Noteworthy Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, idx) => (
          <div key={idx} className="glass p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-primary/10 hover:border-primary/30 group">
            <div className="flex justify-between items-start mb-6">
              <i className="fa-regular fa-folder text-4xl text-primaryLight"></i>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-xl text-slate-400 hover:text-primaryLight transition-colors">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <h4 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-primaryLight transition-colors">
              {project.title}
            </h4>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.desc}
            </p>
            <div className="text-xs font-mono text-slate-500 flex flex-wrap gap-x-3 gap-y-1 mt-auto">
              {project.tech.split(',').map(t => <span key={t}>{t.trim()}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* ===== Image Lightbox Modal ===== */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 transition-all duration-300"
          onClick={closeModal}
        >
          {/* Close button */}
          <button 
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-6 right-6 z-50 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center transition-all border border-slate-700 shadow-xl hover:scale-105 cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>

          {/* Prev button */}
          {activeModal.images.length > 1 && (
            <button 
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center transition-all border border-slate-700 shadow-xl hover:scale-110 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-lg"></i>
            </button>
          )}

          {/* Next button */}
          {activeModal.images.length > 1 && (
            <button 
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center transition-all border border-slate-700 shadow-xl hover:scale-110 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-lg"></i>
            </button>
          )}

          {/* Modal Content */}
          <div 
            className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 shadow-2xl bg-slate-900 flex items-center justify-center">
              <img 
                src={activeModal.images[activeModal.currentIndex].src} 
                alt={activeModal.images[activeModal.currentIndex].alt}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Caption bar */}
            <div className="mt-4 flex items-center justify-between w-full max-w-5xl px-3 text-slate-300 text-sm">
              <span className="font-medium text-slate-200">
                <strong className="text-primaryLight">{activeModal.projectTitle}:</strong> {activeModal.images[activeModal.currentIndex].alt}
              </span>
              <span className="bg-slate-800/90 px-3 py-1 rounded-full text-xs font-mono text-slate-400 border border-slate-700 shrink-0 ml-4">
                {activeModal.currentIndex + 1} / {activeModal.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
