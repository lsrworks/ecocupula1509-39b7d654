import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Modelos', href: '/produtos' },
    { name: 'Origem', href: '/historia' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Benefícios', href: '/beneficios' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-eco-gray-dark text-white">
      <div className="container-eco">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-xl">Eco Cúpula</span>
            </div>
            <p className="text-eco-gray-medium mb-6 max-w-md">
              Especialistas em Domos Geodésicos para turismo de experiência, arquitetura sustentável e construções inovadoras. 
              Transformamos sonhos em realidade através da geometria sagrada e design sustentável.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-eco-green hover:bg-eco-green-hover rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-eco-green hover:bg-eco-green-hover rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-eco-gray-medium hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-eco-gray-medium hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-eco-gray-medium/30 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-eco-gray-medium">Brasília - DF, Brasil</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a 
                href="mailto:contato@ecocupula.com.br" 
                className="text-eco-gray-medium hover:text-white transition-colors"
              >
                contato@ecocupula.com.br
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-eco-gray-medium hover:text-white transition-colors"
              >
                (61) 99197-0287
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-eco-gray-medium/30 py-6">
          <div className="text-center">
            <p className="text-eco-gray-medium text-sm">
              © 2025 Eco Cúpula. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;