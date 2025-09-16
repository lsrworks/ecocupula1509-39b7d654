import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-gray-light pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 mx-auto mb-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
          <span className="text-6xl font-display font-bold">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Página Não Encontrada</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="btn-eco">
          <Home className="mr-2 h-5 w-5" />
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
