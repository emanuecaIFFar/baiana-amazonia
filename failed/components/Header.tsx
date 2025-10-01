
import React, { useState, useEffect } from 'react';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">Amazônia</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">A Floresta</a>
          <a href="#chat" className="text-white/80 hover:text-white transition-colors">Pergunte à IA</a>
          <a href="#action" className="text-white/80 hover:text-white transition-colors">Junte-se a nós</a>
        </nav>
        <div className="flex items-center bg-white/10 rounded-full px-4 py-1.5 border border-white/20">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-white/50 text-sm focus:outline-none w-24 sm:w-32"
          />
          <SearchIcon className="w-4 h-4 text-white/50" />
        </div>
      </div>
    </header>
  );
};

export default Header;
