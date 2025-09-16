import { Users, Award, Leaf, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuemSomos = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustentabilidade",
      description: "Comprometidos com práticas ecológicas e construções que respeitam o meio ambiente."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Qualidade",
      description: "Utilizamos materiais premium e técnicas avançadas para garantir durabilidade excepcional."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inovação",
      description: "Combinamos ancestralidade da geometria sagrada com tecnologia moderna."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalização",
      description: "Cada projeto é único, desenvolvido especificamente para as necessidades do cliente."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Somos a <span className="text-eco-gradient">Eco Cúpula</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Especialistas em Domos Geodésicos que transformam sonhos arquitetônicos 
              em realidade sustentável, combinando inovação, qualidade e respeito pela natureza.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Revolucionar o setor de construção sustentável através dos domos geodésicos, 
                oferecendo soluções arquitetônicas inovadoras que promovem o turismo de 
                experiência e geram retorno financeiro excepcional para nossos clientes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Acreditamos que a geometria sagrada dos domos não apenas cria espaços 
                visualmente impressionantes, mas também promove bem-estar, eficiência 
                energética e uma conexão profunda com a natureza.
              </p>
              <Button variant="eco" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale com Nossa Equipe
                </a>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                    <Leaf className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Construção Sustentável</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios fundamentais que guiam cada projeto e decisão da Eco Cúpula
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-eco p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Equipe Especializada
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe multidisciplinar combina expertise em arquitetura sustentável, 
              engenharia estrutural, design bioclimático e gestão de projetos, garantindo 
              que cada domo geodésico seja executado com excelência técnica e criativa.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Trabalhamos com profissionais qualificados que compartilham nossa paixão 
              por construções sustentáveis e nossa visão de transformar o mercado de 
              turismo de experiência através da inovação arquitetônica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Arquitetos</h3>
                <p className="text-muted-foreground">Especialistas em design sustentável</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Engenheiros</h3>
                <p className="text-muted-foreground">Garantia estrutural e segurança</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Gestores</h3>
                <p className="text-muted-foreground">Execução precisa dos projetos</p>
              </div>
            </div>

            <Button variant="eco" asChild>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Converse com Nossos Especialistas
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;