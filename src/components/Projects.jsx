import React from 'react';

const Projects = () => {
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

      {/* ===== Featured Streamify Project ===== */}
      <div className="glass rounded-3xl overflow-hidden shadow-2xl mb-20 border border-slate-700/50 group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Featured Project</div>
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
            <div className="grid grid-cols-2 gap-4 relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
              <img src="/Sc1.png" alt="Screenshot" className="rounded-lg shadow-lg object-cover aspect-video" />
              <img src="/Sc2.png" alt="Screenshot" className="rounded-lg shadow-lg object-cover aspect-video" />
              <img src="/Sc5.png" alt="Screenshot" className="rounded-lg shadow-lg object-cover aspect-video" />
              <img src="/Sc8.png" alt="Screenshot" className="rounded-lg shadow-lg object-cover aspect-video" />
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
    </section>
  );
};

export default Projects;
