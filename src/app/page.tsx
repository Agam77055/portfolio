'use client'

import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { CyclingTypingAnimation } from '@/components/ui/animated-elements'
import { Projects } from '@/components/sections/Projects'

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "AI/ML Researcher",
    "Data Science Enthusiast", 
    "Problem Solver",
    "TypeScript Developer",
    "Web Developer",
    "Creative Problem Solver",
    "Space Technology Enthusiast",
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* Left side - Name and Roles */}
              <div className="flex-1 text-left order-2 md:order-1">
                <div className="space-y-2 md:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl text-white/80">
                    Hi, I&apos;m
                  </h1>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    Agam Harpreet Singh
                  </h2>
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 md:mb-8 mt-6 md:mt-8">
                  <CyclingTypingAnimation 
                    texts={roles}
                    className="text-white"
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                  />
                </p>
                
                {/* Social Links & Resume */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
                  <a 
                    href="https://github.com/Agam77055" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/40"
                  >
                    <i className="devicon-github-original text-lg"></i>
                    <span className="text-xs md:text-sm">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/agam-harpreet-singh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50"
                  >
                    <i className="devicon-linkedin-plain text-lg"></i>
                    <span className="text-xs md:text-sm">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://leetcode.com/u/Agam770/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-300 px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/50"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.404-.278l3.501 2.886c.593.49 1.704.49 2.298 0a1.65 1.65 0 0 0 0-2.298s-3.5-2.885-3.5-2.885C14.744.846 13.483 0 13.483 0z"/>
                    </svg>
                    <span className="text-xs md:text-sm">LeetCode</span>
                  </a>
                  
                  <a 
                    href="/assets/resume/Agam_H_Singh-Resume_.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-red-500/30 hover:border-red-400/50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs md:text-sm">Resume</span>
                  </a>
                </div>
                
                <div className="text-base md:text-lg text-white/60">
                  Welcome to my portfolio. Let&apos;s connect!
                </div>
              </div>

              {/* Right side - Static Photo */}
              <div className="flex-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative w-[350px] sm:w-[380px] md:w-[450px] lg:w-[500px] aspect-[4/5]">
                  <Image
                    src="/assets/images/IMG_7656.jpg"
                    alt="Agam Harpreet Singh"
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
                    className="object-cover rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight">
                <span className="text-red-400">About </span> Me
              </h2>
              
              <div className="max-w-9xl mx-auto text-left bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-4 md:mb-6">
                  I&apos;m a <span className="text-red-400 font-semibold">BTech student in AI & Data Science</span> at IIT Jodhpur, 
                  passionate about building the future through technology. I love turning complex problems into elegant solutions.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-4 md:mb-6">
                  Currently diving deep into <span className="text-white font-medium">Machine Learning Algorithms</span>, 
                  <span className="text-white font-medium"> Full-Stack Development</span>, and 
                  <span className="text-white font-medium"> Modern Web Technologies</span>. 
                  I believe in learning by building and sharing knowledge with the community.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new tech trends, experimenting with side projects, 
                  or diving into research papers. In my free time I enjoy watching <span className="text-red-400 font-medium">Formula 1 racing</span> and 
                  love to do <span className="text-red-400 font-medium">Gaming</span>. Always excited about the next breakthrough in AI and its real-world applications.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-16 md:mt-20">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
                My <span className="text-red-400">Tech Stack</span>
              </h3>
              
              {/* Tech Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
                {/* Languages */}
                <div className="bg-black/30 rounded-2xl p-4 md:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-base md:text-lg font-bold text-red-400 mb-3 md:mb-4 text-center">Languages</h4>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { name: "C", icon: "devicon-c-plain" },
                      { name: "C++", icon: "devicon-cplusplus-plain" },                      
                      { name: "Python", icon: "devicon-python-plain colored" },
                      { name: "Java", icon: "devicon-java-plain colored" },
                      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-2 md:space-x-3 p-1.5 md:p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200">
                        <i className={`${tech.icon} text-lg md:text-xl flex-shrink-0`}></i>
                        <span className="text-white text-xs md:text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="bg-black/30 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-lg font-bold text-red-400 mb-4 text-center">Frontend</h4>
                  <div className="space-y-3">
                    {[
                      { name: "React JS", icon: "devicon-react-original colored" },
                      { name: "Next JS", icon: "devicon-nextjs-plain" },
                      { name: "Vite", icon: "devicon-vitejs-plain colored" },
                      { name: "Figma", icon: "devicon-figma-plain colored" },
                      { name: "HTML5", icon: "devicon-html5-plain colored" },
                      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200">
                        <i className={`${tech.icon} text-xl flex-shrink-0`}></i>
                        <span className="text-white text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-black/30 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-lg font-bold text-red-400 mb-4 text-center">Backend</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
                      { name: "Express.js", icon: "devicon-express-original" },
                      { name: "Flask", icon: "devicon-flask-plain" },
                      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200">
                        <i className={`${tech.icon} text-xl flex-shrink-0`}></i>
                        <span className="text-white text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI/ML & Data */}
                <div className="bg-black/30 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-lg font-bold text-red-400 mb-4 text-center">AI/ML & Data</h4>
                  <div className="space-y-3">
                    {[
                      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
                      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
                      { name: "Pandas", icon: "devicon-pandas-plain" },
                      { name: "NumPy", icon: "devicon-numpy-plain colored" },
                      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
                      { name: "OpenCV", icon: "devicon-opencv-plain colored" },
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200">
                        <i className={`${tech.icon} text-xl flex-shrink-0`}></i>
                        <span className="text-white text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-black/30 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-lg font-bold text-red-400 mb-4 text-center">Tools</h4>
                  <div className="space-y-3">
                    {[
                      { name: "VS Code", icon: "devicon-vscode-plain colored" },
                      { name: "Linux", icon: "devicon-linux-plain" },
                      { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
                      { name: "Git", icon: "devicon-git-plain colored" },
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200">
                        <i className={`${tech.icon} text-xl flex-shrink-0`}></i>
                        <span className="text-white text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DevOps */}
                <div className="bg-black/30 rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-lg font-bold text-red-400 mb-4 text-center">DevOps</h4>
                  <div className="space-y-3">
                    {[
                      { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
                      { name: "Docker", icon: "devicon-docker-plain colored" },
                      { name: "GCP", icon: "devicon-googlecloud-plain" },
                      { name: "Azure", icon: "devicon-azure-plain colored" },
                    ].map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-200">
                        <i className={`${tech.icon} text-xl flex-shrink-0`}></i>
                        <span className="text-white text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
                My <span className="text-red-400">Achievements</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Inter IIT Tech Meet Achievement */}
              <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/30 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/assets/images/INTER_IIT_logo.jpeg"
                      alt="Achievement Medal"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Inter IIT Tech Meet 13.0</h3>
                    <p className="text-red-400 font-semibold text-sm md:text-base">3rd Place - Chandrayaan-2 Data Analysis</p>
                  </div>
                </div>
                
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                  Competed against <span className="text-red-400 font-semibold">all 23 IITs</span> in this landmark event hosted by IIT Bombay. 
                  Our team analyzed <span className="text-red-400 font-semibold">Chandrayaan-2 XRF spectral data</span> to detect elements like Calcium and Titanium on the lunar surface, 
                  using advanced ML techniques and statistical analysis.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>XRF Spectral Data Analysis & Solar Flare Data Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Kriging Method for Data Gap Filling & 3D Lunar Surface Mapping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Team Collaboration with 8 Members from IIT Jodhpur</span>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="mb-6">
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20 hover:border-red-400/30 transition-all duration-300">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-red-500/10">
                      <Image
                        src="/assets/images/INTER_IIT.jpg"
                        alt="Inter IIT Tech Meet 13.0 Certificate - 3rd Place"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-white/60 text-xs mt-2">Inter IIT Team Members</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-white/60 text-sm">2024</span>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30">
                    Lunar Research
                  </span>
                </div>
              </div>

              {/* IIT Ropar Hackathon Achievement */}
              <div className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/30 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/assets/images/IITRPR.jpeg"
                      alt="Achievement Medal"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">IIT Ropar Tech Fest</h3>
                    <p className="text-red-400 font-semibold text-sm md:text-base">3rd Place - Deepfake Detection Model</p>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed mb-4">
                  Secured 3rd place at IIT Ropar&apos;s tech fest with a <span className="text-red-400 font-semibold">Deepfake Detection Model </span> 
                  using <span className="text-red-400 font-semibold">EfficientNetB0 architecture</span>. Built a robust image classification system to distinguish between &quot;fake&quot; and &quot;real&quot; images 
                  using advanced transfer learning techniques.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>EfficientNetB0 Transfer Learning Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Image Classification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Fake vs Real Image Detection System</span>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="mb-6">
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20 hover:border-red-400/30 transition-all duration-300">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-red-500/10">
                      <Image
                        src="/assets/images/IITRPR_certificate.png"
                        alt="IIT Ropar Tech Fest Certificate - 3rd Place Deepfake Detection"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-white/60 text-xs mt-2">Certificate of Achievement</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-white/60 text-sm">2025</span>
                                      <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                    Deep Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Get In <span className="text-red-400">Touch</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70">
                I&apos;m always interested in hearing about new opportunities and connecting with fellow developers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-black/30 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                <form 
                  className="space-y-6" 
                  onSubmit={async (e) => {
                    e.preventDefault(); // Prevent default form submission and redirect
                    
                    const form = e.target as HTMLFormElement;
                    const button = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                    const originalText = button.textContent;
                    
                    // Show loading state
                    button.textContent = 'Sending...';
                    button.disabled = true;
                    
                    try {
                      // Submit form data via fetch
                      const formData = new FormData(form);
                      const response = await fetch('https://formspree.io/f/xgvykbzd', {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      });
                      
                      if (response.ok) {
                        // Success - reset form and show success message
                        form.reset();
                        button.textContent = 'Message Sent! ✓';
                        button.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                        button.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                        button.style.color = 'rgb(134, 239, 172)';
                        
                        setTimeout(() => {
                          button.textContent = originalText;
                          button.style.backgroundColor = '';
                          button.style.borderColor = '';
                          button.style.color = '';
                          button.disabled = false;
                        }, 3000);
                      } else {
                        throw new Error('Failed to send message');
                      }
                    } catch {
                      // Error handling
                      button.textContent = 'Failed to send. Try again.';
                      button.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                      button.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                      button.style.color = 'rgb(248, 113, 113)';
                      
                      setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '';
                        button.style.borderColor = '';
                        button.style.color = '';
                        button.disabled = false;
                      }, 3000);
                    }
                  }}
                >
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                      placeholder=""
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div>
                    <label htmlFor="mobile" className="block text-white/70 text-sm font-medium mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors"
                      placeholder=""
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-300 px-6 py-3 rounded-lg font-medium transition-colors duration-200 border border-red-500/30 hover:border-red-400/40 cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-black/30 rounded-2xl p-8 border border-red-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s connect</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-white/70">agamhsingh@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-white font-medium">Mobile</div>
                        <div className="text-white/70">+91 982-177-2005</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-white font-medium">Location</div>
                        <div className="text-white/70">Noida, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-black/30 rounded-2xl p-8 border border-red-500/20">
                  <h3 className="text-xl font-bold text-white mb-6">Follow me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/agam-harpreet-singh" 
          target="_blank"
          rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      <i className="devicon-linkedin-plain text-blue-400 text-xl"></i>
                    </a>
                    
                    <a 
                      href="https://github.com/Agam77055" 
          target="_blank"
          rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <i className="devicon-github-original text-white text-xl"></i>
                    </a>

                      <a 
                        href="https://leetcode.com/u/Agam770/" 
          target="_blank"
          rel="noopener noreferrer"
                        className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center border border-yellow-500/30 hover:bg-yellow-500/30 transition-colors"
                      >
                        <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                      </a>
                  </div>
                </div>
              </div>
            </div>
    </div>
        </section>

      </main>
    </>
  )
}
