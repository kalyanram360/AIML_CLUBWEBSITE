// Club Objectives component with visual icons and animations

export default function ClubObjectives() {
  return (
    <section id="objectives" className="py-16 bg-gradient-to-br from-[#ecfdf5] via-[#f0fdfa] to-[#f0f9ff] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#0891b2]">
            Objectives of the Club
          </h2> */}
          <h2
  className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] to-[#0891b2] leading-tight pb-2 inline-block"
>
  Objectives of the Club
</h2>

          <p className="text-lg text-[#475569] max-w-3xl mx-auto">
            Building a community of learners, innovators, and problem-solvers through practical experiences and collaborative growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Objective 1 - Peer Learning */}
          <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 group">
            <div className="mb-5">
              <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-32 h-32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  
                  {/* Books/Learning icon */}
                  <rect x="60" y="80" width="35" height="45" rx="2" fill="url(#grad1)" opacity="0.8" filter="url(#shadow)"/>
                  <rect x="100" y="70" width="35" height="55" rx="2" fill="#0891b2" opacity="0.9" filter="url(#shadow)"/>
                  <rect x="140" y="85" width="35" height="40" rx="2" fill="#10b981" opacity="0.8" filter="url(#shadow)"/>
                  
                  {/* Lines on books */}
                  <line x1="70" y1="95" x2="85" y2="95" stroke="white" strokeWidth="2"/>
                  <line x1="70" y1="105" x2="85" y2="105" stroke="white" strokeWidth="2"/>
                  <line x1="110" y1="90" x2="125" y2="90" stroke="white" strokeWidth="2"/>
                  <line x1="110" y1="100" x2="125" y2="100" stroke="white" strokeWidth="2"/>
                  <line x1="150" y1="100" x2="165" y2="100" stroke="white" strokeWidth="2"/>
                  
                  {/* People icons above */}
                  <circle cx="80" cy="50" r="8" fill="#10b981"/>
                  <circle cx="120" cy="45" r="8" fill="#0891b2"/>
                  <circle cx="160" cy="55" r="8" fill="#10b981"/>
                  
                  {/* Connection lines */}
                  <path d="M 88 52 Q 105 48 112 47" stroke="#0891b2" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 128 47 Q 145 50 152 54" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6"/>
                </svg>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <h3 className="text-xl font-bold text-gray-800">Peer Learning & Growth</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                To promote peer learning and understanding the emerging technology concepts through workshops, seminars and industry connects.
              </p>
              
              <div className="pt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">Workshops</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">Seminars</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">Industry Connect</span>
              </div>
            </div>
          </article>

          {/* Objective 2 - Competitions */}
          <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cyan-100 group">
            <div className="mb-5">
              <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-emerald-50 flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-32 h-32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0891b2" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  
                  {/* Trophy */}
                  <ellipse cx="100" cy="145" rx="25" ry="8" fill="#10b981" opacity="0.3"/>
                  <rect x="90" y="130" width="20" height="15" fill="#0891b2"/>
                  <path d="M 70 80 L 75 120 L 125 120 L 130 80 Z" fill="url(#grad2)" filter="url(#shadow)"/>
                  <rect x="95" y="70" width="10" height="15" fill="#10b981"/>
                  <circle cx="100" cy="70" r="6" fill="#fbbf24"/>
                  
                  {/* Handles */}
                  <path d="M 70 85 Q 55 85 55 100 Q 55 110 65 110" stroke="#0891b2" strokeWidth="4" fill="none"/>
                  <path d="M 130 85 Q 145 85 145 100 Q 145 110 135 110" stroke="#10b981" strokeWidth="4" fill="none"/>
                  
                  {/* Stars around */}
                  <path d="M 50 60 L 52 65 L 57 66 L 53 70 L 54 75 L 50 72 L 46 75 L 47 70 L 43 66 L 48 65 Z" fill="#fbbf24"/>
                  <path d="M 150 55 L 152 60 L 157 61 L 153 65 L 154 70 L 150 67 L 146 70 L 147 65 L 143 61 L 148 60 Z" fill="#fbbf24"/>
                  <path d="M 100 40 L 102 45 L 107 46 L 103 50 L 104 55 L 100 52 L 96 55 L 97 50 L 93 46 L 98 45 Z" fill="#fbbf24"/>
                </svg>
                
                <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <h3 className="text-xl font-bold text-gray-800">Competitions & Excellence</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                To encourage students in participating in various competitions in the field of computer science with focus on Artificial Intelligence.
              </p>
              
              <div className="pt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">Hackathons</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">AI Contests</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">Tech Events</span>
              </div>
            </div>
          </article>

          {/* Objective 3 - Real-world Applications */}
          <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 group">
            <div className="mb-5">
              <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center relative">
                <svg viewBox="0 0 200 200" className="w-32 h-32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Globe/World */}
                  <circle cx="100" cy="100" r="50" fill="url(#grad3)" opacity="0.2"/>
                  <circle cx="100" cy="100" r="50" fill="none" stroke="url(#grad3)" strokeWidth="3"/>
                  
                  {/* Latitude lines */}
                  <ellipse cx="100" cy="100" rx="50" ry="15" fill="none" stroke="#0891b2" strokeWidth="2" opacity="0.6"/>
                  <ellipse cx="100" cy="100" rx="50" ry="30" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6"/>
                  
                  {/* Longitude line */}
                  <ellipse cx="100" cy="100" rx="15" ry="50" fill="none" stroke="#0891b2" strokeWidth="2" opacity="0.6"/>
                  
                  {/* Connection nodes */}
                  <circle cx="80" cy="70" r="5" fill="#10b981"/>
                  <circle cx="120" cy="80" r="5" fill="#0891b2"/>
                  <circle cx="90" cy="120" r="5" fill="#0891b2"/>
                  <circle cx="130" cy="110" r="5" fill="#10b981"/>
                  
                  {/* Tech icons around */}
                  <g transform="translate(60, 50)">
                    <rect width="8" height="8" fill="#10b981" opacity="0.8"/>
                  </g>
                  <g transform="translate(135, 65)">
                    <circle r="4" fill="#0891b2" opacity="0.8"/>
                  </g>
                  <g transform="translate(70, 130)">
                    <path d="M 0 0 L 4 7 L 8 0 Z" fill="#10b981" opacity="0.8"/>
                  </g>
                  <g transform="translate(140, 115)">
                    <rect width="8" height="8" fill="#0891b2" opacity="0.8"/>
                  </g>
                </svg>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <h3 className="text-xl font-bold text-gray-800">Real-world Applications</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                To explore real-world applications in computer science in the fields of AI, Web Development, Algorithms and security.
              </p>
              
              <div className="pt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">AI</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">Web Dev</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">Algorithms</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">Security</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}