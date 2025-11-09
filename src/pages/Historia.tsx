import { ArrowRight, Clock, Globe, Lightbulb, TrendingUp } from 'lucide-react';

const Historia = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const timeline = [
    {
      period: "Ancestralidade",
      title: "Origens Milenares",
      description: "A geometria sagrada dos domos remonta a civilizações antigas que reconheciam o poder das formas circulares e a harmonia com o cosmos.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      period: "1919",
      title: "Primeira Patente",
      description: "O engenheiro alemão Walther Bauersfeld desenvolveu o primeiro domo geodésico para abrigar um planetário, estabelecendo as bases da engenharia moderna de domos.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      period: "1947",
      title: "Revolução de Fuller",
      description: "Buckminster Fuller popularizou e aperfeiçoou os domos geodésicos, criando estruturas mais eficientes e sustentáveis que se tornaram ícones arquitetônicos.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      period: "Atualidade",
      title: "Era do Turismo Sustentável",
      description: "Os domos geodésicos se tornaram símbolos do turismo de experiência, oferecendo hospedagens únicas que conectam pessoas com a natureza.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const applications = [
    {
      title: "Disney World",
      description: "O icônico Spaceship Earth é um dos domos geodésicos mais famosos do mundo, recebendo milhões de visitantes anualmente."
    },
    {
      title: "Projeto Éden",
      description: "Na Inglaterra, o complexo Eden Project utiliza domos geodésicos gigantes para criar biomas artificiais únicos no mundo."
    },
    {
      title: "Expo Montreal",
      description: "O pavilhão dos EUA na Expo 67 foi um marco arquitetônico que popularizou os domos geodésicos globalmente."
    },
    {
      title: "Glamping Mundial",
      description: "Atualmente, milhares de domos geodésicos operam como hospedagens premium em todos os continentes."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              A História dos <span className="text-eco-gradient">Domos Geodésicos</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Descubra como uma forma geométrica ancestral se tornou símbolo da 
              arquitetura sustentável moderna e revolucionou o turismo de experiência.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Evolução Histórica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma jornada através do tempo revelando como os domos geodésicos evoluíram 
              de conceitos ancestrais para inovações modernas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-full md:w-48 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-center font-display font-semibold">
                    {item.period}
                  </div>
                </div>
                
                <div className="flex-1 card-eco p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Geometric Principles */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Geometria Sagrada
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Os domos geodésicos são baseados em princípios de geometria sagrada que 
                remontam a civilizações antigas. Estas formas não são apenas esteticamente 
                belas, mas também estruturalmente superiores.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A distribuição uniforme de forças através da estrutura geodésica permite 
                criar espaços amplos sem pilares internos, maximizando o uso do espaço 
                enquanto minimiza o uso de materiais.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Além disso, estudos demonstram que as formas circulares e a geometria 
                dos domos promovem sensações de bem-estar, harmonia e conexão com a natureza, 
                criando ambientes terapêuticos únicos.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-eco"
              >
                Explore Nossos Domos
              </a>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="geodesic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <polygon points="10,2 18,15 2,15" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#geodesic)" />
                  </svg>
                </div>
                <div className="text-center text-primary-foreground relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <Globe className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Harmonia Perfeita</h3>
                  <p className="text-sm opacity-90 mt-2">Geometria + Natureza</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Era */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              A Era Moderna dos Domos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Hoje, os domos geodésicos representam a convergência perfeita entre tradição 
              ancestral e inovação moderna. No setor de turismo, eles se tornaram símbolos 
              de sustentabilidade, exclusividade e conexão com a natureza.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O mercado de glamping, avaliado em bilhões de dólares globalmente, tem nos 
              domos geodésicos uma de suas principais atrações, oferecendo aos investidores 
              oportunidades únicas de retorno financeiro e impacto positivo no meio ambiente.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Na Eco Cúpula, honramos esta rica história enquanto projetamos o futuro da 
              arquitetura sustentável, criando domos que não são apenas estruturas, mas 
              experiências transformadoras.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-eco"
            >
              Faça Parte Desta História
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Historia;