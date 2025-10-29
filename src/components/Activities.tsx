// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FaUsers, FaArrowRight, FaCalendar } from 'react-icons/fa';
// import { useQuery } from '@tanstack/react-query';
// import { useEffect } from 'react';

// // Local Event type to avoid missing module import from '@shared/schema'
// type Event = {
//   id: string;
//   category: string;
//   date: string;
//   year: string | number;
//   title: string;
//   description: string;
//   images?: string[];
//   participants: number;
//   tags: string[];
// };

// const years = ['All', '2023', '2024', '2025'];

// const categoryColors: Record<string, string> = {
//   Workshop: 'bg-[#ecfeff] text-[#0891b2]',
//   Hackathon: 'bg-[#f3e8ff] text-[#9333ea]',
//   Seminar: 'bg-[#dbeafe] text-[#3b82f6]',
//   Project: 'bg-[#d1fae5] text-[#059669]',
//   Event: 'bg-[#fef3c7] text-[#f59e0b]',
//   Competition: 'bg-[#ffe4e6] text-[#e11d48]',
// };

// export default function Activities() {
//   const [activeYear, setActiveYear] = useState('All');
//   const [eventImages, setEventImages] = useState<Record<string, string[]>>({});
//   const [expanded, setExpanded] = useState<Record<string, boolean>>({});
//   const [lightbox, setLightbox] = useState<{ src: string; activityId: string; index: number } | null>(null);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const queryUrl = activeYear === 'All'
//     ? '/api/events'
//     : `/api/events?year=${activeYear}`;

//   const { data: activities = [], isLoading } = useQuery<Event[]>({
//     queryKey: [queryUrl],
//   });

//   // Fetch images for all events
//   useEffect(() => {
//     const fetchImages = async () => {
//       const images: Record<string, string[]> = {};
//       for (const activity of activities) {
//         try {
//           const response = await fetch(`/api/events/${activity.id}/images`);
//           if (response.ok) {
//             images[activity.id] = await response.json();
//           }
//         } catch (error) {
//           console.error(`Failed to fetch images for event ${activity.id}:`, error);
//         }
//       }
//       setEventImages(images);
//     };

//     if (activities.length > 0) {
//       fetchImages();
//     }
//   }, [activities]);

//   if (isLoading) {
//     return (
//       <section id="activities" className="py-20 md:py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center">
//             <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2]" data-testid="loading-activities" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="activities"
//       ref={ref}
//       className="py-20 md:py-32 bg-white"
//       data-testid="section-activities"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight">
//             Club Activities
//           </h2>
//           <p className="text-lg text-[#475569] max-w-2xl mx-auto">
//             A journey of innovation, learning, and collaboration through our events
//           </p>
//         </motion.div>

