import { TrendingUp, DollarSign, Calendar, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Investir = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const investmentReasons = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "ROI Superior ao Mercado",
      description: "Retorno sobre investimento 30-50% superior ao de hospedagens convencionais, com payback médio de 2-3 anos.",
      highlight: "Payback: 2-3 anos"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Alta Demanda no Turismo",
      description: "Mercado de glamping cresce 15% ao ano. Hospedagens únicas atraem viajantes dispostos a pagar preços premium.",
      highlight: "Crescimento: 15% ao ano"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Baixos Custos Operacionais",
      description: "Eficiência energética superior e manutenção mínima reduzem drasticamente os custos operacionais mensais.",
      highlight: "Economia: até 50%"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Fácil Manutenção",
      description: "Estrutura resistente e design inteligente requerem mínima manutenção, maximizando lucros a longo prazo.",
      highlight: "Manutenção: -70%"
    }
  ];

  const marketData = [
    {
      metric: "R$ 2.1 bilhões",
      description: "Valor do mercado de glamping no Brasil em 2024"
    },
    {
      metric: "85%+",
      description: "Taxa de ocupação média de domos geodésicos"
    },
    {
      metric: "R$ 300-800",
      description: "Diária média cobrada por hospedagens em domos"
    },
    {
      metric: "200%+",
      description: "Crescimento na busca por 'glamping' no Google"
    }
  ];

  const advantages = [
    {
      title: "Instalação Rápida",
      description: "Comece a receber hóspedes em questão de semanas, não meses"
    },
    {
      title: "Diferencial Competitivo",
      description: "Design único garante destaque em plataformas como Airbnb"
    },
    {
      title: "Sustentabilidade",
      description: "Atraia público consciente que valoriza turismo responsável"
    },
    {
      title: "Versatilidade",
      description: "Use para hospedagem, eventos, escritórios ou projetos pessoais"
    },
    {
      title: "Durabilidade",
      description: "Investimento de longo prazo com vida útil de 30+ anos"
    },
    {
      title: "Baixo Impacto",
      description: "Construção ecológica que preserva o meio ambiente"
    }
  ];

  const testimonial = {
    name: "Ricardo Mendes",
    role: "Proprietário de Eco Resort",
    text: "Nossos domos geodésicos têm 100% de ocupação há 8 meses consecutivos. O investimento se pagou em menos de 2 anos e agora é pura rentabilidade. Os hóspedes ficam encantados com a experiência única!",
    rating: 5
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Por que <span className="text-eco-gradient">Investir</span> em um Domo?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Descubra como os domos geodésicos se tornaram o investimento mais inteligente 
              no setor de turismo sustentável e hospedagem diferenciada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="eco" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simular Meu Investimento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Reasons */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              4 Razões Para Investir Agora
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vantagens financeiras que fazem dos domos geodésicos o investimento do futuro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentReasons.map((reason, index) => (
              <div key={index} className="card-eco p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-display font-semibold">{reason.title}</h3>
                      <span className="text-sm font-display font-semibold text-primary bg-eco-green-light px-3 py-1 rounded-full">
                        {reason.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Dados do Mercado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Números que comprovam o potencial de investimento em domos geodésicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <DollarSign className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{data.metric}</h3>
                <p className="text-muted-foreground">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto">
            <div className="card-eco p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                "{testimonial.text}"
              </blockquote>
              <div>
                <p className="font-display font-semibold text-lg">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vantagens Exclusivas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Benefícios únicos que apenas os domos geodésicos podem oferecer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="card-eco p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Calcule seu Retorno
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com ocupação média de 85% e diárias entre R$ 300-800, um domo geodésico 
                pode gerar receita mensal de R$ 15.000 a R$ 40.000, dependendo da localização 
                e padrão do acabamento.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-display font-medium">Investimento Inicial</span>
                  <span className="text-primary font-semibold">R$ 80.000 - 200.000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-display font-medium">Receita Mensal Média</span>
                  <span className="text-primary font-semibold">R$ 15.000 - 40.000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-display font-medium">Payback Estimado</span>
                  <span className="text-primary font-semibold">2 - 3 anos</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-display font-medium">ROI Anual</span>
                  <span className="text-primary font-semibold text-xl">30% - 50%</span>
                </div>
              </div>
              <Button variant="eco" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Análise Personalizada
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Chart Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="chart" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="20" x2="20" y2="0" stroke="white" strokeWidth="0.5"/>
                        <circle cx="10" cy="10" r="1" fill="white"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#chart)" />
                  </svg>
                </div>
                <div className="text-center text-primary-foreground relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">ROI Inteligente</h3>
                  <p className="text-sm opacity-90 mt-2">Investimento de alto retorno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-eco text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Comece seu Investimento Hoje
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            O mercado de glamping está em plena expansão. Seja pioneiro na sua região 
            e garante uma fatia deste mercado bilionário com os domos geodésicos da Eco Cúpula.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="eco-cta" asChild>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero Investir Agora
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investir;