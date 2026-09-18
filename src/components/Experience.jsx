import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Upsquare Technologies, Ahmedabad",
      duration: "Feb 2026 - Present",
      details: [
        "Developed a full-stack MERN e-commerce application using React.js, Node.js, Express.js, MongoDB, Redux Toolkit, and REST APIs.",
        "Contributed to a client-facing Vue.js application by developing responsive UI components, implementing frontend features, and integrating REST APIs.",
        "Collaborated with the development team to build, optimize, and deliver high-quality web applications."
      ]
    },
    {
      role: "PHP Developer Intern - Laravel",
      company: "Webexpert Infotech, Ahmedabad",
      duration: "Jan 2025 – Jul 2025",
      details: [
        "Developed RESTful APIs and CRUD modules using Laravel and MySQL for backend.",
        "Implemented authentication logic and integrated backend APIs with frontend components.",
        "Debugged, optimized, and tested backend features to improve application performance."
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-slate-100 mb-4">Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="glass p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-primary shadow-xl hover:shadow-primary/10">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                {exp.duration}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.role}</h3>
            <div className="text-primaryLight font-semibold text-lg mb-6">{exp.company}</div>
            
            <ul className="list-disc list-outside ml-4 text-slate-300 space-y-2 text-sm leading-relaxed flex-grow">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