//         {/* Year Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-16"
//         >
//           {years.map((year) => (
//             <button
//               key={year}
//               onClick={() => setActiveYear(year)}
//               className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//                 activeYear === year
//                   ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white shadow-lg'
//                   : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
//               }`}
//               data-testid={`button-filter-year-${year.toLowerCase()}`}
//             >
//               {year}
//             </button>
//           ))}
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Gradient Line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0891b2] via-[#06b6d4] to-[#059669] transform -translate-x-1/2 hidden md:block" />

//           {/* Activity Cards */}
//           <div className="space-y-12">
//             {activities.map((activity, index) => (
//               <motion.div
//                 key={activity.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
//                 data-testid={`card-activity-${activity.id}`}
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-[#0891b2] to-[#059669] border-4 border-white transform -translate-x-1/2 hidden md:block z-10" />

//                 {/* Card */}
//                 <motion.div
//                   whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                   className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
//                     index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
//                   }`}
//                 >
//                   {/* Date Badge */}
//                   <div className="flex items-start justify-between mb-4">
//                     <span className={`px-3 py-1 ${categoryColors[activity.category] || 'bg-gray-100 text-gray-600'} rounded-full text-xs font-semibold`} data-testid={`badge-category-${activity.id}`}>
//                       {activity.category}
//                     </span>
//                     <span className="px-3 py-1 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white rounded-full text-xs font-semibold flex items-center gap-1" data-testid={`badge-date-${activity.id}`}>
//                       <FaCalendar className="w-3 h-3" />
//                       {activity.date}, {activity.year}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-[#0f172a] mb-3" data-testid={`text-activity-title-${activity.id}`}>
//                     {activity.title}
//                   </h3>

//                   {/* Collapsed preview image + expand behaviour */}
//                   <div className="mb-4">
//                     {(eventImages[activity.id] || activity.images || []).length > 0 ? (
//                       <div className="w-full h-44 md:h-56 rounded-lg overflow-hidden bg-gray-50">
//                         <img
//                           src={(eventImages[activity.id] || activity.images || [])[0]}
//                           alt={activity.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     ) : (
//                       <div className="w-full h-44 md:h-56 rounded-lg overflow-hidden bg-gradient-to-br from-[#ecfeff] to-[#d1fae5] flex items-center justify-center text-[#0891b2]">
//                         <span className="font-semibold">No image</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Expandable content */}
//                   {expanded[activity.id] && (
//                     <div className="mt-4">
//                       <p className="text-[#475569] mb-4 leading-relaxed" data-testid={`text-activity-description-${activity.id}`}>
//                         {activity.description}
//                       </p>

//                       {/* Image Gallery Expanded */}
//                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
//                         {(eventImages[activity.id] || activity.images || []).map((imageSrc, i) => (
//                           <button
//                             key={i}
//                             className="aspect-video rounded-lg overflow-hidden group focus:outline-none"
//                             onClick={() => setLightbox({ src: imageSrc, activityId: activity.id, index: i })}
//                           >
//                             <img
//                               src={imageSrc}
//                               alt={`${activity.title} - Image ${i + 1}`}
//                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                             />
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Footer */}
//                   <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
//                     <div className="flex items-center gap-2 text-[#475569] text-sm" data-testid={`text-participants-${activity.id}`}>
//                       <FaUsers className="w-4 h-4" />
//                       <span>{activity.participants} participants</span>
//                     </div>
//                     <button
//                       onClick={() => setExpanded((s) => ({ ...s, [activity.id]: !s[activity.id] }))}
//                       className="inline-flex items-center gap-1 text-[#0891b2] hover:text-[#059669] font-semibold text-sm transition-colors focus:outline-none"
//                       data-testid={`button-toggle-details-${activity.id}`}
//                       aria-expanded={!!expanded[activity.id]}
//                     >
//                       {expanded[activity.id] ? 'Hide Details' : 'View Details'}
//                       <FaArrowRight className="w-3 h-3" />
//                     </button>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {activity.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 bg-[#f1f5f9] text-[#475569] rounded-full text-xs"
//                         data-testid={`tag-${activity.id}-${tagIndex}`}
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Lightbox modal */}
//       {lightbox && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
//           <div className="max-w-4xl w-full">
//             <div className="bg-white rounded-lg overflow-hidden">
//               <div className="relative">
//                 <img src={lightbox.src} alt="Lightbox" className="w-full h-[60vh] object-contain bg-black" />
//                 <button
//                   onClick={() => setLightbox(null)}
//                   className="absolute top-3 right-3 bg-white/80 rounded-full p-2"
//                   aria-label="Close"
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaArrowRight, FaCalendar, FaStar, FaTimes } from 'react-icons/fa';

type Event = {
  id: string;
  category: string;
  date: string;
  year: string | number;
  title: string;
  description: string;
  images?: string[];
  participants: number;
  tags: string[];
};

