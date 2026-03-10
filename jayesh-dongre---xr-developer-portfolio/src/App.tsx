import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Terminal,
  ChevronRight,
  Monitor,
  Smartphone,
  Box,
  Zap
} from 'lucide-react';

const SKILLS = {
  engines: ['Unity', 'Unreal Engine 5', 'Unreal Engine 4', 'Blueprints'],
  platforms: ['Meta Quest', 'Apple Vision Pro', 'ARCore', 'ARKit', 'WebXR'],
  languages: ['C#', 'C++', 'Python', 'Swift', 'JavaScript', 'HTML/CSS'],
  tools: ['GitHub', 'Blender', 'Visual Studio', 'Pixel Streaming', 'Cloudflare', 'AWS S3', 'BLE', 'LLM Integration']
};

const EXPERIENCE = [
  {
    role: 'XR Developer',
    company: 'Ethosh Design Pvt Ltd',
    period: '04/2025 - Present',
    highlights: [
      'Designed high concurrency XR streaming system with Python server and Unity VR client.',
      'Infrastructure using Cloudflare for unlimited concurrent users streaming live 3D content.',
      'Integrated Local LLM into Apple Vision Pro medical app for on-device querying.',
      'Developed custom Unity Plugin for automated data persistence to AWS S3.'
    ]
  },
  {
    role: 'Associate XR Developer',
    company: 'Ethosh Design Pvt Ltd',
    period: '08/2022 - 03/2024',
    highlights: [
      'Designed high-fidelity VR firearm simulator for NCC with military instructors.',
      'Developed multiplayer networking module in Unreal Engine for surgical training.',
      'Created cross-platform product showcase app for medical devices (iOS, Android, Windows).'
    ]
  },
  {
    role: 'Intern XR Developer',
    company: 'Ethosh Design Pvt Ltd',
    period: '02/2022 - 07/2022',
    highlights: [
      'Integrated MetaHumans into Windows applications for interactive guides.',
      'Implemented Unreal Engine applications using Pixel Streaming for low-end devices.',
      'Created modular helper functions to decrease code redundancy.'
    ]
  }
];

const EDUCATION = [
  {
    degree: 'Masters in Computer Applications (MCA)',
    school: 'Fergusson College, Pune',
    year: '2022'
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: 'Fergusson College, Pune',
    year: '2020'
  }
];

