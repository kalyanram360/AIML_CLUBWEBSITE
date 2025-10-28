// // Enhanced Mission & Vision component with better visuals and animations

// export default function MissionVision() {
//   return (
//     <section id="mission-vision" className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#ecfdf5] relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0891b2] to-[#10b981]">
//             Mission & Vision
//           </h2>
//           <p className="text-lg text-[#475569] max-w-3xl mx-auto">
//             We create a platform for students to learn state-of-the-art AI/ML techniques, collaborate across disciplines, and build real solutions that matter.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Mission Card */}
//           <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cyan-100">
//             <div className="mb-6">
//               <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-emerald-50 p-6 flex items-center justify-center">
//                 <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                   <defs>
//                     <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#0891b2" />
//                       <stop offset="100%" stopColor="#10b981" />
//                     </linearGradient>
//                     <filter id="glow">
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                       <feMerge>
//                         <feMergeNode in="coloredBlur"/>
//                         <feMergeNode in="SourceGraphic"/>
//                       </feMerge>
//                     </filter>
//                   </defs>
                  
//                   {/* Target/Goal symbol */}
//                   <circle cx="200" cy="150" r="80" fill="none" stroke="#0891b2" strokeWidth="3" opacity="0.3"/>
//                   <circle cx="200" cy="150" r="60" fill="none" stroke="#0891b2" strokeWidth="3" opacity="0.5"/>
//                   <circle cx="200" cy="150" r="40" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.7"/>
//                   <circle cx="200" cy="150" r="20" fill="url(#missionGrad)" filter="url(#glow)"/>
                  
//                   {/* Arrow pointing to center */}
//                   <g transform="translate(120, 50)">
//                     <path d="M0 0 L60 60 L50 60 L50 80 L40 80 L40 60 L30 60 Z" fill="#0891b2" opacity="0.8"/>
//                   </g>
                  
//                   {/* Small stars around */}
//                   <path d="M80 80 L85 95 L100 95 L88 105 L93 120 L80 110 L67 120 L72 105 L60 95 L75 95 Z" fill="#10b981" opacity="0.6"/>
//                   <path d="M300 70 L305 85 L320 85 L308 95 L313 110 L300 100 L287 110 L292 95 L280 85 L295 85 Z" fill="#0891b2" opacity="0.6"/>
//                   <path d="M330 200 L335 215 L350 215 L338 225 L343 240 L330 230 L317 240 L322 225 L310 215 L325 215 Z" fill="#10b981" opacity="0.6"/>
//                 </svg>
//               </div>
//             </div>

//             <div className="mb-4">
//               <h3 className="text-2xl font-bold mb-3 text-gray-800 flex items-center gap-2">
//                 <span className="text-3xl">🎯</span> Mission
//               </h3>
//               <p className="text-[#475569] leading-relaxed">
//                 Provide a platform to the students to explore their dreams by learning state-of-art techniques and applications in multiple domains and become acquainted with the cutting edge technologies and skills in the fields of Artificial Intelligence and Machine Learning.
//               </p>
//             </div>

//             <div className="space-y-3 mt-6">
//               <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-transparent hover:from-cyan-100 transition-colors">
//                 <span className="text-cyan-600 text-xl mt-0.5">✦</span>
//                 <p className="text-sm text-[#475569]">Encourage students to identify real-life challenges and develop creative solutions.</p>
//               </div>
//               <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-transparent hover:from-emerald-100 transition-colors">
//                 <span className="text-emerald-600 text-xl mt-0.5">✦</span>
//                 <p className="text-sm text-[#475569]">Offer hands-on projects and mentorship to build applied skills.</p>
//               </div>
//               <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-transparent hover:from-cyan-100 transition-colors">
//                 <span className="text-cyan-600 text-xl mt-0.5">✦</span>
//                 <p className="text-sm text-[#475569]">Foster collaboration across disciplines and open-source contribution.</p>
//               </div>
//             </div>
//           </article>

//           {/* Vision Card */}
//           <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100">
//             <div className="mb-6">
//               <div className="w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 flex items-center justify-center">
//                 <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                   <defs>
//                     <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#10b981" />
//                       <stop offset="100%" stopColor="#06b6d4" />
//                     </linearGradient>
//                     <filter id="glowVision">
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                       <feMerge>
//                         <feMergeNode in="coloredBlur"/>
//                         <feMergeNode in="SourceGraphic"/>
//                       </feMerge>
//                     </filter>
//                   </defs>
                  
