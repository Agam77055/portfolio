import Image from 'next/image'

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
          My <span className="text-red-400">Projects</span>
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          {/* Chat-Sphere Project */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Project Info */}
            <div className="order-1 px-2 sm:px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">ChatSphere</h3>
              
              {/* Project Preview - Moved here for mobile */}
              <div className="lg:hidden mb-6">
                <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                    <Image
                      src="/assets/images/Chat-Sphere.png" 
                      alt="ChatSphere AI Chatbot Interface" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="text-center">
                    <h4 className="text-white/80 text-base sm:text-lg font-medium mb-2">AI Chatbot Interface</h4>
                    <p className="text-white/60 text-xs sm:text-sm">Interactive chat interface with NLP capabilities</p>
                    <div className="mt-3">
                      <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30">
                        ML Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/70 mb-4 md:mb-6 leading-relaxed">
              Successfully crafted and published an advanced <span className="text-red-400 font-semibold">Chatbot framework</span> from scratch using Python with enhanced <span className="text-red-400 font-semibold">NLP capabilities</span>, specifically designed for college environments. 
              Features custom TF-IDF vectorization, multiple <span className="text-red-400 font-semibold">ML classifiers (Random Forest achieving 91.11% accuracy)</span>, and containerized deployment. Published on Ready Tensor platform.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Python</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">Flask</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">NLP</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">Machine Learning</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Docker</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">ReactJS</span>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <a href="https://prml-project-tan.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-red-500/30 flex items-center gap-2 text-xs sm:text-sm">
                  LIVE DEMO <span className="text-base sm:text-lg">↗</span>
                </a>
                <a href="https://github.com/Agam77055/ChatSphere" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm">
                  GITHUB <i className="devicon-github-original text-base sm:text-lg"></i>
                </a>
                <a href="https://app.readytensor.ai/publications/pVfa3uz9TrrB" target="_blank" rel="noopener noreferrer" className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-blue-500/30 flex items-center gap-2 text-xs sm:text-sm">
                  PUBLICATION <span className="text-base sm:text-lg">📄</span>
                </a>
              </div>
            </div>

            {/* Project Preview - Desktop only */}
            <div className="hidden lg:block order-2">
              <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                {/* Project Image */}
                <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                  <Image
                    src="/assets/images/Chat-Sphere.png" 
                    alt="ChatSphere AI Chatbot Interface" 
                    width={600} 
                    height={400} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Info */}
                <div className="text-center">
                  <h4 className="text-white/80 text-base sm:text-lg font-medium mb-2">AI Chatbot Interface</h4>
                  <p className="text-white/60 text-xs sm:text-sm">Interactive chat interface with NLP capabilities</p>
                  <div className="mt-3">
                    <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30">
                      ML Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NextCommerce Project */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Project Info */}
            <div className="order-2 px-2 sm:px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">NextCommerce</h3>
              
              {/* Project Preview - Moved here for mobile */}
              <div className="lg:hidden mb-6">
                <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                    <Image 
                      src="/assets/images/Next-Commerce.png" 
                      alt="NextCommerce E-commerce Platform" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="text-center">
                    <h4 className="text-white/80 text-base sm:text-lg font-medium mb-2">E-commerce Platform</h4>
                    <p className="text-white/60 text-xs sm:text-sm">Modern shopping experience with cart functionality</p>
                    <div className="mt-3">
                      <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30">
                        Full-Stack Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/70 mb-4 md:mb-6 leading-relaxed">
                Built a modern e-commerce website with intelligent <span className="text-red-400 font-semibold">Product Recommendation System</span> that suggests products 
                based on user purchase history and recently viewed items. Features responsive design, <span className="text-red-400 font-semibold">Cart Management</span>, 
                <span className="text-red-400 font-semibold"> User Authentication with Google integration</span>, and optimized performance using Next.js and TypeScript.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Next.js</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">React</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">TypeScript</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">MongoDB</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Express.js</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">C++</span>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <a href="https://ecommerce-website-seven-green.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-red-500/30 flex items-center gap-2 text-xs sm:text-sm">
                  LIVE DEMO <span className="text-base sm:text-lg">↗</span>
                </a>
                <a href="https://github.com/Agam77055/NextCommerce" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm">
                  GITHUB <i className="devicon-github-original text-base sm:text-lg"></i>
                </a>
              </div>
            </div>

            {/* Project Preview - Desktop only */}
            <div className="hidden lg:block order-1">
              <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                {/* Project Image */}
                <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                  <Image 
                    src="/assets/images/Next-Commerce.png" 
                    alt="NextCommerce E-commerce Platform" 
                    width={600} 
                    height={400} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Info */}
                <div className="text-center">
                  <h4 className="text-white/80 text-base sm:text-lg font-medium mb-2">E-commerce Platform</h4>
                  <p className="text-white/60 text-xs sm:text-sm">Modern shopping experience with cart functionality</p>
                  <div className="mt-3">
                    <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30">
                      Full-Stack Project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Deepfake Detection Project */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Project Info */}
            <div className="order-1 px-2 sm:px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Deepfake Detection Model</h3>
              
              {/* Project Preview - Moved here for mobile */}
              <div className="lg:hidden mb-6">
                <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                    <Image
                      src="/assets/images/Deepfake.png" 
                      alt="EfficientNetB0 for fake image detection" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="text-center">
                    <h4 className="text-white/80 text-base sm:text-lg font-medium mb-2">Deep Learning Model</h4>
                    <p className="text-white/60 text-xs sm:text-sm">EfficientNetB0 for fake image detection</p>
                    <div className="mt-3">
                      <span className="inline-block bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                        🏆 3rd Place Winner
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed">
                Developed a robust image classification system using <span className="text-red-400 font-semibold">EfficientNetB0 transfer learning architecture </span> 
                to distinguish between fake and real images. This project secured <span className="text-red-400 font-bold">3rd place at IIT Ropar's tech fest</span>, 
                demonstrating advanced <span className="text-red-400 font-semibold">deep learning capabilities</span> in detecting deepfakes and manipulated media.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Python</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">TensorFlow</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">EfficientNetB0</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">Deep Learning</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Image Classification</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">Transfer Learning</span>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <a href="https://github.com/Agam77055/Deepfake-Detection-Model" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-3 sm:px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-xs sm:text-sm">
                  GITHUB <i className="devicon-github-original text-base sm:text-lg"></i>
                </a>
              </div>
            </div>

            {/* Project Preview - Desktop only */}
            <div className="hidden lg:block order-2">
              <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                {/* Project Image */}
                <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                    <Image 
                      src="/assets/images/Deepfake.png" 
                      alt="EfficientNetB0 for fake image detection" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                
                <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 text-lg">🏆</span>
                    <span className="text-red-300 font-semibold">Achievement</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Secured 3rd place at IIT Ropar's tech fest for innovative deepfake detection using EfficientNetB0 architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chandrayaan-2 Data Analysis Project */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Project Info */}
            <div className="order-2 px-2 sm:px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Chandrayaan-2 Data Analysis</h3>
              
              {/* Project Preview - Moved here for mobile */}
              <div className="lg:hidden mb-6">
                <div className="bg-black/30 rounded-2xl p-4 sm:p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                  {/* ISRO Project Image */}
                  <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                    <Image
                      src="/assets/images/ISRO.png" 
                      alt="ISRO Chandrayaan-2 Data Analysis Interface" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="text-center">
                    <h4 className="text-white/80 text-base sm:text-lg font-medium mb-2">Lunar Data Analysis Platform</h4>
                    <p className="text-white/60 text-xs sm:text-sm">XRF spectral data processing & visualization</p>
                    <div className="mt-3">
                      <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs border border-red-500/30">
                        🏆 Inter IIT 3rd Place
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-8 leading-relaxed">
                Developed a comprehensive data analysis platform for <span className="text-red-400 font-semibold">ISRO's Chandrayaan-2 XRF spectral data </span> 
                processing and visualization. This project secured <span className="text-red-400 font-bold">3rd place at Inter IIT Tech Meet 13.0</span>, 
                competing against all 23 IITs in India. Implemented Kriging method for data interpolation, 
                3D lunar surface mapping, and element detection for Calcium & Titanium on the lunar surface.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Python</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">Machine Learning</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Data Science</span>
                <span className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-400/30">Space Research</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-red-500/30">Statistical Analysis</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://drive.google.com/file/d/1oWBa8j3_s7mD7AKZawfo1Rfe-Zlbc9SL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-red-500/30 flex items-center gap-2 text-xs sm:text-sm">
                  PROBLEM STATEMENT <span className="text-base sm:text-lg">↗</span>
                </a>
                <a href="https://drive.google.com/file/d/1hggjVvJFMUwDth0YVdie0aq7KhXaJgKZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-blue-500/30 flex items-center gap-2 text-xs sm:text-sm">
                  REPORT <span className="text-base sm:text-lg">📄</span>
                </a>
              </div>
            </div>
            
            {/* Project Preview - Desktop */}
            <div className="hidden lg:block order-1">
              <div className="bg-black/30 rounded-2xl p-6 md:p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                {/* Main ISRO project image */}
                <div className="rounded-xl mb-4 aspect-video overflow-hidden border border-red-500/20">
                    <Image 
                      src="/assets/images/ISRO.png" 
                      alt="ISRO Chandrayaan-2 Data Analysis Interface" 
                      width={600} 
                      height={400} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                
                <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 text-lg">🏆</span>
                    <span className="text-red-300 font-semibold">Achievement</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Secured 3rd place among all 23 IITs in India for innovative lunar data analysis and visualization platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 