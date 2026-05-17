import React from 'react';

const Education = () => {
  const eduList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "L.D. College Of Engineering",
      university: "Gujrat Technological University",
      period: "2023 - 2025",
      score: "CGPA: 8.88/10.0"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Som-Lalit Institute of Computer Application",
      university: "Gujrat University",
      period: "2020 - 2023",
      score: "CGPA: 8.67/10.0"
    }
  ];

  return (
    <section id="education" className="scroll-mt-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold text-slate-100 mb-4">Education</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-500 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {eduList.map((item, index) => (
          <div key={index} className="glass p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-primary shadow-xl hover:shadow-primary/10">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                {item.period}
              </div>
              <div className="px-3 py-1 bg-primary/10 border border-primary/20 text-primaryLight rounded text-sm font-bold">
                {item.score}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{item.degree}</h3>
            <div className="text-primaryLight font-semibold text-lg mb-1">{item.institution}</div>
            <div className="text-slate-400 mt-auto pt-4 border-t border-slate-700/50">
              {item.university}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