//                   {/* Telescope/Binoculars - looking into future */}
//                   <ellipse cx="200" cy="150" rx="100" ry="60" fill="none" stroke="url(#visionGrad)" strokeWidth="4" strokeDasharray="5,5" opacity="0.4"/>
                  
//                   {/* Eye symbol */}
//                   <ellipse cx="200" cy="150" rx="70" ry="40" fill="none" stroke="#10b981" strokeWidth="3"/>
//                   <circle cx="200" cy="150" r="25" fill="url(#visionGrad)" filter="url(#glowVision)"/>
//                   <circle cx="200" cy="150" r="12" fill="#ffffff"/>
                  
//                   {/* Light rays */}
//                   <g opacity="0.5">
//                     <line x1="200" y1="150" x2="120" y2="80" stroke="#10b981" strokeWidth="2"/>
//                     <line x1="200" y1="150" x2="280" y2="80" stroke="#06b6d4" strokeWidth="2"/>
//                     <line x1="200" y1="150" x2="120" y2="220" stroke="#06b6d4" strokeWidth="2"/>
//                     <line x1="200" y1="150" x2="280" y2="220" stroke="#10b981" strokeWidth="2"/>
//                   </g>
                  
//                   {/* Stars representing future */}
//                   <circle cx="120" cy="80" r="5" fill="#10b981"/>
//                   <circle cx="280" cy="80" r="5" fill="#06b6d4"/>
//                   <circle cx="120" cy="220" r="5" fill="#06b6d4"/>
//                   <circle cx="280" cy="220" r="5" fill="#10b981"/>
                  
//                   {/* Sparkles */}
//                   <path d="M350 100 L352 108 L360 110 L352 112 L350 120 L348 112 L340 110 L348 108 Z" fill="#10b981" opacity="0.7"/>
//                   <path d="M50 180 L52 188 L60 190 L52 192 L50 200 L48 192 L40 190 L48 188 Z" fill="#06b6d4" opacity="0.7"/>
//                 </svg>
//               </div>
//             </div>

//             <div className="mb-4">
//               <h3 className="text-2xl font-bold mb-3 text-gray-800 flex items-center gap-2">
//                 <span className="text-3xl">🔭</span> Vision
//               </h3>
//               <p className="text-[#475569] leading-relaxed">
//                 Students are encouraged to identify real life challenges, bring out their hidden talents, improve their creative thinking and work on different solutions through various technologies. Provide students a healthy space for knowledge sharing by collaborating with heterogeneous team environments and working with different open source technologies.
//               </p>
//             </div>

//             <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-cyan-50 to-emerald-50 border border-emerald-200">
//               <p className="text-[#475569] leading-relaxed font-medium">
//                 We envision an inclusive community where learners grow into leaders, researchers and builders who push the boundaries of AI responsibly.
//               </p>
//             </div>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }


