import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { teamMembers as localTeamMembers } from '../api/teamData';

// Local TeamMember type fallback (mirrors the shape used by this component)

  
type TeamMember = 
{
  id: string;
  name: string;
  category?: 'faculty' | 'student' | 'core' | string;
  imageUrl?: string | null;
  avatarColor?: string;
  role?: string;
  department?: string;
};

import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const categories = [

  { id: 'faculty', label: 'Faculty Coordinators' },
 
  { id: 'core', label: 'Core Team' }
];

const techCursors = [
  // Binary Tree / Data Structures
  'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%230891b2\' stroke-width=\'2.5\'><circle cx=\'12\' cy=\'4\' r=\'2\' fill=\'%230891b2\'/><circle cx=\'7\' cy=\'12\' r=\'2\' fill=\'%230891b2\'/><circle cx=\'17\' cy=\'12\' r=\'2\' fill=\'%230891b2\'/><circle cx=\'4\' cy=\'20\' r=\'2\' fill=\'%230891b2\'/><circle cx=\'10\' cy=\'20\' r=\'2\' fill=\'%230891b2\'/><circle cx=\'14\' cy=\'20\' r=\'2\' fill=\'%230891b2\'/><circle cx=\'20\' cy=\'20\' r=\'2\' fill=\'%230891b2\'/><path d=\'M12 6L7 10M12 6l5 4M7 14l-3 4M7 14l3 4M17 14l-3 4M17 14l3 4\'/></svg>") 16 16, pointer',
  // Robot / AI
  'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'%2310b981\'><rect x=\'6\' y=\'8\' width=\'12\' height=\'12\' rx=\'2\' fill=\'%2310b981\'/><circle cx=\'9\' cy=\'12\' r=\'1\' fill=\'white\'/><circle cx=\'15\' cy=\'12\' r=\'1\' fill=\'white\'/><rect x=\'9\' y=\'15\' width=\'6\' height=\'1\' fill=\'white\'/><path d=\'M12 6V4M6 10H4M18 10h2M6 16H4M18 16h2\' stroke=\'%2310b981\' stroke-width=\'2\'/></svg>") 16 16, pointer',
  // Database / DBMS
  'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2306b6d4\' stroke-width=\'2.5\'><ellipse cx=\'12\' cy=\'5\' rx=\'9\' ry=\'3\' fill=\'%2306b6d4\' opacity=\'0.3\'/><ellipse cx=\'12\' cy=\'5\' rx=\'9\' ry=\'3\'/><path d=\'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\'/><path d=\'M3 12c0 1.66 4 3 9 3s9-1.34 9-3\'/></svg>") 16 16, pointer',
];