const PROJECTS = [
  {
    title: 'Unity WebRTC',
    description: 'A high-performance system for streaming videos and real-time data in Unity using WebRTC. Ideal for low-latency XR applications.',
    githubUrl: 'https://github.com/jayesh711/Unity_WebRTC-',
    tags: ['Unity', 'WebRTC', 'C#', 'Networking']
  },
  {
    title: '3D Product Configurator',
    description: 'An interactive 3D configurator allowing users to upload models, add hotspots, and trigger animations dynamically.',
    githubUrl: 'https://github.com/jayesh711/3D-Product-Configurator-',
    tags: ['Unity', '3D', 'UI/UX', 'XR']
  },
  {
    title: 'Image to 3D',
    description: 'A geometry prediction model that generates spatially consistent 3D geometry from arbitrary visual inputs.',
    githubUrl: 'https://github.com/jayesh711/image-to-3d',
    tags: ['Computer Vision', 'Geometry', 'AI']
  },
  {
    title: 'Gameplay Ability System',
    description: 'A robust implementation of the Unreal Engine Gameplay Ability System (GAS) for complex character interactions.',
    githubUrl: 'https://github.com/jayesh711/Gameplay_Ability_system',
    tags: ['Unreal Engine', 'C++', 'GAS']
  },
  {
    title: 'Steam Menu System',
    description: 'A comprehensive menu and matchmaking system for connecting players across Steam using Unreal Engine.',
    githubUrl: 'https://github.com/jayesh711/MenuSystem',
    tags: ['Unreal Engine', 'Steam API', 'Multiplayer']
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="min-h-screen bg-xr-bg relative overflow-hidden selection:bg-xr-primary selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="fixed inset-0 bg-radial-gradient(circle_at_50%_50%,transparent_0%,rgba(248,250,252,0.4)_100%) pointer-events-none" />
      <div className="scanline" />

      {/* Navigation / Header */}
      <header className="relative z-20 border-b border-xr-line bg-white/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-xr-primary rounded flex items-center justify-center shadow-sm">
              <Terminal size={18} className="text-white font-bold" />
            </div>
            <span className="font-mono font-bold tracking-tighter text-xl text-slate-900">JAYESH_DONGRE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-500">
            <a href="#about" className="hover:text-xr-primary transition-colors">01.ABOUT</a>
            <a href="#projects" className="hover:text-xr-primary transition-colors">02.PROJECTS</a>
            <a href="#work" className="hover:text-xr-primary transition-colors">03.WORK</a>
            <a href="#skills" className="hover:text-xr-primary transition-colors">04.SKILLS</a>
            <a href="#contact" className="hover:text-xr-primary transition-colors">05.CONTACT</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jayesh711" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-xr-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jayesh-dongre-55ba361ab/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-xr-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xr-primary text-sm mb-4 tracking-widest font-semibold">SYSTEM_INITIALIZED // HELLO_WORLD</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-none text-slate-900">
              CRAFTING <span className="text-xr-primary glow-text">IMMERSIVE</span> REALITIES.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Innovative XR Developer with 4+ years of experience building high-stakes applications for healthcare and defense. 
              Specializing in 3D streaming infrastructure, real-time rendering, and cross-platform deployment on Vision Pro and Meta Quest.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:dongrejayesh89@gmail.com"
                className="px-8 py-4 bg-xr-primary text-white font-bold rounded shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2"
              >
                <Mail size={18} /> GET IN TOUCH
              </a>
              <a 
                href="#projects"
                className="px-8 py-4 border border-xr-line hover:border-xr-primary text-slate-700 font-bold rounded bg-white transition-all flex items-center gap-2"
              >
                <Monitor size={18} /> VIEW PROJECTS
              </a>
            </div>
          </motion.div>
        </section>

        {/* GitHub Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-mono tracking-tighter text-slate-900">02.GITHUB_PROJECTS</h2>
            <div className="h-px flex-1 bg-xr-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-xr-card border border-xr-line rounded-2xl shadow-sm hover:shadow-xl hover:border-xr-primary/30 transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-xr-primary/10 rounded-lg text-xr-primary">
                    <Box size={24} />
                  </div>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-xr-primary transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-xr-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-mono font-bold tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded border border-xr-line">
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats / Tech Stack Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: <Monitor className="text-xr-primary" />, label: 'XR PLATFORMS', value: 'Vision Pro, Meta Quest, WebXR' },
            { icon: <Cpu className="text-xr-primary" />, label: 'ENGINES', value: 'Unreal Engine 5, Unity' },
            { icon: <Code2 className="text-xr-primary" />, label: 'LANGUAGES', value: 'C++, C#, Python, Swift' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-xr-card border border-xr-line rounded-xl shadow-sm hover:shadow-md hover:border-xr-primary/30 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <p className="font-mono text-xs text-slate-400 mb-1">{stat.label}</p>
              <p className="font-bold text-lg text-slate-800">{stat.value}</p>
            </motion.div>
          ))}
        </section>

        {/* Experience Section */}
        <section id="work" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-mono tracking-tighter text-slate-900">03.EXPERIENCE</h2>
            <div className="h-px flex-1 bg-xr-line" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {EXPERIENCE.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(exp.role)}
                  className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap border-l-2 transition-all ${
                    (activeTab === exp.role || (i === 0 && activeTab === 'experience'))
                      ? 'border-xr-primary text-xr-primary bg-xr-primary/5'
                      : 'border-xr-line text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {exp.company.split(' ')[0]}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {EXPERIENCE.map((exp, i) => (
                  (activeTab === exp.role || (i === 0 && activeTab === 'experience')) && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-1 text-slate-900">
                        {exp.role} <span className="text-xr-primary">@ {exp.company}</span>
                      </h3>
                      <p className="font-mono text-sm text-slate-400 mb-6">{exp.period}</p>
                      <ul className="space-y-4">
                        {exp.highlights.map((item, j) => (
                          <li key={j} className="flex gap-3 text-slate-600 leading-relaxed">
                            <ChevronRight size={18} className="text-xr-primary shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-mono tracking-tighter text-slate-900">04.SKILLS_MATRIX</h2>
            <div className="h-px flex-1 bg-xr-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'ENGINES', items: SKILLS.engines, icon: <Box size={20} /> },
              { title: 'PLATFORMS', items: SKILLS.platforms, icon: <Smartphone size={20} /> },
              { title: 'LANGUAGES', items: SKILLS.languages, icon: <Code2 size={20} /> },
              { title: 'TOOLS', items: SKILLS.tools, icon: <Zap size={20} /> }
            ].map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-xr-card border border-xr-line rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2 text-xr-primary mb-6">
                  {category.icon}
                  <h3 className="font-mono font-bold tracking-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-50 border border-xr-line text-xs font-mono rounded-full text-slate-500">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-mono tracking-tighter text-slate-900">05.EDUCATION</h2>
            <div className="h-px flex-1 bg-xr-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="p-6 bg-xr-card border border-xr-line rounded-xl shadow-sm flex gap-4">
                <div className="w-12 h-12 bg-xr-primary/10 rounded flex items-center justify-center shrink-0">
                  <GraduationCap className="text-xr-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-500 text-sm mb-1">{edu.school}</p>
                  <p className="font-mono text-xs text-xr-primary font-semibold">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-xr-line text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-slate-900">READY TO BUILD THE <span className="text-xr-primary">FUTURE?</span></h2>
            <p className="max-w-xl mx-auto text-slate-500 mb-12 text-lg">
              I'm currently open to new opportunities and collaborations in the XR space. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="mailto:dongrejayesh89@gmail.com" 
                className="text-2xl md:text-4xl font-mono text-xr-primary hover:text-blue-700 transition-all font-bold"
              >
                dongrejayesh89@gmail.com
              </a>
              <div className="flex items-center gap-8 mt-4">
                <a href="https://github.com/jayesh711" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-mono text-sm">
                  <Github size={20} /> GITHUB
                </a>
                <a href="https://www.linkedin.com/in/jayesh-dongre-55ba361ab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-mono text-sm">
                  <Linkedin size={20} /> LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 border-t border-xr-line text-center font-mono text-xs text-slate-300">
        <p>© 2024 JAYESH_DONGRE // ALL_RIGHTS_RESERVED</p>
        <p className="mt-2">BUILT_WITH_REACT_AND_TAILWIND</p>
      </footer>
    </div>
  );
}