// Enhanced Mission & Vision component with better visuals and animations

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#ecfdf5] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0891b2] to-[#10b981]">
            Mission & Vision of the Club
          </h2>
          <p className="text-lg text-[#475569] max-w-3xl mx-auto">
            Empowering students to master AI/ML, tackle real-world challenges, and collaborate in an innovative, open-source driven environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-cyan-100">
            <div className="mb-5">
              <div className="w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-emerald-50 p-4 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0891b2" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Target/Goal symbol */}
                  <circle cx="200" cy="150" r="80" fill="none" stroke="#0891b2" strokeWidth="3" opacity="0.3"/>
                  <circle cx="200" cy="150" r="60" fill="none" stroke="#0891b2" strokeWidth="3" opacity="0.5"/>
                  <circle cx="200" cy="150" r="40" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.7"/>
                  <circle cx="200" cy="150" r="20" fill="url(#missionGrad)" filter="url(#glow)"/>
                  
                  {/* Arrow pointing to center */}
                  <g transform="translate(120, 50)">
                    <path d="M0 0 L60 60 L50 60 L50 80 L40 80 L40 60 L30 60 Z" fill="#0891b2" opacity="0.8"/>
                  </g>
                  
                  {/* Small stars around */}
                  <path d="M80 80 L85 95 L100 95 L88 105 L93 120 L80 110 L67 120 L72 105 L60 95 L75 95 Z" fill="#10b981" opacity="0.6"/>
                  <path d="M300 70 L305 85 L320 85 L308 95 L313 110 L300 100 L287 110 L292 95 L280 85 L295 85 Z" fill="#0891b2" opacity="0.6"/>
                  <path d="M330 200 L335 215 L350 215 L338 225 L343 240 L330 230 L317 240 L322 225 L310 215 L325 215 Z" fill="#10b981" opacity="0.6"/>
                </svg>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🎯</span> Our Mission
              </h3>
              <p className="text-[#475569] leading-relaxed text-sm">
                Provide a platform to the students to explore their dreams by learning state-of-art techniques and applications in multiple domains and become acquainted with the cutting edge technologies and skills in the fields of Artificial Intelligence and Machine Learning.
              </p>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-cyan-50 to-transparent hover:from-cyan-100 transition-colors">
                <span className="text-cyan-600 text-xl mt-0.5">✦</span>
                <p className="text-sm text-[#475569]">Learn state-of-the-art AI/ML techniques across multiple domains</p>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-emerald-50 to-transparent hover:from-emerald-100 transition-colors">
                <span className="text-emerald-600 text-xl mt-0.5">✦</span>
                <p className="text-sm text-[#475569]">Master cutting-edge technologies in artificial intelligence</p>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-cyan-50 to-transparent hover:from-cyan-100 transition-colors">
                <span className="text-cyan-600 text-xl mt-0.5">✦</span>
                <p className="text-sm text-[#475569]">Build practical skills through hands-on projects and exploration</p>
              </div>
            </div>
          </article>

          {/* Vision Card */}
          <article className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100">
            <div className="mb-5">
              <div className="w-full h-40 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <filter id="glowVision">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Telescope/Binoculars - looking into future */}
                  <ellipse cx="200" cy="150" rx="100" ry="60" fill="none" stroke="url(#visionGrad)" strokeWidth="4" strokeDasharray="5,5" opacity="0.4"/>
                  
                  {/* Eye symbol */}
                  <ellipse cx="200" cy="150" rx="70" ry="40" fill="none" stroke="#10b981" strokeWidth="3"/>
                  <circle cx="200" cy="150" r="25" fill="url(#visionGrad)" filter="url(#glowVision)"/>
                  <circle cx="200" cy="150" r="12" fill="#ffffff"/>
                  
                  {/* Light rays */}
                  <g opacity="0.5">
                    <line x1="200" y1="150" x2="120" y2="80" stroke="#10b981" strokeWidth="2"/>
                    <line x1="200" y1="150" x2="280" y2="80" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="200" y1="150" x2="120" y2="220" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="200" y1="150" x2="280" y2="220" stroke="#10b981" strokeWidth="2"/>
                  </g>
                  
                  {/* Stars representing future */}
                  <circle cx="120" cy="80" r="5" fill="#10b981"/>
                  <circle cx="280" cy="80" r="5" fill="#06b6d4"/>
                  <circle cx="120" cy="220" r="5" fill="#06b6d4"/>
                  <circle cx="280" cy="220" r="5" fill="#10b981"/>
                  
                  {/* Sparkles */}
                  <path d="M350 100 L352 108 L360 110 L352 112 L350 120 L348 112 L340 110 L348 108 Z" fill="#10b981" opacity="0.7"/>
                  <path d="M50 180 L52 188 L60 190 L52 192 L50 200 L48 192 L40 190 L48 188 Z" fill="#06b6d4" opacity="0.7"/>
                </svg>
              </div>
            </div>

            <div className="mb-3">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🔭</span> Our Vision
              </h3>
              <p className="text-[#475569] leading-relaxed text-sm">
                Students are encouraged to identify real life challenges, bring out their hidden talents, improve their creative thinking and work on different solutions through various technologies.
              </p>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-emerald-50 via-cyan-50 to-emerald-50 border border-emerald-200">
              <p className="text-[#475569] leading-relaxed font-medium text-sm">
                Provide students a healthy space for knowledge sharing by collaborating with heterogeneous team environments and working with different open source technologies.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}