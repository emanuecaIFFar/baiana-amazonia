import React from 'react';

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 10 10" className={className} fill="currentColor">
    <path d="M4 0H6V4H10V6H6V10H4V6H0V4H4V0Z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594735363229-9e521b2a953a?q=80&w=1920&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-full">
            <h1 className="text-white font-extrabold text-[12vw] sm:text-[10vw] md:text-9xl lg:text-[12rem] leading-none tracking-tighter" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                Amazônia
            </h1>
            <div className="absolute top-[0.1em] left-[2.2em] md:left-[2.1em] lg:left-[2.15em] w-[0.6em] h-[0.6em] bg-[#96d117] rounded-full"></div>
            <div className="absolute bottom-[0.3em] right-[3.3em] md:right-[3.35em] lg:right-[3.35em] w-[0.3em] h-[0.3em] bg-white/80 rounded-full"></div>

            <img src="https://i.ibb.co/CBr2hGr/leaf-1.png" alt="Floating Leaf" className="absolute -bottom-1 -left-2 w-[5em] h-auto transform -rotate-12 animate-float" />
            <img src="https://i.ibb.co/3cCxVfB/leaf-2.png" alt="Floating Leaf" className="absolute -top-1 right-[2em] w-[4em] h-auto transform rotate-12 animate-float-delay" />

        </div>
        <div className="w-[80%] md:w-[60%] h-px bg-white/30 mt-4"></div>
      </div>
      
      <PlusIcon className="absolute top-1/2 left-10 text-white/50 w-3 h-3 animate-pulse" />
      <PlusIcon className="absolute bottom-1/4 right-12 text-white/50 w-4 h-4 animate-pulse" />
      <PlusIcon className="absolute top-1/3 right-20 text-white/50 w-2 h-2 animate-pulse" />

      {/* Fix: Removed unsupported `jsx` prop from `<style>` tag. The `jsx` prop is specific to Next.js's styled-jsx, which is not being used here. */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-12px) rotate(15deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Hero;