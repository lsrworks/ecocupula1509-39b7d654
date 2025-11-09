import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Produtos from "./pages/Produtos";
import Historia from "./pages/Historia";
import Beneficios from "./pages/Beneficios";
import FAQ from "./pages/FAQ";
import Investir from "./pages/Investir";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/investir" element={<Investir />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
