import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-white/5 p-6 rounded-lg text-center backdrop-blur-sm border border-white/10">
    <p className="text-4xl lg:text-5xl font-bold text-[#96d117]">{value}</p>
    <p className="text-sm text-white/70 mt-2">{label}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-[#0a140c] to-[#0f1d13]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">O Coração Verde do Mundo</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            A Amazônia não é apenas uma floresta; é um sistema vital que regula o clima global, abriga uma biodiversidade incomparável e sustenta milhões de vidas. Proteger a Amazônia é proteger o futuro do nosso planeta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard value="10%" label="Das espécies conhecidas do mundo vivem aqui" />
          <StatCard value="20%" label="Do oxigênio da Terra é produzido pela floresta" />
          <StatCard value="17%" label="Da floresta já foi perdida para o desmatamento" />
        </div>

        <div className="mt-20 lg:mt-28 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559827291-72ee739d0d95?q=80&w=800&auto=format&fit=crop" alt="Amazon River" className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div>
                <h3 className="text-3xl font-bold mb-4 text-[#b2f249]">A Urgência da Preservação</h3>
                <p className="text-white/80 mb-4">
                    O desmatamento, impulsionado pela agricultura, mineração ilegal e extração de madeira, está empurrando a floresta para um ponto de inflexão. A perda da Amazônia teria consequências catastróficas, acelerando as mudanças climáticas e causando uma extinção em massa.
                </p>
                <p className="text-white/80">
                    Nossa missão é aumentar a conscientização e impulsionar ações concretas para reverter essa tendência. Juntos, podemos garantir que a Amazônia continue a prosperar para as gerações futuras.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;