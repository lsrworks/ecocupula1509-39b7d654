import { ArrowRight, Calendar, Clock, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Arquitetura', 'Turismo', 'Bem-estar', 'Investimento', 'Sustentabilidade'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Blog <span className="text-eco-gradient">Eco Cúpula</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Conteúdo especializado sobre domos geodésicos, arquitetura sustentável, 
              turismo de experiência e construção ecológica.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12">
          <div className="container-eco">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Artigo em Destaque</h2>
              <div className="card-eco overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-2xl">📰</span>
                        </div>
                        <p className="font-display font-semibold">Artigo em Destaque</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-display font-semibold">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <Button
                        variant="eco"
                        asChild
                      >
                        <Link to={`/blog/${featuredPost.slug}`}>
                          Ler Artigo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {searchTerm || selectedCategory !== 'Todos' ? 'Resultados da Busca' : 'Artigos Recentes'}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-6">
                  Nenhum artigo encontrado com os filtros selecionados.
                </p>
                <Button
                  variant="eco-outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Todos');
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="card-eco overflow-hidden group">
                    <div className="relative h-48 bg-gradient-to-br from-primary to-accent">
                      <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-lg">📖</span>
                          </div>
                          <p className="text-sm font-display">{post.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-eco-green-light text-primary px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-primary font-display font-semibold text-sm hover:text-accent transition-colors group"
                        >
                          Ler mais
                          <ArrowRight className="ml-1 h-3 w-3 inline group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="section-padding">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Interessado em Domos Geodésicos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Se nosso conteúdo despertou seu interesse, que tal conversar com nossos 
              especialistas sobre seu projeto? Oferecemos consultoria gratuita e 
              orçamentos personalizados.
            </p>
            <Button
              variant="whatsapp"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com nossa equipe
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;