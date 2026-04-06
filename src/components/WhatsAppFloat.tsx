import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5561993218805&text=Ol%C3%A1%2C+conheci+a+Eco+C%C3%BApula+pelo+site+e+gostaria+de+receber+mais+informa%C3%A7%C3%B5es+e+um+or%C3%A7amento+personalizado+dos+domos+geod%C3%A9sicos.&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppFloat;