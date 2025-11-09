import { Check, ArrowRight, Home, Users, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import domeModelsImage from '@/assets/dome-models.jpg';
import domeInteriorImage from '@/assets/dome-interior.jpg';
import woodenDomeNature from '@/assets/wooden-dome-nature.jpg';

const Produtos = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const domeModels = [
    {
      name: "Domo Compacto",
      diameter: "6m",
      height: "3.5m",
      floorArea: "28m²",
      capacity: "2-4 pessoas",
      mezzanine: "Opcional",
      icon: <Home className="h-6 w-6" />,
      popular: false
    },
    {
      name: "Domo Família",
      diameter: "8m",
      height: "4.5m",
      floorArea: "50m²",
      capacity: "4-6 pessoas",
      mezzanine: "Incluído",
      icon: <Users className="h-6 w-6" />,
      popular: true
    },
    {
      name: "Domo Premium",
      diameter: "10m",
      height: "5.8m",
      floorArea: "78m²",
      capacity: "6-8 pessoas",
      mezzanine: "Duplo",
      icon: <Maximize className="h-6 w-6" />,
      popular: false
    }
  ];

  const finishings = [
    {
      type: "Acabamento Básico",
      description: "Estrutura completa pronta para locação padrão",
      features: [
        "Estrutura premium",
        "Cobertura impermeável",
        "Janelas básicas",
        "Piso preparado",
        "Instalações básicas"
      ]
    },
    {
      type: "Acabamento Premium",
      description: "Personalização completa para máximo conforto",
      features: [
        "Interiores personalizados",
        "Decks externos",
        "Banheiros completos",
        "Vidros duplos",
        "Isolamento acústico",
        "Instalações completas",
        "Mezanino personalizado"
      ],
      premium: true
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Banner Section */}
      <section 
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-background"
      >
        <div className="container-eco text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Nossos <span className="text-primary">Modelos</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Descubra nossa linha completa de domos geodésicos de madeira, cada um projetado 
            para proporcionar experiências únicas em harmonia com a natureza.
          </p>
        </div>
      </section>

      {/* Models Comparison */}
      <section id="modelos" className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Escolha o Modelo Ideal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada modelo foi desenvolvido para atender diferentes necessidades e capacidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {domeModels.map((model, index) => (
              <div key={index} className={`card-eco p-8 relative ${model.popular ? 'ring-2 ring-primary' : ''}`}>
                {model.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-display font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 mx-auto">
                  {model.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-center mb-6">{model.name}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-display font-medium">Diâmetro</span>
                    <span className="text-primary font-semibold">{model.diameter}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-display font-medium">Altura</span>
                    <span className="text-primary font-semibold">{model.height}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-display font-medium">Área do Piso</span>
                    <span className="text-primary font-semibold">{model.floorArea}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-display font-medium">Capacidade</span>
                    <span className="text-primary font-semibold">{model.capacity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-display font-medium">Mezanino</span>
                    <span className="text-primary font-semibold">{model.mezzanine}</span>
                  </div>
                </div>
                
                <Button
                  variant={model.popular ? 'eco' : 'eco-outline'}
                  className="w-full"
                  asChild
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Cada projeto é único.</strong> Todos os domos podem ser personalizados 
              conforme suas necessidades específicas.
            </p>
            <Button variant="eco" size="responsive" asChild>
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

      {/* Finishings */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Opções de Acabamento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o nível de acabamento que melhor atende ao seu projeto e orçamento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {finishings.map((finishing, index) => (
              <div key={index} className={`card-eco p-8 ${finishing.premium ? 'ring-2 ring-primary' : ''}`}>
                {finishing.premium && (
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-display font-semibold mb-4">
                    Premium
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-bold mb-4">{finishing.type}</h3>
                <p className="text-muted-foreground mb-6">{finishing.description}</p>
                
                <ul className="space-y-3">
                  {finishing.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Produtos;