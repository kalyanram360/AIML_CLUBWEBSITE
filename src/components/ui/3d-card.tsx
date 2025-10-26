import { useState, useRef, type MouseEvent, type ReactNode } from "react";

function cn(...args: any[]) {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === "string") return arg.split(" ");
      if (Array.isArray(arg)) return arg;
      if (typeof arg === "object") return Object.keys(arg).filter((k) => (arg as any)[k]);
      return [String(arg)];
    })
    .join(" ");
}

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      className={cn("flex items-center justify-center", containerClassName)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative flex items-center justify-center transition-all duration-200 ease-linear",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] relative",
        className
      )}
    >
      {/* Main Rotating Border Beam */}
      <div className="absolute inset-[-3px] rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0 overflow-visible">
        {/* Rotating gradient border beam with glow */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 70deg, rgba(8, 145, 178, 0.8) 88deg, rgba(16, 185, 129, 0.9) 92deg, transparent 110deg, transparent 360deg)',
            animation: 'border-beam 2.5s linear infinite',
            filter: 'blur(0.5px)',
          }}
        />
        {/* Stronger beam with sharper gradient */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 80deg, #0891b2 89deg, #10b981 91deg, transparent 100deg, transparent 360deg)',
            animation: 'border-beam 2.5s linear infinite',
          }}
        />
      </div>
      
      {/* Second Rotating Border Beam (delayed) */}
      <div className="absolute inset-[-3px] rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0 overflow-visible">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, transparent 70deg, rgba(6, 182, 212, 0.8) 88deg, rgba(5, 150, 105, 0.9) 92deg, transparent 110deg, transparent 360deg)',
            animation: 'border-beam 2.5s linear infinite',
            animationDelay: '1.25s',
            filter: 'blur(0.5px)',
          }}
        />
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, transparent 80deg, #06b6d4 89deg, #059669 91deg, transparent 100deg, transparent 360deg)',
            animation: 'border-beam 2.5s linear infinite',
            animationDelay: '1.25s',
          }}
        />
      </div>
      
      {/* Small Traveling Light Beam - moves around edges */}
      <div className="absolute inset-[-2px] rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 88deg, rgba(255, 255, 255, 0.9) 89.5deg, rgba(8, 145, 178, 1) 90deg, rgba(16, 185, 129, 1) 90.5deg, rgba(255, 255, 255, 0.9) 91deg, transparent 92deg, transparent 360deg)',
            animation: 'border-beam 3s linear infinite',
            filter: 'blur(1px) brightness(1.2)',
          }}
        />
        {/* Sharp focused beam without blur */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 89deg, #ffffff 89.8deg, #0891b2 90deg, #10b981 90.2deg, #ffffff 90.5deg, transparent 91deg, transparent 360deg)',
            animation: 'border-beam 3s linear infinite',
          }}
        />
      </div>
      
      {/* Second Small Traveling Light Beam (opposite direction for dynamic effect) */}
      <div className="absolute inset-[-2px] rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-0">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 268deg, rgba(255, 255, 255, 0.8) 269.5deg, rgba(6, 182, 212, 1) 270deg, rgba(5, 150, 105, 1) 270.5deg, rgba(255, 255, 255, 0.8) 271deg, transparent 272deg, transparent 360deg)',
            animation: 'border-beam-reverse 3s linear infinite',
            filter: 'blur(1px) brightness(1.2)',
          }}
        />
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 269deg, #ffffff 269.8deg, #06b6d4 270deg, #059669 270.2deg, #ffffff 270.5deg, transparent 271deg, transparent 360deg)',
            animation: 'border-beam-reverse 3s linear infinite',
          }}
        />
      </div>
      
      {/* Content wrapper to ensure it appears above border beams */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: any;
  children: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
};
