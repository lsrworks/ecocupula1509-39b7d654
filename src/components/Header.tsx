import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5561993218805&text=Ol%C3%A1%2C+conheci+a+Eco+C%C3%BApula+pelo+site+e+gostaria+de+receber+mais+informa%C3%A7%C3%B5es+e+um+or%C3%A7amento+personalizado+dos+domos+geod%C3%A9sicos.&type=phone_number&app_absent=0";

  const navigation: Array<{ name: string; href: string; external?: boolean }> = [
    { name: 'Início', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Modelos', href: '/produtos' },
    { name: 'Origem', href: '/historia' },
    { name: 'Benefícios', href: '/beneficios' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Fale Conosco', href: whatsappLink, external: true },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container-eco">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display font-bold text-xl text-foreground">Eco Cúpula</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block nav-desktop">
            <div className="flex items-center space-x-2 xl:space-x-4">
              {navigation.map((item) => {
                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-item font-display font-medium px-2 py-2 rounded-lg text-xs xl:text-sm transition-colors text-muted-foreground hover:text-primary hover:bg-eco-green-light/50 whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-item font-display font-medium px-2 py-2 rounded-lg text-xs xl:text-sm transition-colors whitespace-nowrap ${
                      isActive(item.href)
                        ? 'text-primary bg-eco-green-light'
                        : 'text-muted-foreground hover:text-primary hover:bg-eco-green-light/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-eco-green-light/50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden nav-mobile">
            <div className="py-2 space-y-0 bg-background/95 backdrop-blur">
              {navigation.map((item) => {
                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="nav-item block px-4 py-3 text-base font-display font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-eco-green-light/50 border-b border-border/50 last:border-b-0"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`nav-item block px-4 py-3 text-base font-display font-medium transition-colors border-b border-border/50 last:border-b-0 ${
                      isActive(item.href)
                        ? 'text-primary bg-eco-green-light'
                        : 'text-muted-foreground hover:text-primary hover:bg-eco-green-light/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;