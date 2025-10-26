import logo from '../assets/logo.png';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaCalendarAlt, FaProjectDiagram } from 'react-icons/fa';
// import { HiChevronDown } from 'react-icons/hi';
// import { TypeAnimation } from 'react-type-animation';
// import Counter from './Counter';
// import RotatingText from './RotatingText'

// const stats = [
//   { icon: FaUsers, value: 500, label: 'Members', suffix: '+' },
//   { icon: FaCalendarAlt, value: 50, label: 'Events', suffix: '+' },
//   { icon: FaProjectDiagram, value: 100, label: 'Projects', suffix: '+' },
// ];

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] via-[#f0fdf4] to-[#ecfdf5] overflow-hidden"
//       data-testid="section-hero"
//     >
//       {/* Geometric Pattern Overlay */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Main Heading */}
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight leading-tight">
//             AI Club
//           </h1>
          
//           {/* Rotating Text Badge */}
//           <div className="flex justify-center mb-6">
//             <RotatingText
//               texts={['Innovate', 'Learn', 'Build', 'Grow']}
//               mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-lg sm:text-xl md:text-2xl font-bold"
//               staggerFrom="last"
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-120%" }}
//               staggerDuration={0.025}
//               splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//               transition={{ type: "spring", damping: 30, stiffness: 400 }}
//               rotationInterval={2000}
//             />
//           </div>

//           {/* College Name */}
//           <p className="text-xl md:text-2xl text-[#475569] mb-6 font-medium">
//             Tech University Engineering College
//           </p>

//           {/* Typing Animation */}
//           <div className="h-16 flex items-center justify-center mb-8">
//             <TypeAnimation
//               sequence={[
//                 'Innovating the Future with Artificial Intelligence',
//                 2000,
//                 'Building Tomorrow\'s Technology Today',
//                 2000,
//                 'Empowering Students Through AI & ML',
//                 2000,
//               ]}
//               wrapper="p"
//               speed={50}
//               className="text-2xl md:text-3xl font-semibold text-[#0f172a] tracking-tight"
//               repeat={Infinity}
//               data-testid="text-typing-tagline"
//             />
//           </div>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto mb-12 leading-relaxed">
//             Join our vibrant community of AI enthusiasts, innovators, and future technologists. 
//             Learn, build, and grow with hands-on workshops, cutting-edge projects, and industry connections.
//           </p>
          
//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-4 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               data-testid="button-join-club"
//             >
//               Join Our Club
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-4 bg-white text-[#0891b2] font-semibold rounded-lg border-2 border-[#0891b2] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#06b6d4] hover:text-white hover:border-transparent transition-all duration-300"
//               data-testid="button-explore-more"
//             >
//               Explore More
//             </motion.button>
//           </div>
//         </motion.div>
        
//         {/* Statistics Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
//               transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
//               data-testid={`card-stat-${stat.label.toLowerCase()}`}
//             >
//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] flex items-center justify-center mb-4">
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-4xl font-bold text-[#0f172a] mb-2">
//                   {isVisible && <Counter end={stat.value} duration={2} />}
//                   {stat.suffix}
//                 </div>
//                 <div className="text-[#475569] font-medium">{stat.label}</div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.a
//           href="#about"
//           onClick={(e) => {
//             e.preventDefault();
//             document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//           }}
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="inline-flex flex-col items-center text-[#0891b2] hover:text-[#059669] transition-colors cursor-pointer"
//           data-testid="button-scroll-down"
//         >
//           <span className="text-sm font-medium mb-2">Scroll Down</span>
//           <HiChevronDown className="w-6 h-6" />
//         </motion.a>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaCalendarAlt, FaProjectDiagram } from 'react-icons/fa';
// import { HiChevronDown } from 'react-icons/hi';
// import { TypeAnimation } from 'react-type-animation';
// import Counter from './Counter';
// import RotatingText from './RotatingText';

// const stats = [
//   { icon: FaUsers, value: 500, label: 'Members', suffix: '+' },
//   { icon: FaCalendarAlt, value: 50, label: 'Events', suffix: '+' },
//   { icon: FaProjectDiagram, value: 100, label: 'Projects', suffix: '+' },
// ];

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] via-[#f0fdf4] to-[#ecfdf5] overflow-hidden"
//       data-testid="section-hero"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-center lg:items-start text-center lg:text-left"
//           >

//             {/* Main Heading */}
//             {/* Main Heading with Logo */}
//             <div className="flex items-center justify-center lg:justify-start gap-5 mb-6">
//               {/* Logo */}
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
//                 <img 
//                   src="src\assets\logo.png"
//                   alt="AI Club Logo" 
//                   className="relative w-24 h-24 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-400/60 shadow-2xl group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* Heading Text */}
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#059669] bg-clip-text text-transparent tracking-tight leading-tight">
//                 AI Club
//               </h1>
//             </div>


//             {/* Rotating Text with Leading Word */}
//             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
//               <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#475569]">
//                 Where We
//               </span>
//               <RotatingText
//                 texts={['Innovate', 'Learn', 'Build', 'Grow', 'Create', 'Excel']}
//                 mainClassName="px-4 sm:px-5 md:px-6 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white overflow-hidden py-2 sm:py-2.5 md:py-3 justify-center rounded-xl text-2xl sm:text-3xl md:text-4xl font-black shadow-2xl"
//                 staggerFrom="last"
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 exit={{ y: "-120%" }}
//                 staggerDuration={0.025}
//                 splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
//                 transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                 rotationInterval={2000}
//               />
//             </div>

//             {/* College Name */}
//             <p className="text-lg md:text-xl text-[#0891b2] mb-6 font-semibold">
//               Tech University Engineering College
//             </p>

//             {/* Typing Animation */}
//             <div className="h-16 flex items-center justify-center lg:justify-start mb-6">
//               <TypeAnimation
//                 sequence={[
//                   'Innovating the Future with Artificial Intelligence',
//                   2000,
//                   'Building Tomorrow\'s Technology Today',
//                   2000,
//                   'Empowering Students Through AI & ML',
//                   2000,
//                 ]}
//                 wrapper="p"
//                 speed={50}
//                 className="text-lg md:text-xl font-semibold text-[#0f172a] tracking-tight"
//                 repeat={Infinity}
//                 data-testid="text-typing-tagline"
//               />
//             </div>

//             {/* Description */}
//             <p className="text-base md:text-lg text-[#475569] mb-8 leading-relaxed max-w-xl">
//               Join our vibrant community of AI enthusiasts, innovators, and future technologists. 
//               Learn, build, and grow with hands-on workshops, cutting-edge projects, and industry connections.
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
//               <motion.button
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-8 py-3 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white font-bold text-base rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
//                 data-testid="button-join-club"
//               >
//                 Know More
//               </motion.button>
//             </div>

//             {/* Statistics */}
//             <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
//                   transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
//                   className="group"
//                   data-testid={`card-stat-${stat.label.toLowerCase()}`}
//                 >
//                   <div className="flex flex-col items-center text-center">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0891b2] to-[#059669] flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <stat.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div className="text-2xl font-black bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent">
//                       {isVisible && <Counter end={stat.value} duration={2} />}
//                       {stat.suffix}
//                     </div>
//                     <div className="text-[#475569] font-medium text-sm">{stat.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Side - 3D Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="hidden lg:flex items-center justify-center"
//           >
//             <div className="relative w-full max-w-lg">
//               {/* Floating Elements Background */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-80 h-80 bg-gradient-to-br from-cyan-300/30 to-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
//               </div>
              
//               {/* Main Illustration Container */}
//               <div className="relative">
//                 {/* Brain/AI Network Illustration */}
//                 <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
//                   {/* Neural Network Lines */}
//                   <g opacity="0.3">
//                     <line x1="250" y1="150" x2="150" y2="250" stroke="url(#lineGradient)" strokeWidth="2"/>
//                     <line x1="250" y1="150" x2="350" y2="250" stroke="url(#lineGradient)" strokeWidth="2"/>
//                     <line x1="150" y1="250" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2"/>
//                     <line x1="350" y1="250" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2"/>
//                     <line x1="250" y1="150" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2"/>
//                     <line x1="150" y1="250" x2="350" y2="250" stroke="url(#lineGradient)" strokeWidth="2"/>
//                   </g>

//                   {/* Gradient Definitions */}
//                   <defs>
//                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#0891b2"/>
//                       <stop offset="100%" stopColor="#059669"/>
//                     </linearGradient>
//                     <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#06b6d4"/>
//                       <stop offset="100%" stopColor="#10b981"/>
//                     </linearGradient>
//                   </defs>

//                   {/* Central Brain Shape */}
//                   <circle cx="250" cy="250" r="80" fill="url(#circleGradient)" opacity="0.8">
//                     <animate attributeName="r" values="80;85;80" dur="3s" repeatCount="indefinite"/>
//                   </circle>
                  
//                   {/* AI Symbol */}
//                   <text x="250" y="270" fontSize="60" fill="white" textAnchor="middle" fontWeight="bold">AI</text>

//                   {/* Orbiting Nodes */}
//                   <circle cx="250" cy="150" r="15" fill="#0891b2">
//                     <animate attributeName="cy" values="150;145;150" dur="2s" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="150" cy="250" r="15" fill="#059669">
//                     <animate attributeName="cx" values="150;145;150" dur="2.5s" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="350" cy="250" r="15" fill="#06b6d4">
//                     <animate attributeName="cx" values="350;355;350" dur="2.2s" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="250" cy="350" r="15" fill="#10b981">
//                     <animate attributeName="cy" values="350;355;350" dur="2.8s" repeatCount="indefinite"/>
//                   </circle>

//                   {/* Small Particles */}
//                   <circle cx="200" cy="200" r="8" fill="#0891b2" opacity="0.6">
//                     <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="300" cy="200" r="8" fill="#059669" opacity="0.6">
//                     <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.3s" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="200" cy="300" r="8" fill="#06b6d4" opacity="0.6">
//                     <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
//                   </circle>
//                   <circle cx="300" cy="300" r="8" fill="#10b981" opacity="0.6">
//                     <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.7s" repeatCount="indefinite"/>
//                   </circle>
//                 </svg>

//                 {/* Floating Icons */}
//                 <motion.div
//                   animate={{ y: [0, -20, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
//                 >
//                   <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                   </svg>
//                 </motion.div>

//                 <motion.div
//                   animate={{ y: [0, 20, 0] }}
//                   transition={{ duration: 3.5, repeat: Infinity }}
//                   className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
//                 >
//                   <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//                   </svg>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.a
//           href="#about"
//           onClick={(e) => {
//             e.preventDefault();
//             document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//           }}
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 inline-flex flex-col items-center text-[#0891b2] hover:text-[#059669] transition-colors cursor-pointer"
//           data-testid="button-scroll-down"
//         >
//           <span className="text-sm font-semibold mb-2">Scroll Down</span>
//           <HiChevronDown className="w-6 h-6" />
//         </motion.a>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaProjectDiagram } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import Counter from './Counter';
import RotatingText from './RotatingText';

const stats = [
  { icon: FaUsers, value: 50, label: 'Happy Members', suffix: '+' },
  { icon: FaCalendarAlt, value: 10, label: 'Amazing Events', suffix: '+' },
  { icon: FaProjectDiagram, value: 100, label: 'Cool Projects', suffix: '+' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] via-[#f0fdf4] to-[#ecfdf5] overflow-hidden"
      data-testid="section-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Friendly Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-cyan-100"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Join Our Growing Community
              </span>
            </motion.div>

            {/* Main Heading with Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-5 mb-6">
              {/* Logo */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img
                  src={logo}
                  alt="AI Club Logo"
                  className="relative w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-4 border-cyan-400/60 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Heading Text with Friendly Style */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#059669] bg-clip-text text-transparent tracking-tight leading-tight" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
                AI Club
              </h1>
            </div>

            {/* Rotating Text with Friendlier Leading */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#475569]" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
                Let's
              </span>
              <RotatingText
                texts={['Innovate', 'Learn', 'Build', 'Grow', 'Create', 'Excel']}
                mainClassName="px-4 sm:px-5 md:px-6 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white overflow-hidden py-2 sm:py-2.5 md:py-3 justify-center rounded-2xl text-2xl sm:text-3xl md:text-4xl font-extrabold shadow-2xl"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#475569]" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
                Together! ✨
              </span>
            </div>

            {/* College Name with Friendlier Style */}
            <p className="text-lg md:text-xl text-[#0891b2] mb-6 font-semibold tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              🎓 Tech University Engineering College
            </p>

            {/* Typing Animation with More Engaging Messages */}
            <div className="h-20 flex items-center justify-center lg:justify-start mb-6">
              <TypeAnimation
                sequence={[
                  '🚀 Let\'s shape the future with AI together!',
                  2000,
                  '💡 Where curious minds meet cutting-edge tech',
                  2000,
                  '🌟 Your journey into AI starts here',
                  2000,
                  '🤝 Join a community that inspires innovation',
                  2000,
                ]}
                wrapper="p"
                speed={50}
                className="text-lg md:text-xl font-semibold text-[#0f172a] tracking-tight leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
                repeat={Infinity}
                data-testid="text-typing-tagline"
              />
            </div>

            {/* Description with Warmer Tone */}
            <p className="text-base md:text-lg text-[#475569] mb-8 leading-relaxed max-w-xl" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.8' }}>
              Hey there! 👋 Ready to dive into the exciting world of AI? 
              Join our amazing community where creativity meets technology. 
              Whether you're just starting out or already exploring AI, 
              there's a place for you here. Let's learn, create, and grow together!
            </p>
            
            {/* CTA Buttons with Friendlier Text */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white font-bold text-base rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="button-join-club"
              >
                🎉 Discover More
              </motion.button>
            </div>

            {/* Statistics with Friendlier Labels */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="group"
                  data-testid={`card-stat-${stat.label.toLowerCase()}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0891b2] to-[#059669] flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-2xl font-black bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {isVisible && <Counter end={stat.value} duration={2} />}
                      {stat.suffix}
                    </div>
                    <div className="text-[#475569] font-semibold text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Floating Elements Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-cyan-300/30 to-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              {/* Main Illustration Container */}
              <div className="relative">
                {/* Brain/AI Network Illustration */}
                <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
                  {/* Neural Network Lines */}
                  <g opacity="0.3">
                    <line x1="250" y1="150" x2="150" y2="250" stroke="url(#lineGradient)" strokeWidth="2"/>
                    <line x1="250" y1="150" x2="350" y2="250" stroke="url(#lineGradient)" strokeWidth="2"/>
                    <line x1="150" y1="250" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2"/>
                    <line x1="350" y1="250" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2"/>
                    <line x1="250" y1="150" x2="250" y2="350" stroke="url(#lineGradient)" strokeWidth="2"/>
                    <line x1="150" y1="250" x2="350" y2="250" stroke="url(#lineGradient)" strokeWidth="2"/>
                  </g>

                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0891b2"/>
                      <stop offset="100%" stopColor="#059669"/>
                    </linearGradient>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4"/>
                      <stop offset="100%" stopColor="#10b981"/>
                    </linearGradient>
                  </defs>

                  {/* Central Brain Shape */}
                  <circle cx="250" cy="250" r="80" fill="url(#circleGradient)" opacity="0.8">
                    <animate attributeName="r" values="80;85;80" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* AI Symbol */}
                  <text x="250" y="270" fontSize="60" fill="white" textAnchor="middle" fontWeight="bold">AI</text>

                  {/* Orbiting Nodes */}
                  <circle cx="250" cy="150" r="15" fill="#0891b2">
                    <animate attributeName="cy" values="150;145;150" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="150" cy="250" r="15" fill="#059669">
                    <animate attributeName="cx" values="150;145;150" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="350" cy="250" r="15" fill="#06b6d4">
                    <animate attributeName="cx" values="350;355;350" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="250" cy="350" r="15" fill="#10b981">
                    <animate attributeName="cy" values="350;355;350" dur="2.8s" repeatCount="indefinite"/>
                  </circle>

                  {/* Small Particles */}
                  <circle cx="200" cy="200" r="8" fill="#0891b2" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="300" cy="200" r="8" fill="#059669" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="200" cy="300" r="8" fill="#06b6d4" opacity="0.6">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="300" cy="300" r="8" fill="#10b981" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.7s" repeatCount="indefinite"/>
                  </circle>
                </svg>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator with Friendlier Text */}
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 inline-flex flex-col items-center text-[#0891b2] hover:text-[#059669] transition-colors cursor-pointer"
          data-testid="button-scroll-down"
        >
          <span className="text-sm font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Explore More ↓</span>
          <HiChevronDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
}