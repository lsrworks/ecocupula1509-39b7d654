import { ArrowRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é exatamente um domo geodésico?",
      answer: "Um domo geodésico é uma estrutura arquitetônica baseada em geometria esférica, composta por uma rede de triângulos que se conectam para formar uma superfície curva. Esta forma distribui uniformemente as cargas estruturais, criando uma construção extremamente resistente e eficiente energeticamente. Os domos são ideais para hospedagens diferenciadas, espaços de eventos e projetos de turismo sustentável."
    },
    {
      question: "Qual a resistência dos domos geodésicos a ventos fortes?",
      answer: "Os domos geodésicos são excepcionalmente resistentes a ventos fortes devido à sua forma aerodinâmica e distribuição uniforme de cargas. Nossos domos são projetados para resistir a ventos de até 200 km/h, superando a maioria das construções convencionais. A estrutura geodésica não apresenta cantos ou superfícies planas que possam criar turbulência, tornando-a naturalmente mais resistente a intempéries."
    },
    {
      question: "Qual a durabilidade esperada de um domo geodésico?",
      answer: "Com manutenção adequada, nossos domos geodésicos têm vida útil de mais de 30 anos. Utilizamos materiais de alta qualidade, incluindo estrutura metálica tratada contra corrosão e coberturas resistentes a UV. A geometria da estrutura distribui uniformemente as cargas, reduzindo o desgaste e aumentando significativamente a durabilidade comparada a construções convencionais."
    },
    {
      question: "Como funciona o isolamento térmico e acústico?",
      answer: "Os domos oferecem isolamento superior devido à sua forma esférica, que minimiza a área de superfície exposta. Utilizamos sistemas de isolamento térmico multicamadas e, na versão premium, vidros duplos e isolamento acústico especializado. A geometria circular também contribui naturalmente para o isolamento acústico, criando ambientes silenciosos e confortáveis mesmo em locais com ruído externo."
    },
    {
      question: "Em que tipos de terreno os domos podem ser instalados?",
      answer: "Os domos geodésicos são versáteis e podem ser instalados em diversos tipos de terreno: plano, inclinado, rochoso ou arenoso. Não necessitam de fundações complexas como construções tradicionais, podendo ser instalados sobre sapatas, pilotis ou sistemas de fundação simplificados. Esta flexibilidade permite aproveitamento de terrenos antes considerados inadequados para construção."
    },
    {
      question: "Quanto tempo leva para construir e instalar um domo?",
      answer: "O tempo de instalação varia conforme o modelo e acabamento escolhido. Domos básicos podem ser instalados em 3-5 dias, enquanto modelos premium com acabamentos completos levam de 7-14 dias. Este tempo é significativamente menor que construções convencionais, permitindo retorno mais rápido do investimento e menor impacto no local de instalação."
    },
    {
      question: "Qual a frequência de manutenção necessária?",
      answer: "Os domos geodésicos requerem manutenção mínima. Recomendamos inspeções anuais da estrutura, limpeza semestral da cobertura e verificação das vedações. A geometria da estrutura facilita a autolimpeza pela chuva e reduz acúmulo de detritos. Comparado a construções convencionais, a manutenção é até 70% menor, representando economia significativa a longo prazo."
    },
    {
      question: "É possível personalizar o design e layout interno?",
      answer: "Absolutamente! Cada projeto da Eco Cúpula é personalizado conforme as necessidades do cliente. Oferecemos desde acabamentos básicos até versões premium com interiores completos, incluindo banheiros, cozinhas, mezaninos, decks externos e sistemas de climatização. Nossos arquitetos trabalham em conjunto com você para criar o domo ideal para seu projeto."
    },
    {
      question: "Vocês fazem projetos especiais ou sob medida?",
      answer: "Sim, desenvolvemos projetos especiais e sob medida para necessidades específicas. Já criamos domos para restaurantes, spas, escritórios, estúdios, centros de eventos e projetos corporativos. Nossa equipe técnica adapta dimensões, acabamentos e funcionalidades para atender perfeitamente aos requisitos de cada cliente e projeto."
    },
    {
      question: "Como funciona para usar o domo no Airbnb?",
      answer: "Os domos geodésicos são perfeitos para Airbnb e plataformas de hospedagem! Oferecemos consultoria específica para projetos de locação, incluindo layouts otimizados para hóspedes, acabamentos adequados ao uso intensivo e documentação necessária para licenciamento. Muitos clientes relatam taxas de ocupação acima de 85% e possibilidade de cobrar preços premium devido à experiência única oferecida."
    },
    {
      question: "Qual o investimento necessário para ter um domo?",
      answer: "O investimento varia conforme modelo, acabamento e personalização desejada. Domos básicos têm custo inicial menor que construções convencionais equivalentes, enquanto versões premium oferecem relação custo-benefício excepcional considerando a durabilidade e eficiência energética. Fornecemos orçamentos detalhados e personalizados. Entre em contato para receber uma proposta específica para seu projeto."
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
              className="btn-eco group"
            >
              Fale com Nossa Equipe
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-eco text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Transforme sua Ideia em Realidade
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e receba todas as informações 
            para começar seu projeto de domo geodésico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-eco-gray-light px-12 py-5 rounded-xl font-display font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;