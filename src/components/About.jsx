import React from 'react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'Vue.js', 'JavaScript', 'Redux Toolkit', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT-based Authentication', 'Laravel'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL'] },
    { category: 'Familiar with', items: ['TypeScript', 'NestJS'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Appwrite', 'Cloudinary', 'VS Code', 'Antigravity'] },
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-slate-100 mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Bio */}
        <div className="flex flex-col gap-6 text-slate-300 text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold text-primaryLight">Get to Know Me</h3>
          <p>
            Hello! I'm <strong className="text-slate-100 font-medium">Mansi Thakkar</strong>, a full-stack web developer with professional experience across both frontend and backend technologies. I currently work as a Software Engineer, building production applications with the MERN stack and Vue.js.
          </p>
          <p>
            As an MCA graduate with a strong foundation in full-stack development, I've built hands-on projects using PHP, Django, and React. After completing a Laravel internship, I transitioned to the <strong className="text-slate-100 font-medium">MERN stack</strong> and have since grown into a professional software engineering role.
          </p>
          <p>
            I'm passionate about writing clean, scalable code and continuously expanding my skill set to deliver high-quality web applications.
          </p>

          <div className="mt-6 flex gap-6">
            <a href="https://github.com/Mansithakkar06" target="_blank" rel="noreferrer" className="text-3xl text-slate-400 hover:text-white transition-transform hover:-translate-y-1">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mansi-thakkar06" target="_blank" rel="noreferrer" className="text-3xl text-slate-400 hover:text-[#0a66c2] transition-transform hover:-translate-y-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/Mansi_thakkar06" target="_blank" rel="noreferrer" className="text-3xl text-slate-400 hover:text-[#e1306c] transition-transform hover:-translate-y-1">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="glass rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-primaryLight mb-8">Technical Skills</h3>
          <div className="flex flex-col gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primaryLight rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
