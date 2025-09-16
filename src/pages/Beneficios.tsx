import { ArrowRight, Shield, Zap, Heart, Leaf, DollarSign, Clock, Award, Users } from 'lucide-react';

const Beneficios = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const mainBenefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Construção Ágil",
      description: "Estrutura básica montada em alguns dias. Projeto completo com acabamentos: 15 a 60 dias, conforme modelo e personalização."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Economia de Custos Iniciais",
      description: "Redução significativa nos custos de construção comparado a edificações convencionais, com materiais otimizados e processos eficientes."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Vão Interno Totalmente Livre",
      description: "Espaço interno sem pilares ou obstruções, permitindo layouts flexíveis e maximizando o aproveitamento da área construída."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Resistência Excepcional",
      description: "Estrutura geodésica distribui forças uniformemente, oferecendo resistência superior a ventos fortes, terremotos e intempéries."
    }
  ];

  const wellnessBenefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Bem-estar e Acolhimento",
      description: "A geometria circular promove sensações de harmonia, reduzindo stress e criando ambientes naturalmente acolhedores e terapêuticos."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Eficiência Energética Superior",
      description: "Forma esférica otimiza circulação de ar e distribuição de temperatura, reduzindo drasticamente custos com climatização."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eficiência Acústica",
      description: "Design geodésico proporciona isolamento acústico natural, criando ambientes silenciosos e privados mesmo em locais movimentados."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Estética Arquitetônica Única",
      description: "Design icônico e diferenciado que se destaca na paisagem, atraindo visitantes e garantindo alta ocupação para hospedagens."
    }
  ];

  const investmentHighlights = [
    {
      metric: "ROI Superior",
      description: "Retorno sobre investimento acima da média do mercado de hospedagem tradicional"
    },
    {
      metric: "Alta Ocupação",
      description: "Hospedagens únicas atraem mais hóspedes e permitem preços premium"
    },
    {
      metric: "Baixa Manutenção",
      description: "Estrutura resistente requer manutenção mínima ao longo dos anos"
    },
    {
      metric: "Sustentabilidade",
      description: "Construção eco-friendly atrai público consciente e premium"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Propriedades e <span className="text-eco-gradient">Benefícios</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Descubra as vantagens únicas dos domos geodésicos que os tornam 
              a escolha ideal para projetos de turismo sustentável e arquitetura inovadora.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vantagens Construtivas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Características estruturais que fazem dos domos geodésicos uma solução superior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainBenefits.map((benefit, index) => (
              <div key={index} className="card-eco p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Benefits */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Bem-estar e Eficiência
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Como os domos geodésicos promovem conforto, saúde e sustentabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessBenefits.map((benefit, index) => (
              <div key={index} className="card-eco p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-accent text-primary-foreground rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Superioridade Técnica
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Shield className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Resistência a Desastres Naturais</h3>
                    <p className="text-muted-foreground">Estrutura geodésica distribui cargas uniformemente, oferecendo resistência excepcional a terremotos, furacões e cargas de neve.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Zap className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Eficiência Energética de 30-50%</h3>
                    <p className="text-muted-foreground">Forma esférica reduz área de superfície exposta, minimizando perdas térmicas e custos de climatização.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                    <Clock className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">Tempo de Construção</h3>
                    <p className="text-muted-foreground">Estrutura básica montada em alguns dias. Projeto completo com acabamentos: 15 a 60 dias, conforme modelo e personalização.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Technical Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="technical" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="5" cy="5" r="1" fill="white"/>
                        <line x1="0" y1="5" x2="10" y2="5" stroke="white" strokeWidth="0.2"/>
                        <line x1="5" y1="0" x2="5" y2="10" stroke="white" strokeWidth="0.2"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#technical)" />
                  </svg>
                </div>
                <div className="text-center text-primary-foreground relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <Award className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Engenharia Avançada</h3>
                  <p className="text-sm opacity-90 mt-2">Máxima eficiência estrutural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vantagens de Investimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benefícios financeiros que fazem dos domos geodésicos um investimento inteligente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <DollarSign className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-primary">{highlight.metric}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Advantages */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Domos vs. Construção Tradicional
              </h2>
              <p className="text-lg text-muted-foreground">
                Comparativo de vantagens dos domos geodésicos
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-4 font-display font-semibold">Aspecto</th>
                    <th className="text-center py-4 font-display font-semibold text-primary">Domos Geodésicos</th>
                    <th className="text-center py-4 font-display font-semibold text-muted-foreground">Construção Tradicional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 font-medium">Tempo de Construção</td>
                    <td className="py-4 text-center text-primary">15-60 dias</td>
                    <td className="py-4 text-center text-muted-foreground">3-12 meses</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Eficiência Energética</td>
                    <td className="py-4 text-center text-primary">30-50% mais eficiente</td>
                    <td className="py-4 text-center text-muted-foreground">Padrão</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Resistência Estrutural</td>
                    <td className="py-4 text-center text-primary">Superior</td>
                    <td className="py-4 text-center text-muted-foreground">Variável</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Impacto Ambiental</td>
                    <td className="py-4 text-center text-primary">Mínimo</td>
                    <td className="py-4 text-center text-muted-foreground">Alto</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Custo Inicial</td>
                    <td className="py-4 text-center text-primary">Menor</td>
                    <td className="py-4 text-center text-muted-foreground">Maior</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-eco text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Experimente as Vantagens dos Domos Geodésicos
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite um projeto personalizado e descubra como os domos geodésicos 
            podem transformar seu investimento em uma experiência única e lucrativa.
          </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-eco-gray-light px-12 py-5 rounded-xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Descubra como ter seu Domo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </section>
    </div>
  );
};

export default Beneficios;