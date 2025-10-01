import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="action" className="relative py-24 lg:py-36 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Seja a Mudança que a Amazônia Precisa</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10">
          Cada ação conta. Desde a conscientização até o apoio a organizações na linha de frente, você pode fazer a diferença.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#96d117] text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-[#a9e83b] transition-transform hover:scale-105 w-full sm:w-auto">
            Apoie um Projeto
          </button>
          <button className="bg-transparent border-2 border-[#96d117] text-[#96d117] font-bold px-8 py-4 rounded-full hover:bg-[#96d117]/10 transition-colors w-full sm:w-auto">
            Compartilhe a Causa
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;