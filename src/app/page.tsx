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
          className="bg-gray-800 text-sm px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-500 hover:text-white border border-gray-700 hover:border-green-500"
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
          className="bg-gray-800 text-sm px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-500 hover:text-white border border-gray-700 hover:border-green-500"
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

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="relative border-l border-gray-700 space-y-8 pl-6">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-8 border border-white transition-transform duration-300 group-hover:scale-125"></div>
          <div className="p-4 bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
            <time className="text-sm font-semibold leading-none text-gray-400">{item.years}</time>
            <h3 className="text-xl font-bold mt-2">{item.title}</h3>
            <p className="text-green-500 font-medium">{item.subtitle}</p>
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
    title: "Full-Stack Engineer | AI Research & Development",
    aboutMe: "I am a polyglot Software Engineer specializing in distributed systems and AI orchestration. With a background in Music Computing and Audio Engineering, I bridge the gap between complex digital signal processing and modern, scalable software architecture.",
    expandedAboutMe: "Currently, I focus on R&D for autonomous AI agents, engineering modular pipelines that integrate LLMs with real-time communication protocols (SIP/WebRTC). I thrive in environments that require high-performance backend logic (Go/Node) and sophisticated frontend interactions (React).",
    contact: {
      phone: "+(39) 389 871 7057",
      email: "nicola2000bigoni@gmail.com",
      location: "Bergamo, Italy",
    },
    devSkills: [
      "TypeScript", "Golang", "Python", "Node.js", "React", "C++ (JUCE)", 
      "NATS", "Microservices", "REST/OpenAPI", "SIP/WebRTC", 
      "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS (EC2/S3)", "Skaffold"
    ],
    languages: ["Italian (Native)", "Portuguese (Native)", "English (B2)"],
    projects: [
      {
        title: "Modular AI SIP Connector",
        tech: "Golang / OpenAI / SIP",
        desc: "Engineered a low-latency bridge to replace monolithic AI agents. Decoupled the pipeline into modular STT, LLM, and TTS components for sub-millisecond provider switching."
      },
      {
        title: "Agentic MCP Server",
        tech: "Python / Model Context Protocol",
        desc: "Developed a Model Context Protocol server enabling AI agents to interact securely with proprietary database schemas and internal microservices."
      }
    ],
    experience: [
      {
        years: "2023 - Present",
        title: "SOFTWARE ENGINEER / AI R&D",
        subtitle: "Increso S.r.l.",
        details: [
          "Architecting modular Agentic AI frameworks to automate omnichannel customer interactions.",
          "Engineering high-performance Go-based services for real-time SIP and WebRTC communication.",
          "Orchestrating event-driven microservices via NATS, ensuring high-availability for distributed systems.",
          "Full-cycle infrastructure ownership using AWS and local K8s orchestration (Minikube/Skaffold).",
          "Implementing OpenAPI standards to maintain strict contract compliance across polyglot services."
        ],
      },
      {
        years: "2019-2021",
        title: "IT TECH & WEBMASTER",
        subtitle: "Fornoni Soluzioni Informatiche",
        details: [
          "Administered enterprise server backups and relational database systems (MySQL/PostgreSQL).",
          "Managed full-stack web deployments and provided technical support for business clients."
        ],
      },
    ],
    education: [
      {
        years: "2019-2023",
        title: "Bachelor's Degree in Information and Music Computing",
        subtitle: "University of Milan | 101/110",
        details: [
          "Specialized in Digital Signal Processing (DSP) and Audio Programming.",
          "Focused on Machine Learning and VST development using C++/JUCE."
        ],
      },
      {
        years: "2017-2021",
        title: "Pre - Academic Course (Composition)",
        subtitle: "Conservatory of Bergamo",
        details: ["Advanced Harmony, Music Theory, and Score Interpretation."],
      },
    ],
    musicExperience: [
      {
        years: "2018 - Present",
        title: "Music Director, Artist & Producer",
        subtitle: "Freelance",
        details: [
          "Professional music production, arrangement, and live sound engineering.",
          "Directing ensembles and managing complex audio signal chains for live performances."
        ],
      }
    ]
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        
        {/* Header and Photo */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-xl transition-transform duration-500 hover:scale-105">
              <img
                src="/nicola-bigoni.jpg"
                alt="Nicola Bigoni"
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

        {/* Contact Information */}
        <section className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <a href={`tel:${personalData.contact.phone}`} className="hover:text-green-300 transition-colors duration-200">
              <span className="font-bold">Phone:</span> {personalData.contact.phone}
            </a>
            <a href={`mailto:${personalData.contact.email}`} className="hover:text-green-300 transition-colors duration-200">
              <span className="font-bold">Email:</span> {personalData.contact.email}
            </a>
            <p><span className="font-bold">Location:</span> {personalData.contact.location}</p>
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

        {/* R&D Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Featured R&D Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalData.projects.map((project, i) => (
              <div key={i} className="p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group">
                <h3 className="text-xl font-bold text-green-400">{project.title}</h3>
                <p className="text-xs font-mono text-gray-500 mb-2">{project.tech}</p>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </div>
            ))}
          </div>
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

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Professional Experience</h2>
          <Timeline items={personalData.experience} />
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Education</h2>
          <Timeline items={personalData.education} />
        </section>

        {/* Music Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Music Experience & Courses</h2>
          <Timeline items={personalData.musicExperience} />
        </section>
      </main>

      <footer className="mt-12 py-6 text-center text-gray-400 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Nicola Bigoni. All rights reserved.</p>
      </footer>
    </div>
  );
}
