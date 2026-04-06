import { ArrowRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const whatsappLink = "https://wa.me/5561993218805?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é exatamente um domo geodésico?",
      answer: "Uma estrutura arquitetônica baseada em geometria esférica, composta por triângulos interligados. Esta forma distribui uniformemente as cargas, criando uma construção resistente e eficiente energeticamente, ideal para hospedagens e turismo sustentável."
    },
    {
      question: "Qual a resistência dos domos geodésicos a ventos fortes?",
      answer: "Projetados para resistir a ventos de até 200 km/h. A forma aerodinâmica e distribuição uniforme de cargas tornam os domos naturalmente mais resistentes que construções convencionais."
    },
    {
      question: "Qual a durabilidade esperada de um domo geodésico?",
      answer: "Com manutenção adequada, mais de 30 anos. Usamos materiais de alta qualidade, estrutura metálica tratada contra corrosão e coberturas resistentes a UV."
    },
    {
      question: "Como funciona o isolamento térmico e acústico?",
      answer: "A forma esférica minimiza a área de superfície exposta. Usamos isolamento térmico multicamadas e, na versão premium, vidros duplos e isolamento acústico especializado."
    },
    {
      question: "Em que tipos de terreno os domos podem ser instalados?",
      answer: "Podem ser instalados em terreno plano, inclinado, rochoso ou arenoso. Não necessitam de fundações complexas, podendo usar sapatas, pilotis ou sistemas simplificados."
    },
    {
      question: "Quanto tempo leva para construir um domo?",
      answer: "O tempo de construção varia entre 15 e 60 dias, dependendo do modelo e das condições do local."
    },
    {
      question: "Qual a frequência de manutenção necessária?",
      answer: "Manutenção mínima: inspeções anuais, limpeza semestral da cobertura e verificação das vedações. Até 70% menos manutenção que construções convencionais."
    },
    {
      question: "É possível personalizar o design e layout interno?",
      answer: "Sim! Oferecemos desde acabamentos básicos até versões premium completas: banheiros, cozinhas, mezaninos, decks e climatização. Nossos arquitetos criam o projeto ideal para você."
    },
    {
      question: "Vocês fazem projetos especiais ou sob medida?",
      answer: "Sim, desenvolvemos projetos personalizados para restaurantes, spas, escritórios, estúdios, eventos e projetos corporativos. Adaptamos dimensões, acabamentos e funcionalidades às suas necessidades."
    },
    {
      question: "Como funciona para usar o domo no Airbnb?",
      answer: "Oferecemos consultoria específica para locação: layouts otimizados, acabamentos adequados e documentação para licenciamento. Clientes relatam ocupação acima de 85% e possibilidade de preços premium."
    },
    {
      question: "Qual o investimento necessário para ter um domo?",
      answer: "Varia conforme modelo, acabamento e personalização. Domos básicos têm custo inicial menor que construções convencionais. Entre em contato para receber orçamento personalizado."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Perguntas <span className="text-eco-gradient">Frequentes</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Tire todas suas dúvidas sobre domos geodésicos, desde aspectos técnicos 
              até investimento e retorno financeiro.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card-eco overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-eco-gray-light/50 transition-colors"
                  >
                    <h3 className="text-lg font-display font-semibold pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openItem === index ? (
                        <Minus className="h-5 w-5 text-primary" />
                      ) : (
                        <Plus className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </button>
                  
                  {openItem === index && (
                    <div className="px-8 pb-6">
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe de especialistas está pronta para responder qualquer pergunta 
              específica sobre seu projeto de domo geodésico. Entre em contato e receba 
              orientação personalizada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Consulta Gratuita</h3>
                <p className="text-muted-foreground text-sm">Conversa inicial sem compromisso</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Orçamento Detalhado</h3>
                <p className="text-muted-foreground text-sm">Proposta personalizada completa</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="font-display font-semibold mb-2">Acompanhamento Total</h3>
                <p className="text-muted-foreground text-sm">Suporte desde o projeto até a instalação</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-eco"
            >
              Fale com Nossa Equipe
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQ;