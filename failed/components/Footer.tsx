
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a140c] border-t border-white/10 py-8">
      <div className="container mx-auto px-6 text-center text-white/50">
        <p>&copy; {new Date().getFullYear()} Amazônia Preservation. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Um projeto de conscientização para proteger nosso maior tesouro.</p>
      </div>
    </footer>
  );
};

export default Footer;
