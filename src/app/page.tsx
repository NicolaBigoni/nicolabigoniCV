"use client";

import { useState } from 'react';

type DevSkillsProps = {
  skills: string[];
};

const DevSkills = ({ skills }: DevSkillsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-800 text-sm px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-500 hover:text-white"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

type Languages = {
  languages: string[];
};
const LanguageSkills = ({ languages }: Languages) => {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang, index) => (
        <span
          key={index}
          className="bg-gray-800 text-sm px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-500 hover:text-white"
        >
          {lang}
        </span>
      ))}
    </div>
  );
};
type TimelineItem = {
  years: string;
  title: string;
  subtitle: string;
  details: string[];
};

type TimelineWorks = {
  items: TimelineItem[];
};

const Timeline = ({ items }: TimelineWorks) => {
  return (
    <div className="relative border-l border-gray-700 space-y-8 pl-6">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-8 border border-white transition-transform duration-300 group-hover:scale-125"></div>
          <div className="p-4 bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
            <time className="text-sm font-semibold leading-none text-gray-400">{item.years}</time>
            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
            <p className="text-gray-400">{item.subtitle}</p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
              {item.details.map((detail: string, i: number) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [showFullAboutMe, setShowFullAboutMe] = useState(false);

  const personalData = {
    name: "NICOLA BIGONI",
    title: "Software Developer & Musician",
    aboutMe: "Nicola Bigoni is a highly capable and versatile professional with dual Italian and Brazilian citizenship. The strong music background as Music Director, artist and producer well complements his academic percourse in Informatics, creating a strong figure in the area of musical informatics, DSP and audio engineering.",
    expandedAboutMe: "I'm a passionate front-end developer and UX designer. I love creating interactive and engaging user experiences. My skills in React, coupled with a deep understanding of user-centered design, allow me to build applications that are not only functional but also a pleasure to use. I'm always looking for new challenges to demonstrate my abilities.",
    contact: {
      phone: "+(39) 389 871 7057",
      email: "nicola2000bigoni@gmail.com",
      location: "Via A. Locatelli, 24, Ardesio (BG)",
    },
    devSkills: ["JS", "C++", "Python", "node.js", "React", "JUCE", "MySQL", "MongoDB", "Kubernetes"],
    languages: ["Italian (Mother tongue)", "Portuguese (Mother tongue)", "English (B2)"],
    education: [
      {
        years: "2014-2019",
        title: "Information and Technology Diploma",
        subtitle: "ISTITUTO VALLE SERIANA | 100/100",
        details: [],
      },
      {
        years: "2017-2021",
        title: "Pre - Academic course",
        subtitle: "CONSERVATORY OF BERGAMO",
        details: [],
      },
      {
        years: "2019-2023",
        title: "Bachelor's Degree in Information and Music Computing",
        subtitle: "UNIVERSITY OF MILAN | 101/110",
        details: [],
      },
    ],
    experience: [
      {
        years: "2019-2021",
        title: "IT TECH & WEBMASTER",
        subtitle: "Fornoni Soluzioni Informatiche",
        details: [
          "Tech support",
          "Create and manages websites"
        ],
      },
      {
        years: "2023 - Present",
        title: "SOFTWARE ENGINEER",
        subtitle: "Increso S.r.l.",
        details: [
          "Frontend and Backend development using node.js, MongoDB and React.js",
          "Small DevOps tasks like managing releases and testing environments"
        ],
      },
    ]
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        
        {/* Intestazione e foto */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="flex-shrink-0">
            {/* Sostituisci l'URL con la tua immagine */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl transition-transform duration-500 hover:scale-105">
              <img
                src="https://placehold.co/160x160/22c55e/ffffff?text=NB" 
                alt="Nicola Bigoni"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-green-500">
              {personalData.name}
            </h1>
            <p className="text-2xl md:text-3xl mt-2 text-gray-300">{personalData.title}</p>
          </div>
        </header>

        {/* Informazioni di contatto */}
        <section className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <a href={`tel:${personalData.contact.phone}`} className="hover:text-green-300 transition-colors duration-200">
              <span className="font-bold">Phone:</span> {personalData.contact.phone}
            </a>
            <a href={`mailto:${personalData.contact.email}`} className="hover:text-green-300 transition-colors duration-200">
              <span className="font-bold">Email:</span> {personalData.contact.email}
            </a>
            <p><span className="font-bold">Address:</span> {personalData.contact.location}</p>
          </div>
        </section>

        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-4">About Me</h2>
          <p 
            className="text-gray-300 leading-relaxed cursor-pointer"
            onClick={() => setShowFullAboutMe(!showFullAboutMe)}
          >
            {showFullAboutMe ? personalData.expandedAboutMe : personalData.aboutMe}
            <span className="text-green-500 font-semibold ml-2">
              {showFullAboutMe ? '...read less' : '...read more'}
            </span>
          </p>
        </section>

        {/* Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Dev Skills</h2>
            <DevSkills skills={personalData.devSkills} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Languages</h2>
            <LanguageSkills languages={personalData.languages} />
          </div>
        </section>

        {/* Esperienza professionale */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Professional Experience</h2>
          <Timeline items={personalData.experience} />
        </section>

        {/* Istruzione */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Education</h2>
          <Timeline items={personalData.education} />
        </section>
      </main>
    </div>
  );
}