// Sample Activities Data
const sampleActivities: Event[] = [
  
  {
    id: '1',
    category: 'Workshop',
    date: 'October 5',
    year: '2024',
    title: 'AI Club Inauguration',
    description: 'The AI Club at GVPCE(A) marked its revival with a grand inauguration on October 5th, 2024, attended by distinguished faculty including Dr. A. Syamsundar, Vice Principal, and other department heads. The event featured engaging activities like the Code Crackdown Quiz and Turing Test Challenge, where students tested their technical knowledge and AI understanding. The clubs leadership, K. Anil Kumar (President) and N. Renu Sriya (Secretary) outlined their vision for fostering innovation and learning in AI, setting a strong foundation for future activities.',
    images: [
      'images/team/1.1.png',
      'images/team/1.2.png',
      'images/team/1.3.png'
    ],
    participants: 200,
    tags: [],
  },
   {
    id: '2',
    category: 'Workshop',
    date: 'December 5',
    year: '2024',
    title: 'AI and Dl Workshop',
    description: 'The AI Club of GVPCE successfully organized a highly informative and interactive Deep Learning and Artificial Intelligence Session on 20th & 21st December 2024 through Google Meet. The session was delivered by Mr. Sandeep Vissapragada, an alumnus of our college currently pursuing M.Tech at IIT Bhilai.The two-day session provided a structured and in-depth exploration of key concepts in Deep Learning and AI. The first day began with an introduction to Artificial Intelligence, its evolution over the years, and its impact on multiple industries. Participants were guided through the fundamentals of neural networks, activation functions, and optimization techniques, giving them a strong conceptual foundation.',
    images: [
      'images/team/3.1.1.jpg',
      'images/team/4.2.jpg',
      'images/team/4.3.jpg',
    ],
    participants: 45,
    tags: ['AI', 'Deep Learning', 'Virtual']
  },
    {
    id: '3',
    category: 'Seminar',
    date: 'December 9',
    year: '2024',
    title: 'Introduction to LLM',
    description: 'Guest lecture by   Dr. Eduri Raja speech on Large Language Models (LLMs) highlighted their transformative role in modern Artificial Intelligence, emphasizing their importance in enhancing natural language understanding and generation. He discussed how neural networks form the backbone of LLMs, enabling them to process and learn complex patterns from vast amounts of text data. Dr. Raja also covered core concepts of Natural Language Processing (NLP), such as tokenization, attention mechanisms, and language modeling, illustrating how these techniques power applications ranging from machine translation to conversational AI. His insights underscored the growing impact of LLMs in various industries, shaping the future of human-computer interaction and data analysis.  ',
    images: [
      'images/team/3.1.jpg',
      'images/team/3.2.jpg',
      'images/team/3.3.jpg'
    ],
    participants: 70,
    tags: [ 'AI Applications', 'Guest Speaker','LLM'],
  },
  {
    id: '4',
    category: 'Workshop',
    date: 'December 10',
    year: '2024',
    title: 'Python Session',
    description: 'The Python workshop provided participants with a comprehensive introduction to Python programming. It covered key topics such as basic syntax, data types, control flow (if-else, loops), and functions. Additionally, the workshop explored more advanced concepts like object-oriented programming, handling libraries, and practical applications in data analysis and web development.The session included hands-on coding exercises, aimed at reinforcing the theoretical concepts through real-world examples. Whether for beginners or those with some programming experience, the workshop offered valuable insights into Python versatility and its potential in various domains.',
    images: [
      'images/team/2.3.jpg',
      'images/team/2.2.jpg',
      "/images/team/2.1.jpg",
    ],
    participants: 85,
    tags: ['Python', 'Hands-on', 'Beginner Friendly'],
  },
  {
    id: '5',
    category: 'Session',
    date: 'January 4',
    year: '2025',
    title: 'DSA Session',
    description: 'The AI Club of GVPCE organized an enriching session titled “DSA Fundamentals: Learn, Code, Conquer” on 4th January 2025 at the IBM Lab. The event was designed to help students strengthen their understanding of Data Structures and Algorithms (DSA) and inspire them to build problem-solving skills essential for programming and competitive coding. The session was led by Raghunadh, Vice President of the AI Club, who delivered an insightful and interactive talk on the fundamentals of DSA. Complex concepts were explained in a simplified manner, enabling juniors and beginners to grasp the core principles with ease.',
    images: [
      'images/team/5.1.png',
      'images/team/5.2.png',
      'images/team/5.3.png',
    ],
    participants: 72,
    tags: ['DSA', 'LEARN'],
  },
  {
    id: '6',
    category: 'Workshop',
    date: 'Septemeber 9',
    year: '2025',
    title: 'Git and GitHub',
    description: 'The AI Club of GVPCE(A) is organizing a Workshop on Git & GitHub exclusively for  2nd-Year CSM Students. The workshop will introduce students to the essentials of version control systems and collaborative platforms, which form the backbone of modern software development and teamwork in the tech industry.',
    images: [
      'images/team/6.1.jpg',
      'images/team/6.2.jpg',
      'images/team/6.3.jpg',
    ],
    participants: 72,
    tags: ['Git', 'GitHub', 'Version Control', 'Open Source Contribution'],
  },
  {
    id: '7',
    category: 'Workshop',
    date: 'Septemeber 24',
    year: '2025',
    title: 'Ai Tools Wave',
    description: 'This workshop is designed to introduce students to a wide range of AI-powered tools that can generate images within seconds, edit videos in smart ways, speed up coding, and even convert text into voice. The session will provide valuable insights into how these tools can be effectively used for academic projects, technical presentations, and overall personal growth.',
    images: [
      'images/team/7.1.jpg',
      'images/team/7.2.jpg',
      'images/team/7.3.jpg',
      'images/team/7.4.jpg',
    ],
    participants: 100,
    tags: ['AI', 'Tools'],
  },
];

