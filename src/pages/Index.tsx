import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dome-new.webp';
import domeModelsImage from '@/assets/dome-models.jpg';

const Index = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const benefits = [
    "Construção rápida e sustentável",
    "Alta resistência a intempéries",
    "Excelente ROI para turismo",
    "Design arquitetônico único"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 container-eco text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Domos Geodésicos
            <span className="block text-eco-green-light">para Turismo de Experiência e Investimentos Sustentáveis</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme sua propriedade em uma hospedagem diferenciada com arquitetura sustentável, 
            design único e alto retorno financeiro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero-primary"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Peça um Orçamento
              </a>
            </Button>
            <Button
              variant="hero-outline"
              asChild
            >
              <a href="#modelos">
                Conheça os Modelos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <span className="font-display font-semibold text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Especialistas em 
                <span className="text-eco-gradient block">Arquitetura Sustentável</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Na Eco Cúpula, combinamos inovação, sustentabilidade e design único para criar 
                domos geodésicos que transformam espaços em experiências inesquecíveis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com anos de experiência em arquitetura sustentável, criamos soluções inovadoras 
                que transformam espaços e geram valor para nossos clientes.
              </p>
            </div>
            <div className="relative">
              <img
                src={domeModelsImage}
                alt="Modelos de Domos Geodésicos Eco Cúpula"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-eco text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Pronto para Transformar seu Projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Solicite um orçamento personalizado e descubra como os domos geodésicos 
            podem revolucionar seu investimento em turismo de experiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="eco-cta"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com Nossa Equipe
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;