export default function Team() {
  const [activeCategory, setActiveCategory] = useState('faculty');
  const [showTeam, setShowTeam] = useState(true);
  const samplePrompts = [
    'Hello GPT !! can you display our team ?'
  ];
  const [promptValue, setPromptValue] = useState(samplePrompts[0]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  // Prefer fetching from API when available; fall back to local `teamData` for dev / static builds.
  const { data: allMembers = localTeamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ['/api/team'],
    // Provide a quick queryFn that returns local data so the component renders without needing a server.
    queryFn: async () => localTeamMembers as unknown as TeamMember[],
  });

  const teamMembers = allMembers.filter(member => member.category === activeCategory);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const handlePromptSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowTeam(true);
    }
  };

  if (isLoading) {
    return (
      <section id="team" className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#ecfdf5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2]" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] via-[#f0fdf4] to-[#ecfdf5] relative overflow-hidden"
      data-testid="section-team"
    >
      {/* Floating Diagrams Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Neural Network Diagram */}
        <motion.svg
          className="absolute top-[20%] right-[30%] opacity-[0.04]"
          width="120"
          height="120"
          animate={{ rotate: [0, 360], y: [-15, 15, -15] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="20" cy="60" r="8" fill="#0891b2" />
          <circle cx="60" cy="30" r="8" fill="#0891b2" />
          <circle cx="60" cy="60" r="8" fill="#0891b2" />
          <circle cx="60" cy="90" r="8" fill="#0891b2" />
          <circle cx="100" cy="60" r="8" fill="#0891b2" />
          <line x1="28" y1="60" x2="52" y2="35" stroke="#0891b2" strokeWidth="2" />
          <line x1="28" y1="60" x2="52" y2="60" stroke="#0891b2" strokeWidth="2" />
          <line x1="28" y1="60" x2="52" y2="85" stroke="#0891b2" strokeWidth="2" />
          <line x1="68" y1="30" x2="92" y2="55" stroke="#0891b2" strokeWidth="2" />
          <line x1="68" y1="60" x2="92" y2="60" stroke="#0891b2" strokeWidth="2" />
          <line x1="68" y1="90" x2="92" y2="65" stroke="#0891b2" strokeWidth="2" />
        </motion.svg>

        {/* Floating Binary Tree Diagram */}
        <motion.svg
          className="absolute top-[65%] right-[5%] opacity-[0.04]"
          width="100"
          height="100"
          animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="50" cy="15" r="8" fill="#10b981" />
          <circle cx="25" cy="50" r="8" fill="#10b981" />
          <circle cx="75" cy="50" r="8" fill="#10b981" />
          <circle cx="12" cy="85" r="6" fill="#10b981" />
          <circle cx="38" cy="85" r="6" fill="#10b981" />
          <circle cx="62" cy="85" r="6" fill="#10b981" />
          <circle cx="88" cy="85" r="6" fill="#10b981" />
          <line x1="50" y1="23" x2="25" y2="42" stroke="#10b981" strokeWidth="2" />
          <line x1="50" y1="23" x2="75" y2="42" stroke="#10b981" strokeWidth="2" />
          <line x1="25" y1="58" x2="12" y2="77" stroke="#10b981" strokeWidth="2" />
          <line x1="25" y1="58" x2="38" y2="77" stroke="#10b981" strokeWidth="2" />
          <line x1="75" y1="58" x2="62" y2="77" stroke="#10b981" strokeWidth="2" />
          <line x1="75" y1="58" x2="88" y2="77" stroke="#10b981" strokeWidth="2" />
        </motion.svg>

        {/* Floating Database Diagram */}
        <motion.svg
          className="absolute top-[35%] left-[3%] opacity-[0.04]"
          width="80"
          height="100"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="40" cy="15" rx="35" ry="10" fill="none" stroke="#06b6d4" strokeWidth="2" />
          <ellipse cx="40" cy="50" rx="35" ry="10" fill="none" stroke="#06b6d4" strokeWidth="2" />
          <ellipse cx="40" cy="85" rx="35" ry="10" fill="none" stroke="#06b6d4" strokeWidth="2" />
          <line x1="5" y1="15" x2="5" y2="85" stroke="#06b6d4" strokeWidth="2" />
          <line x1="75" y1="15" x2="75" y2="85" stroke="#06b6d4" strokeWidth="2" />
        </motion.svg>

        {/* Floating Gear/Algorithm Diagram */}
        <motion.svg
          className="absolute top-[5%] left-[80%] opacity-[0.04]"
          width="90"
          height="90"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="45" cy="45" r="20" fill="none" stroke="#10b981" strokeWidth="3" />
          <circle cx="45" cy="45" r="12" fill="none" stroke="#10b981" strokeWidth="2" />
          <rect x="42" y="10" width="6" height="12" fill="#10b981" />
          <rect x="42" y="68" width="6" height="12" fill="#10b981" />
          <rect x="10" y="42" width="12" height="6" fill="#10b981" />
          <rect x="68" y="42" width="12" height="6" fill="#10b981" />
        </motion.svg>

        {/* Additional Neural Network Diagram (Top Left) */}
        <motion.svg
          className="absolute top-[10%] left-[15%] opacity-[0.04]"
          width="100"
          height="100"
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="15" cy="50" r="6" fill="#10b981" />
          <circle cx="50" cy="25" r="6" fill="#10b981" />
          <circle cx="50" cy="50" r="6" fill="#10b981" />
          <circle cx="50" cy="75" r="6" fill="#10b981" />
          <circle cx="85" cy="50" r="6" fill="#10b981" />
          <line x1="21" y1="50" x2="44" y2="30" stroke="#10b981" strokeWidth="1.5" />
          <line x1="21" y1="50" x2="44" y2="50" stroke="#10b981" strokeWidth="1.5" />
          <line x1="21" y1="50" x2="44" y2="70" stroke="#10b981" strokeWidth="1.5" />
          <line x1="56" y1="25" x2="79" y2="45" stroke="#10b981" strokeWidth="1.5" />
          <line x1="56" y1="50" x2="79" y2="50" stroke="#10b981" strokeWidth="1.5" />
          <line x1="56" y1="75" x2="79" y2="55" stroke="#10b981" strokeWidth="1.5" />
        </motion.svg>

        {/* Binary Tree Diagram (Bottom Left) */}
        <motion.svg
          className="absolute top-[80%] left-[8%] opacity-[0.04]"
          width="90"
          height="90"
          animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="45" cy="12" r="7" fill="#06b6d4" />
          <circle cx="22" cy="45" r="7" fill="#06b6d4" />
          <circle cx="68" cy="45" r="7" fill="#06b6d4" />
          <circle cx="11" cy="78" r="5" fill="#06b6d4" />
          <circle cx="33" cy="78" r="5" fill="#06b6d4" />
          <circle cx="57" cy="78" r="5" fill="#06b6d4" />
          <circle cx="79" cy="78" r="5" fill="#06b6d4" />
          <line x1="45" y1="19" x2="22" y2="38" stroke="#06b6d4" strokeWidth="2" />
          <line x1="45" y1="19" x2="68" y2="38" stroke="#06b6d4" strokeWidth="2" />
          <line x1="22" y1="52" x2="11" y2="71" stroke="#06b6d4" strokeWidth="2" />
          <line x1="22" y1="52" x2="33" y2="71" stroke="#06b6d4" strokeWidth="2" />
          <line x1="68" y1="52" x2="57" y2="71" stroke="#06b6d4" strokeWidth="2" />
          <line x1="68" y1="52" x2="79" y2="71" stroke="#06b6d4" strokeWidth="2" />
        </motion.svg>

        {/* Database Diagram (Bottom Right) */}
        <motion.svg
          className="absolute top-[75%] right-[25%] opacity-[0.04]"
          width="70"
          height="90"
          animate={{ y: [-8, 8, -8], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="35" cy="12" rx="30" ry="8" fill="none" stroke="#0891b2" strokeWidth="2" />
          <ellipse cx="35" cy="45" rx="30" ry="8" fill="none" stroke="#0891b2" strokeWidth="2" />
          <ellipse cx="35" cy="78" rx="30" ry="8" fill="none" stroke="#0891b2" strokeWidth="2" />
          <line x1="5" y1="12" x2="5" y2="78" stroke="#0891b2" strokeWidth="2" />
          <line x1="65" y1="12" x2="65" y2="78" stroke="#0891b2" strokeWidth="2" />
        </motion.svg>

        {/* Gear Diagram (Middle Right) */}
        <motion.svg
          className="absolute top-[45%] right-[10%] opacity-[0.04]"
          width="80"
          height="80"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="40" cy="40" r="18" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
          <circle cx="40" cy="40" r="10" fill="none" stroke="#06b6d4" strokeWidth="2" />
          <rect x="37" y="8" width="6" height="10" fill="#06b6d4" />
          <rect x="37" y="62" width="6" height="10" fill="#06b6d4" />
          <rect x="8" y="37" width="10" height="6" fill="#06b6d4" />
          <rect x="62" y="37" width="10" height="6" fill="#06b6d4" />
        </motion.svg>

        {/* Network Nodes Diagram (Top Right) */}
        <motion.svg
          className="absolute top-[15%] right-[15%] opacity-[0.04]"
          width="110"
          height="110"
          animate={{ y: [-12, 12, -12], x: [8, -8, 8] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="55" cy="55" r="10" fill="#10b981" />
          <circle cx="15" cy="15" r="7" fill="#10b981" />
          <circle cx="95" cy="15" r="7" fill="#10b981" />
          <circle cx="15" cy="95" r="7" fill="#10b981" />
          <circle cx="95" cy="95" r="7" fill="#10b981" />
          <line x1="22" y1="22" x2="45" y2="45" stroke="#10b981" strokeWidth="2" />
          <line x1="88" y1="22" x2="65" y2="45" stroke="#10b981" strokeWidth="2" />
          <line x1="22" y1="88" x2="45" y2="65" stroke="#10b981" strokeWidth="2" />
          <line x1="88" y1="88" x2="65" y2="65" stroke="#10b981" strokeWidth="2" />
        </motion.svg>

        {/* Algorithm Flowchart (Middle Left) */}
        <motion.svg
          className="absolute top-[48%] left-[25%] opacity-[0.04]"
          width="70"
          height="90"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="20" y="5" width="30" height="15" rx="2" fill="#0891b2" />
          <path d="M15 35 L35 55 L55 35 Z" fill="#0891b2" />
          <rect x="20" y="70" width="30" height="15" rx="2" fill="#0891b2" />
          <line x1="35" y1="20" x2="35" y2="35" stroke="#0891b2" strokeWidth="2" />
          <line x1="35" y1="55" x2="35" y2="70" stroke="#0891b2" strokeWidth="2" />
        </motion.svg>

        {/* Additional Neural Network Diagram (Center) - Brighter */}
        <motion.svg
          className="absolute top-[50%] left-[55%] opacity-[0.12]"
          width="95"
          height="95"
          animate={{ y: [-8, 8, -8], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="12" cy="47" r="5" fill="#0891b2" />
          <circle cx="47" cy="20" r="5" fill="#0891b2" />
          <circle cx="47" cy="47" r="5" fill="#0891b2" />
          <circle cx="47" cy="74" r="5" fill="#0891b2" />
          <circle cx="82" cy="47" r="5" fill="#0891b2" />
          <line x1="17" y1="47" x2="42" y2="25" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="17" y1="47" x2="42" y2="47" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="17" y1="47" x2="42" y2="69" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="52" y1="20" x2="77" y2="42" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="52" y1="47" x2="77" y2="47" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="52" y1="74" x2="77" y2="52" stroke="#0891b2" strokeWidth="1.5" />
        </motion.svg>

        {/* Graph Diagram (Top Center) - Brighter */}
        <motion.svg
          className="absolute top-[8%] left-[48%] opacity-[0.10]"
          width="85"
          height="85"
          animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="42" cy="15" r="6" fill="#10b981" />
          <circle cx="15" cy="42" r="6" fill="#10b981" />
          <circle cx="70" cy="42" r="6" fill="#10b981" />
          <circle cx="42" cy="70" r="6" fill="#10b981" />
          <line x1="42" y1="21" x2="21" y2="36" stroke="#10b981" strokeWidth="2" />
          <line x1="42" y1="21" x2="64" y2="36" stroke="#10b981" strokeWidth="2" />
          <line x1="21" y1="42" x2="36" y2="64" stroke="#10b981" strokeWidth="2" />
          <line x1="64" y1="42" x2="48" y2="64" stroke="#10b981" strokeWidth="2" />
          <line x1="21" y1="42" x2="64" y2="42" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
        </motion.svg>

        {/* Circuit Pattern (Bottom Center) */}
        <motion.svg
          className="absolute top-[85%] left-[50%] opacity-[0.08]"
          width="100"
          height="60"
          animate={{ opacity: [0.06, 0.10, 0.06] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="20" cy="30" r="4" fill="#06b6d4" />
          <circle cx="50" cy="30" r="4" fill="#06b6d4" />
          <circle cx="80" cy="30" r="4" fill="#06b6d4" />
          <line x1="24" y1="30" x2="46" y2="30" stroke="#06b6d4" strokeWidth="2" />
          <line x1="54" y1="30" x2="76" y2="30" stroke="#06b6d4" strokeWidth="2" />
          <rect x="35" y="15" width="10" height="8" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="65" y="22" width="8" height="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="40" y1="15" x2="40" y2="10" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="69" y1="22" x2="69" y2="17" stroke="#06b6d4" strokeWidth="1.5" />
        </motion.svg>

        {/* Matrix/Grid Pattern (Middle Left) - Brighter */}
        <motion.svg
          className="absolute top-[55%] left-[12%] opacity-[0.11]"
          width="75"
          height="75"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="18" cy="18" r="3" fill="#10b981" />
          <circle cx="37" cy="18" r="3" fill="#10b981" />
          <circle cx="56" cy="18" r="3" fill="#10b981" />
          <circle cx="18" cy="37" r="3" fill="#10b981" />
          <circle cx="37" cy="37" r="3" fill="#10b981" />
          <circle cx="56" cy="37" r="3" fill="#10b981" />
          <circle cx="18" cy="56" r="3" fill="#10b981" />
          <circle cx="37" cy="56" r="3" fill="#10b981" />
          <circle cx="56" cy="56" r="3" fill="#10b981" />
          <line x1="21" y1="18" x2="34" y2="18" stroke="#10b981" strokeWidth="1" />
          <line x1="40" y1="18" x2="53" y2="18" stroke="#10b981" strokeWidth="1" />
          <line x1="18" y1="21" x2="18" y2="34" stroke="#10b981" strokeWidth="1" />
          <line x1="18" y1="40" x2="18" y2="53" stroke="#10b981" strokeWidth="1" />
          <line x1="37" y1="21" x2="37" y2="34" stroke="#10b981" strokeWidth="1" />
          <line x1="37" y1="40" x2="37" y2="53" stroke="#10b981" strokeWidth="1" />
        </motion.svg>

        {/* Tree Structure (Top Left Corner) - Brighter */}
        <motion.svg
          className="absolute top-[3%] left-[5%] opacity-[0.09]"
          width="80"
          height="80"
          animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="40" cy="10" r="6" fill="#0891b2" />
          <circle cx="20" cy="35" r="5" fill="#0891b2" />
          <circle cx="60" cy="35" r="5" fill="#0891b2" />
          <circle cx="10" cy="60" r="4" fill="#0891b2" />
          <circle cx="30" cy="60" r="4" fill="#0891b2" />
          <circle cx="50" cy="60" r="4" fill="#0891b2" />
          <circle cx="70" cy="60" r="4" fill="#0891b2" />
          <line x1="40" y1="16" x2="20" y2="30" stroke="#0891b2" strokeWidth="2" />
          <line x1="40" y1="16" x2="60" y2="30" stroke="#0891b2" strokeWidth="2" />
          <line x1="20" y1="40" x2="10" y2="56" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="20" y1="40" x2="30" y2="56" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="60" y1="40" x2="50" y2="56" stroke="#0891b2" strokeWidth="1.5" />
          <line x1="60" y1="40" x2="70" y2="56" stroke="#0891b2" strokeWidth="1.5" />
        </motion.svg>

        {/* Hexagon Network Pattern (Right Side) */}
        <motion.svg
          className="absolute top-[60%] right-[3%] opacity-[0.07]"
          width="90"
          height="90"
          animate={{ y: [-7, 7, -7], rotate: [0, 60, 120, 180, 240, 300, 360] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="45,10 70,25 70,55 45,70 20,55 20,25" fill="none" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="45" cy="10" r="4" fill="#06b6d4" />
          <circle cx="70" cy="25" r="4" fill="#06b6d4" />
          <circle cx="70" cy="55" r="4" fill="#06b6d4" />
          <circle cx="45" cy="70" r="4" fill="#06b6d4" />
          <circle cx="20" cy="55" r="4" fill="#06b6d4" />
          <circle cx="20" cy="25" r="4" fill="#06b6d4" />
          <circle cx="45" cy="40" r="5" fill="#06b6d4" />
          <line x1="45" y1="40" x2="45" y2="10" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="45" y1="40" x2="70" y2="25" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="45" y1="40" x2="20" y2="55" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2,2" />
        </motion.svg>

        {/* Algorithm Steps (Left Center) - Brighter */}
        <motion.svg
          className="absolute top-[38%] left-[7%] opacity-[0.10]"
          width="60"
          height="100"
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="30" cy="15" r="10" fill="none" stroke="#10b981" strokeWidth="2.5" />
          <rect x="15" y="40" width="30" height="20" rx="3" fill="none" stroke="#10b981" strokeWidth="2.5" />
          <path d="M10 75 L30 85 L50 75 L30 65 Z" fill="none" stroke="#10b981" strokeWidth="2.5" />
          <line x1="30" y1="25" x2="30" y2="40" stroke="#10b981" strokeWidth="2" />
          <line x1="30" y1="60" x2="30" y2="65" stroke="#10b981" strokeWidth="2" />
        </motion.svg>

        {/* Data Flow Arrows (Top Right Corner) - Brighter */}
        <motion.svg
          className="absolute top-[5%] right-[5%] opacity-[0.09]"
          width="70"
          height="70"
          animate={{ x: [5, -5, 5], y: [-3, 3, -3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="15" cy="35" r="8" fill="#0891b2" />
          <circle cx="55" cy="35" r="8" fill="#0891b2" />
          <path d="M23 35 L45 35" stroke="#0891b2" strokeWidth="3" />
          <path d="M40 30 L47 35 L40 40" fill="#0891b2" />
          <path d="M35 10 L35 25" stroke="#10b981" strokeWidth="3" />
          <path d="M30 20 L35 27 L40 20" fill="#10b981" />
          <path d="M35 45 L35 60" stroke="#06b6d4" strokeWidth="3" />
          <path d="M30 50 L35 43 L40 50" fill="#06b6d4" />
        </motion.svg>

        {/* Star/Hub Network Pattern (Bottom Right Corner) */}
        <motion.svg
          className="absolute top-[88%] right-[8%] opacity-[0.07]"
          width="85"
          height="85"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="42" cy="42" r="8" fill="#10b981" />
          <circle cx="42" cy="8" r="5" fill="#10b981" />
          <circle cx="77" cy="42" r="5" fill="#10b981" />
          <circle cx="42" cy="77" r="5" fill="#10b981" />
          <circle cx="8" cy="42" r="5" fill="#10b981" />
          <circle cx="68" cy="15" r="4" fill="#10b981" />
          <circle cx="68" cy="68" r="4" fill="#10b981" />
          <circle cx="15" cy="68" r="4" fill="#10b981" />
          <circle cx="15" cy="15" r="4" fill="#10b981" />
          <line x1="42" y1="50" x2="42" y2="72" stroke="#10b981" strokeWidth="1.5" />
          <line x1="42" y1="34" x2="42" y2="13" stroke="#10b981" strokeWidth="1.5" />
          <line x1="50" y1="42" x2="72" y2="42" stroke="#10b981" strokeWidth="1.5" />
          <line x1="34" y1="42" x2="13" y2="42" stroke="#10b981" strokeWidth="1.5" />
          <line x1="50" y1="34" x2="63" y2="20" stroke="#10b981" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="50" y1="50" x2="63" y2="63" stroke="#10b981" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="34" y1="50" x2="20" y2="63" stroke="#10b981" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="34" y1="34" x2="20" y2="20" stroke="#10b981" strokeWidth="1" strokeDasharray="2,2" />
        </motion.svg>

        {/* Additional Small Nodes */}
        <motion.div
          className="absolute top-[45%] left-[50%] w-3 h-3 rounded-full bg-[#0891b2] opacity-[0.05]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] left-[75%] w-2 h-2 rounded-full bg-[#10b981] opacity-[0.05]"
          animate={{ scale: [1, 2, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[70%] left-[70%] w-3 h-3 rounded-full bg-[#06b6d4] opacity-[0.05]"
          animate={{ scale: [1, 1.8, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[25%] left-[45%] w-2 h-2 rounded-full bg-[#0891b2] opacity-[0.05]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[55%] right-[40%] w-3 h-3 rounded-full bg-[#10b981] opacity-[0.05]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[18%] left-[35%] w-2 h-2 rounded-full bg-[#06b6d4] opacity-[0.06]"
          animate={{ scale: [1, 1.7, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[65%] left-[38%] w-3 h-3 rounded-full bg-[#0891b2] opacity-[0.06]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-2 h-2 rounded-full bg-[#10b981] opacity-[0.06]"
          animate={{ scale: [1, 1.9, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[82%] left-[25%] w-3 h-3 rounded-full bg-[#06b6d4] opacity-[0.06]"
          animate={{ scale: [1, 1.6, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[12%] right-[45%] w-2 h-2 rounded-full bg-[#10b981] opacity-[0.06]"
          animate={{ scale: [1, 2.1, 1], opacity: [0.04, 0.10, 0.04] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ChatGPT Style Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative">
            {/* Prompt Container */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  {/* AI Avatar Icon */}
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] flex items-center justify-center shadow-md"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(8, 145, 178, 0.4)",
                        "0 0 0 8px rgba(8, 145, 178, 0)",
                        "0 0 0 0px rgba(8, 145, 178, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                      repeat: Infinity
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </motion.div>

                  {/* Input Field */}
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={promptValue}
                      onChange={(e) => setPromptValue(e.target.value)}
                      onKeyDown={handlePromptSubmit}
                      placeholder='Try: "Display the club pillars — strengths, values, key members."'
                      className="w-full px-4 py-3 text-lg font-semibold placeholder:italic placeholder:text-[#7b8ea0] focus:outline-none focus:ring-2 focus:ring-[#0891b2] rounded-md bg-transparent"
                      data-testid="input-team-prompt"
                    />
                    
                    {/* Typing cursor animation */}
                    {!showTeam && (
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#0891b2]"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Send Button */}
                  <motion.button
                    onClick={() => setShowTeam(true)}
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#0891b2] to-[#10b981] text-white flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid="button-submit-prompt"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Removed bottom hint to keep the prompt area clean and focused */}
            </div>

            {/* Decorative glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#0891b2] to-[#10b981] rounded-2xl blur-xl opacity-0"
              animate={{
                opacity: [0, 0.15, 0]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity
              }}
              style={{ zIndex: -1 }}
            />
          </div>
        </motion.div>

        {/* Team Content - Shows after prompt submission */}
        {showTeam && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight relative"
          >
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={inView ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              } : {}}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
              className="relative inline-block bg-gradient-to-r from-[#0891b2] via-[#10b981] via-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto" }}
            >
              Meet Our Team
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent bg-clip-text text-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{ 
                  backgroundSize: "50% 100%",
                  filter: "blur(1px)",
                }}
              >
                Meet Our Team
              </motion.span>
              <motion.span
                className="absolute inset-0 opacity-60"
                animate={{
                  filter: [
                    "drop-shadow(0 0 8px rgba(8, 145, 178, 0.6)) drop-shadow(0 0 16px rgba(16, 185, 129, 0.4))",
                    "drop-shadow(0 0 16px rgba(16, 185, 129, 0.6)) drop-shadow(0 0 24px rgba(8, 145, 178, 0.4))",
                    "drop-shadow(0 0 8px rgba(8, 145, 178, 0.6)) drop-shadow(0 0 16px rgba(16, 185, 129, 0.4))",
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <span className="bg-gradient-to-r from-[#0891b2] via-[#10b981] via-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent" style={{ backgroundSize: "200% auto" }}>
                  Meet Our Team
                </span>
              </motion.span>
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto overflow-hidden relative"
          >
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative"
            >
              {['Passionate', 'individuals', 'driving', 'innovation', 'and', 'fostering', 'a', 'vibrant', 'AI', 'community'].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { 
                    opacity: 1, 
                    y: 0,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  } : {}}
                  transition={{
                    opacity: {
                      duration: 0.4,
                      delay: 0.5 + index * 0.08,
                      ease: "easeOut"
                    },
                    y: {
                      duration: 0.4,
                      delay: 0.5 + index * 0.08,
                      ease: "easeOut"
                    },
                    backgroundPosition: {
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                      delay: 0.5 + index * 0.08
                    }
                  }}
                  className="inline-block mr-[0.3em] bg-gradient-to-r from-[#475569] via-[#0891b2] via-[#10b981] via-[#06b6d4] to-[#475569] bg-clip-text text-transparent font-medium relative"
                  style={{ 
                    backgroundSize: "200% auto",
                    filter: "drop-shadow(0 0 6px rgba(8, 145, 178, 0.2))"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>

        

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 0 2px rgba(8, 145, 178, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={activeCategory === category.id ? {
                scale: [1, 1.08, 1.02],
                boxShadow: [
                  "0 0 20px rgba(8, 145, 178, 0.6), 0 0 40px rgba(16, 185, 129, 0.3)",
                  "0 0 30px rgba(16, 185, 129, 0.7), 0 0 60px rgba(8, 145, 178, 0.4)",
                  "0 0 20px rgba(8, 145, 178, 0.6), 0 0 40px rgba(16, 185, 129, 0.3)"
                ],
              } : {}}
              transition={activeCategory === category.id ? {
                scale: {
                  duration: 0.5,
                  ease: "easeOut"
                },
                boxShadow: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }
              } : {}}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#0891b2] via-[#10b981] to-[#059669] text-white shadow-2xl'
                  : 'bg-white text-[#475569] border-2 border-transparent hover:border-[#0891b2]'
              }`}
              style={{ 
                cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'%230891b2\'><path d=\'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\'/></svg>") 12 12, pointer',
                backgroundSize: activeCategory === category.id ? '200% 100%' : 'auto'
              }}
              data-testid={`button-filter-${category.id}`}
            >
              {activeCategory === category.id && (
                <>
                  {/* Animated Background Gradient */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0891b2] via-[#10b981] to-[#06b6d4]"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                    style={{ backgroundSize: "200% 100%" }}
                  />
                  
                  {/* Shine Sweep Effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.8
                    }}
                    style={{ filter: "blur(8px)" }}
                  />
                  
                  {/* Pulsing Glow Ring */}
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-white/40"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity
                    }}
                  />
                  
                  {/* Multiple Pulsing Rings */}
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(8, 145, 178, 0.4)",
                        "0 0 0 12px rgba(8, 145, 178, 0)",
                        "0 0 0 0px rgba(8, 145, 178, 0)"
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                  
                  {/* Shimmer particles */}
                  <motion.span
                    className="absolute top-1 right-4 w-1.5 h-1.5 rounded-full bg-white"
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      y: [0, -8, -16]
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 0.8
                    }}
                  />
                  <motion.span
                    className="absolute top-2 left-8 w-1 h-1 rounded-full bg-white/80"
                    animate={{
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.8, 0],
                      y: [0, -10, -20]
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      delay: 0.3
                    }}
                  />
                  <motion.span
                    className="absolute top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-white/90"
                    animate={{
                      scale: [0, 1.8, 0],
                      opacity: [0, 1, 0],
                      y: [0, -12, -24]
                    }}
                    transition={{
                      duration: 1.4,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 0.6
                    }}
                  />
                  
                  {/* Corner Sparkles */}
                  <motion.span
                    className="absolute -top-1 -right-1 w-3 h-3"
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                      repeat: Infinity
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="drop-shadow-lg">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </motion.span>
                  
                  <motion.span
                    className="absolute -top-1 -left-1 w-2.5 h-2.5"
                    animate={{
                      rotate: [360, 180, 0],
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2.5,
                      ease: "linear",
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="drop-shadow-lg">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                  </motion.span>
                </>
              )}
              
              <span className="relative z-10">
                {category.label}
              </span>
              
              {activeCategory !== category.id && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0891b2]/10 to-[#059669]/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ cursor: techCursors[index % techCursors.length] }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-[#0891b2]/20 border border-[#e2e8f0] w-full h-auto rounded-2xl p-8 overflow-hidden">
                  {/* Animated Border Light - Moving along edges */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    {/* Moving Light traveling around border */}
                    <div className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-[#0891b2] to-transparent blur-sm animate-border-travel-horizontal top-0 left-0" />
                    <div className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-[#059669] to-transparent blur-sm animate-border-travel-vertical-right top-0 right-0" />
                    <div className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-[#0891b2] to-transparent blur-sm animate-border-travel-horizontal-reverse bottom-0 right-0" />
                    <div className="absolute w-1 h-24 bg-gradient-to-b from-transparent via-[#059669] to-transparent blur-sm animate-border-travel-vertical-left bottom-0 left-0" />
                    
                    {/* Glowing Orb traveling around */}
                    <div className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-[#0891b2] to-[#059669] shadow-lg shadow-[#0891b2]/50 animate-travel-border" />
                    
                    {/* Corner Accent Lights */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-[#0891b2] rounded-full blur-[2px] opacity-60" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#059669] rounded-full blur-[2px] opacity-60" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#059669] rounded-full blur-[2px] opacity-60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#0891b2] rounded-full blur-[2px] opacity-60" />
                  </div>
                  {/* Avatar */}
                  <CardItem translateZ="100" className="flex justify-center mb-6">
                    <div className="relative p-4">
                      {/* Enhanced Sparkle Elements - Multiple animated sparkles */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-[#0891b2] to-[#059669] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-all duration-300 shadow-lg shadow-[#0891b2]/50" />
                      <div className="absolute -top-1 right-8 w-2 h-2 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-bounce transition-all duration-500 delay-150" />
                      <div className="absolute top-6 -left-2 w-3 h-3 bg-gradient-to-br from-[#059669] to-[#10b981] rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-700 delay-100 shadow-md shadow-[#059669]/40" 
                           style={{ animation: 'group-hover/card:pulse 2s ease-in-out infinite' }} />
                      <div className="absolute -bottom-2 right-4 w-3.5 h-3.5 bg-gradient-to-br from-[#10b981] to-[#06b6d4] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-pulse transition-all duration-600 delay-200 shadow-lg shadow-[#10b981]/50" />
                      <div className="absolute bottom-8 -left-1 w-2 h-2 bg-gradient-to-br from-[#0891b2] to-[#059669] rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-800 delay-300 animate-ping" />
                      <div className="absolute -bottom-1 left-6 w-2.5 h-2.5 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-bounce transition-all duration-500 delay-250" />
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-400 delay-100 shadow-sm shadow-[#0891b2]/30" />
                      <div className="absolute -top-1 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping transition-all duration-600 delay-350" />
                      
                      {/* 3D Shadow Layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/20 to-[#059669]/20 rounded-2xl blur-xl transform translate-y-3 translate-x-3 opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                      
                      {/* Main Image Container with Animated Tech Cursor */}
                      <div 
                        className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover/card:shadow-[0_20px_50px_rgba(8,145,178,0.4)] group-hover/card:scale-105 tech-cursor"
                        data-cursor-index={index % 8}
                      >
                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" 
                             style={{ 
                               backgroundSize: '200% 200%',
                               animation: 'shimmer 2.5s ease-in-out infinite'
                             }} 
                        />
                        
                        {/* Rotating Border Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0891b2] via-[#059669] to-[#0891b2] rounded-2xl blur-md" 
                               style={{ animation: 'spin 4s linear infinite' }} />
                        </div>
                        
                        {/* Avatar - Image or Initials */}
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover relative z-10"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-white text-4xl font-bold relative z-10"
                            style={{ 
                              background: `linear-gradient(135deg, ${member.avatarColor}, ${member.avatarColor}dd)`
                            }}
                          >
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardItem>

                  {/* Info */}
                  <div className="text-center">
                    <CardItem
                      translateZ="60"
                      as="h3"
                      className="text-lg font-bold mb-1 relative overflow-hidden group/name"
                      data-testid={`text-member-name-${member.id}`}
                    >
                      <motion.span
                        className="relative inline-block bg-gradient-to-r from-[#0f172a] via-[#0891b2] to-[#0f172a] bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% auto" }}
                        animate={{
                          backgroundPosition: ["0% center", "100% center", "0% center"]
                        }}
                        transition={{
                          duration: 5,
                          ease: "linear",
                          repeat: Infinity
                        }}
                      >
                        {member.name}
                        
                        {/* Shine sweep on hover */}
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent bg-clip-text text-transparent opacity-0 group-hover/name:opacity-100"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "200%" }}
                          transition={{
                            duration: 1.2,
                            ease: "easeInOut"
                          }}
                        >
                          {member.name}
                        </motion.span>
                      </motion.span>
                      
                      {/* Subtle glow on hover */}
                      <motion.span
                        className="absolute inset-0 opacity-0 group-hover/name:opacity-100 blur-sm"
                        initial={{ filter: "drop-shadow(0 0 0px rgba(8, 145, 178, 0))" }}
                        whileHover={{ 
                          filter: [
                            "drop-shadow(0 0 8px rgba(8, 145, 178, 0.5))",
                            "drop-shadow(0 0 12px rgba(16, 185, 129, 0.6))",
                            "drop-shadow(0 0 8px rgba(8, 145, 178, 0.5))"
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: Infinity
                        }}
                      >
                        <span className="bg-gradient-to-r from-[#0f172a] via-[#0891b2] to-[#0f172a] bg-clip-text text-transparent">
                          {member.name}
                        </span>
                      </motion.span>
                    </CardItem>
                    
                    <CardItem
                      translateZ="50"
                      as="div"
                      className="text-base font-semibold mb-1 relative group/role"
                      data-testid={`text-member-role-${member.id}`}
                    >
                      <motion.p
                        className="relative inline-block bg-gradient-to-r from-[#0891b2] via-[#10b981] via-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% auto" }}
                        animate={{
                          backgroundPosition: ["0% center", "100% center", "0% center"]
                        }}
                        transition={{
                          duration: 4,
                          ease: "linear",
                          repeat: Infinity
                        }}
                      >
                        {member.role}
                        
                        {/* Animated underline on hover */}
                        <motion.span
                          className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#0891b2] to-[#10b981] origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        
                        {/* Sparkle particles on hover */}
                        <motion.span
                          className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-[#0891b2] opacity-0 group-hover/role:opacity-100"
                          animate={{
                            y: [-5, -15],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                        />
                        <motion.span
                          className="absolute top-0 right-1/4 w-1 h-1 rounded-full bg-[#10b981] opacity-0 group-hover/role:opacity-100"
                          animate={{
                            y: [-5, -15],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            delay: 0.3
                          }}
                        />
                      </motion.p>
                      
                      {/* Pulsing glow effect */}
                      <motion.span
                        className="absolute inset-0 opacity-0 group-hover/role:opacity-100"
                        animate={{
                          filter: [
                            "drop-shadow(0 0 6px rgba(8, 145, 178, 0.4))",
                            "drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))",
                            "drop-shadow(0 0 6px rgba(8, 145, 178, 0.4))"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity
                        }}
                      >
                        <span className="bg-gradient-to-r from-[#0891b2] via-[#10b981] to-[#0891b2] bg-clip-text text-transparent">
                          {member.role}
                        </span>
                      </motion.span>
                    </CardItem>
                    
                    {member.department && (
                      <CardItem
                        translateZ="40"
                        as="div"
                        className="text-sm mb-4 relative group/dept"
                        data-testid={`text-member-department-${member.id}`}
                      >
                        <motion.p
                          className="relative inline-block text-[#64748b] font-medium"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          {member.department}
                          
                          {/* Simple underline on hover */}
                          <motion.span
                            className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0891b2] to-transparent"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileHover={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        </motion.p>
                        
                        {/* Subtle fade-in glow on hover */}
                        <motion.span
                          className="absolute inset-0 opacity-0 group-hover/dept:opacity-100 pointer-events-none"
                          initial={{ filter: "drop-shadow(0 0 0px rgba(8, 145, 178, 0))" }}
                          whileHover={{ 
                            filter: "drop-shadow(0 0 4px rgba(8, 145, 178, 0.3))"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-[#64748b] font-medium">
                            {member.department}
                          </span>
                        </motion.span>
                      </CardItem>
                    )}

                    {/* LinkedIn*/}
                    <CardItem translateZ="70" className="flex justify-center">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f1f5f9] text-[#475569] hover:bg-gradient-to-r hover:from-[#0891b2] hover:to-[#059669] hover:text-white transition-all duration-300 relative overflow-visible group/linkedin"
                        aria-label={`${member.name} LinkedIn`}
                        data-testid={`link-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -10, 10, -10, 0],
                        }}
                        whileTap={{ 
                          scale: 0.9,
                        }}
                        transition={{
                          scale: { duration: 0.2 },
                          rotate: { duration: 0.5 }
                        }}
                      >
                        <FaLinkedin className="w-5 h-5 relative z-10" />
                        
                        {/* Pulsing ring on hover */}
                        <motion.span
                          className="absolute inset-0 rounded-full border-2 border-[#0891b2] opacity-0 group-hover/linkedin:opacity-100"
                          animate={{
                            scale: [1, 1.4, 1.4],
                            opacity: [0.6, 0, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            repeat: Infinity
                          }}
                        />
                        
                        {/* Second pulsing ring */}
                        <motion.span
                          className="absolute inset-0 rounded-full border-2 border-[#10b981] opacity-0 group-hover/linkedin:opacity-100"
                          animate={{
                            scale: [1, 1.4, 1.4],
                            opacity: [0.6, 0, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            repeat: Infinity,
                            delay: 0.3
                          }}
                        />
                        
                        {/* Sparkle particles */}
                        <motion.span
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#0891b2] opacity-0 group-hover/linkedin:opacity-100"
                          animate={{
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360],
                            y: [-8, -16, -24],
                            x: [4, 8, 12]
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                        />
                        <motion.span
                          className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#10b981] opacity-0 group-hover/linkedin:opacity-100"
                          animate={{
                            scale: [0, 1.5, 0],
                            rotate: [0, -180, -360],
                            y: [-8, -16, -24],
                            x: [-4, -8, -12]
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            delay: 0.25
                          }}
                        />
                        <motion.span
                          className="absolute -bottom-1 right-0 w-1.5 h-1.5 rounded-full bg-[#06b6d4] opacity-0 group-hover/linkedin:opacity-100"
                          animate={{
                            scale: [0, 1.3, 0],
                            y: [8, 16, 24]
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.6,
                            delay: 0.5
                          }}
                        />
                        
                        {/* Rotating glow */}
                        <motion.span
                          className="absolute inset-0 rounded-full opacity-0 group-hover/linkedin:opacity-100"
                          style={{
                            background: "conic-gradient(from 0deg, transparent, #0891b2, transparent)"
                          }}
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity
                          }}
                        />
                        
                        {/* Glow effect */}
                        <motion.span
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0891b2] to-[#10b981] blur-md opacity-0 group-hover/linkedin:opacity-70"
                          animate={{
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity
                          }}
                        />
                      </motion.a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
        </motion.div>
      )}
      </div>
    </section>
  );
}