const years = ['All', '2024', '2025'];

const categoryColors: Record<string, { bg: string; text: string; icon: string }> = {
  Workshop: { bg: 'from-cyan-400 to-blue-500', text: 'text-cyan-600', icon: 'bg-cyan-100' },
  Hackathon: { bg: 'from-purple-400 to-pink-500', text: 'text-purple-600', icon: 'bg-purple-100' },
  Seminar: { bg: 'from-blue-400 to-indigo-500', text: 'text-blue-600', icon: 'bg-blue-100' },
  Project: { bg: 'from-emerald-400 to-teal-500', text: 'text-emerald-600', icon: 'bg-emerald-100' },
  Event: { bg: 'from-amber-400 to-orange-500', text: 'text-amber-600', icon: 'bg-amber-100' },
  Competition: { bg: 'from-rose-400 to-red-500', text: 'text-rose-600', icon: 'bg-rose-100' },
};

export default function Activities() {
  const [activeYear, setActiveYear] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; activityId: string; index: number } | null>(null);
  const [inView] = useState(true);

  const activities = activeYear === 'All' 
    ? sampleActivities 
    : sampleActivities.filter(activity => activity.year.toString() === activeYear);


  return (
    <section
      id="activities"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      data-testid="section-activities"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-bold mb-4 shadow-lg"
          >
            <FaStar className="w-4 h-4" />
            <span>Our Journey</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
            Club Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exciting events, workshops, and collaborative projects
          </p>
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setActiveYear(year)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeYear === year
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-cyan-400 hover:text-cyan-600 shadow-sm'
              }`}
              data-testid={`button-filter-year-${year.toLowerCase()}`}
            >
              {year}
            </motion.button>
          ))}
        </motion.div>

        {/* Activity Cards Grid */}
        <div className="space-y-8">
          {activities.map((activity, index) => {
            const categoryStyle = categoryColors[activity.category] || categoryColors.Event;
            const isExpanded = expandedId === activity.id;
            
            return (
              <div key={activity.id}>
                {/* Card Row - 2 columns or full width when expanded */}
                {!isExpanded && index % 2 === 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Current Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                      data-testid={`card-activity-${activity.id}`}
                    >
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
                      >
                        {/* Image Section */}
                        <div className="relative h-56 overflow-hidden">
                          {activity.images && activity.images.length > 0 ? (
                            <>
                              <img
                                src={activity.images[0]}
                                alt={activity.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            </>
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${categoryStyle.bg} flex items-center justify-center`}>
                              <span className="text-white font-bold text-lg">No image</span>
                            </div>
                          )}
                          
                          <div className="absolute top-4 left-4">
                            <span className={`px-4 py-2 bg-white/95 backdrop-blur-sm ${categoryStyle.text} rounded-full text-xs font-bold shadow-lg`}>
                              {activity.category}
                            </span>
                          </div>

                          <div className="absolute top-4 right-4">
                            <div className="px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg">
                              <FaCalendar className="w-3 h-3 text-gray-600" />
                              <span className="text-xs font-bold text-gray-700">
                                {activity.date}, {activity.year}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                            {activity.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                            {activity.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {activity.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className={`px-3 py-1 ${categoryStyle.icon} ${categoryStyle.text} rounded-full text-xs font-semibold`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                            <div className="flex items-center gap-2">
                              <div className={`w-10 h-10 rounded-full ${categoryStyle.icon} ${categoryStyle.text} flex items-center justify-center`}>
                                <FaUsers className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 font-medium">Participants</p>
                                <p className="text-sm font-bold text-gray-900">{activity.participants}</p>
                              </div>
                            </div>
                            
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setExpandedId(activity.id)}
                              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${categoryStyle.bg} text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all`}
                            >
                              View Details
                              <FaArrowRight className="w-3 h-3" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Next Card if exists */}
                    {activities[index + 1] && expandedId !== activities[index + 1].id && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="group"
                        data-testid={`card-activity-${activities[index + 1].id}`}
                      >
                        <motion.div
                          whileHover={{ y: -8 }}
                          className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
                        >
                          <div className="relative h-56 overflow-hidden">
                            {activities[index + 1]?.images?.length ? (
                              <>
                                <img
                                  src={activities[index + 1]?.images?.[0] ?? ''}
                                  alt={activities[index + 1]?.title ?? ''}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                              </>
                            ) : (
                              <div className={`w-full h-full bg-gradient-to-br ${categoryColors[activities[index + 1]?.category ?? 'Event']?.bg} flex items-center justify-center`}>
                                <span className="text-white font-bold text-lg">No image</span>
                              </div>
                            )}
                            
                            <div className="absolute top-4 left-4">
                              <span className={`px-4 py-2 bg-white/95 backdrop-blur-sm ${categoryColors[activities[index + 1].category]?.text} rounded-full text-xs font-bold shadow-lg`}>
                                {activities[index + 1].category}
                              </span>
                            </div>

                            <div className="absolute top-4 right-4">
                              <div className="px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2 shadow-lg">
                                <FaCalendar className="w-3 h-3 text-gray-600" />
                                <span className="text-xs font-bold text-gray-700">
                                  {activities[index + 1].date}, {activities[index + 1].year}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                              {activities[index + 1].title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                              {activities[index + 1].description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {activities[index + 1].tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className={`px-3 py-1 ${categoryColors[activities[index + 1].category]?.icon} ${categoryColors[activities[index + 1].category]?.text} rounded-full text-xs font-semibold`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                              <div className="flex items-center gap-2">
                                <div className={`w-10 h-10 rounded-full ${categoryColors[activities[index + 1].category]?.icon} ${categoryColors[activities[index + 1].category]?.text} flex items-center justify-center`}>
                                  <FaUsers className="w-5 h-5" />
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500 font-medium">Participants</p>
                                  <p className="text-sm font-bold text-gray-900">{activities[index + 1].participants}</p>
                                </div>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setExpandedId(activities[index + 1].id)}
                                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${categoryColors[activities[index + 1].category]?.bg} text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all`}
                              >
                                View Details
                                <FaArrowRight className="w-3 h-3" />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Expanded View */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        exit={{ y: 20 }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 border-b border-gray-200">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className={`inline-block px-4 py-2 ${categoryStyle.icon} ${categoryStyle.text} rounded-full text-sm font-bold mb-3`}>
                                {activity.category}
                              </span>
                              <h3 className="text-3xl font-black text-gray-900 mb-2">
                                {activity.title}
                              </h3>
                              <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                  <FaCalendar className="w-4 h-4" />
                                  <span className="font-semibold">{activity.date}, {activity.year}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FaUsers className="w-4 h-4" />
                                  <span className="font-semibold">{activity.participants} participants</span>
                                </div>
                              </div>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1, rotate: 90 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setExpandedId(null)}
                              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 shadow-lg"
                            >
                              <FaTimes className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </div>

                        <div className="p-8">
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">About This Event</h4>
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {activity.description}
                            </p>
                          </div>

                          {activity.images && activity.images.length > 0 && (
                            <div className="mb-8">
                              <h4 className="text-xl font-bold text-gray-900 mb-4">Event Gallery</h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {activity.images.map((imageSrc, i) => (
                                  <button
                                    key={i}
                                    className="aspect-video rounded-2xl overflow-hidden group/img focus:outline-none ring-2 ring-transparent hover:ring-cyan-400 transition-all"
                                    onClick={() => setLightbox({ src: imageSrc, activityId: activity.id, index: i })}
                                  >
                                    <img
                                      src={imageSrc}
                                      alt={`${activity.title} - Image ${i + 1}`}
                                      className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Tags</h4>
                            <div className="flex flex-wrap gap-3">
                              {activity.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className={`px-4 py-2 ${categoryStyle.icon} ${categoryStyle.text} rounded-full text-sm font-semibold`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img src={lightbox.src} alt="Lightbox" className="w-full max-h-[80vh] object-contain bg-black" />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors shadow-lg font-bold text-xl"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
