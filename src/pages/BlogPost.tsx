import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { getBlogPost, getRecentPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const whatsappLink = "https://wa.me/5561991970287?text=Ol%C3%A1%2C%20conheci%20a%20Eco%20C%C3%BApula%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento%20personalizado%20dos%20domos%20geod%C3%A9sicos.";
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(slug);
  const relatedPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (post) {
      // Update document title and meta tags for SEO
      document.title = post.seoTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seoDescription);
      }
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
    }
  };

  return (
    <div className="pt-16">
      {/* Article Header */}
      <section className="section-padding bg-eco-gray-light">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Início</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-display font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime} de leitura
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Share2 className="h-4 w-4" />
                Compartilhar
              </button>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Article Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 text-sm bg-eco-green-light text-primary px-3 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>')
                    .replace(/<p><h/g, '<h')
                    .replace(/<\/h(\d)><\/p>/g, '</h$1>')
                    .replace(/<p><ul>/g, '<ul>')
                    .replace(/<\/ul><\/p>/g, '</ul>')
                    .replace(/<p><li>/g, '<li>')
                    .replace(/<\/li><\/p>/g, '</li>')
                    .replace(/<p>---<\/p>/g, '<hr class="my-8 border-border" />')
                }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Gostou do Artigo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Se você tem interesse em domos geodésicos, nossa equipe está pronta 
              para ajudar você a transformar seu projeto em realidade.
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-eco-gray-light">
          <div className="container-eco">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Artigos Relacionados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="card-eco overflow-hidden group">
                    <div className="relative h-48 bg-gradient-to-br from-primary to-accent">
                      <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-lg">📖</span>
                          </div>
                          <p className="text-sm font-display">{relatedPost.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(relatedPost.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                        <Button
                          variant="link"
                          size="sm"
                          asChild
                        >
                          <Link to={`/blog/${relatedPost.slug}`}>
                            Ler artigo
                          </Link>
                        </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 border-t border-border">
        <div className="container-eco">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link
              to="/blog"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o Blog
            </Link>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Share2 className="h-4 w-4" />
              <button
                onClick={handleShare}
                className="hover:text-primary transition-colors"
              >
                Compartilhar artigo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;