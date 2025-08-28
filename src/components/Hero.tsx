import { Button } from "@/components/ui/button";
import { MessageCircle, NotebookText, ArrowRight } from "lucide-react";
import { useCallback, useMemo } from "react";
import heroImageSrc from "@/assets/hero-image.jpg";

// Constants for better maintainability
const CONTACT_LINKS = {
  whatsapp: "https://wa.me/+237654815233?text=Hi! I want to learn tech with ByteNest",
  courses: "/courses"
} as const;

const TRUSTED_COUNTRIES = [
  { flag: "🇨🇲", name: "Cameroon" },
  { flag: "🇳🇬", name: "Nigeria" },
] as const;

// Floating elements configuration
const FLOATING_ELEMENTS = [
  { 
    id: 'float-1',
    className: "top-20 left-10 w-20 h-20 bg-accent/20",
    delay: '0s'
  },
  { 
    id: 'float-2',
    className: "bottom-32 right-16 w-16 h-16 bg-secondary/20",
    delay: '2s'
  },
  { 
    id: 'float-3',
    className: "top-1/2 left-20 w-12 h-12 bg-primary/20",
    delay: '4s'
  }
] as const;

interface HeroProps {
  heroImage?: string;
  className?: string;
  onWhatsAppClick?: () => void;
  onCoursesClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ 
  heroImage = heroImageSrc,
  className = "",
  onWhatsAppClick,
  onCoursesClick 
}) => {
  // Memoized handlers for better performance
  const handleWhatsAppClick = useCallback(() => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    } else {
      window.open(CONTACT_LINKS.whatsapp, "_blank", "noopener,noreferrer");
    }
  }, [onWhatsAppClick]);

  const handleCoursesClick = useCallback(() => {
    if (onCoursesClick) {
      onCoursesClick();
    } else {
      window.location.href = CONTACT_LINKS.courses;
    }
  }, [onCoursesClick]);

  // Memoized background style for performance
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${heroImage})`
  }), [heroImage]);

  // Memoized floating elements
  const floatingElements = useMemo(() => 
    FLOATING_ELEMENTS.map((element) => (
      <div
        key={element.id}
        className={`absolute ${element.className} rounded-full animate-float`}
        style={{ animationDelay: element.delay }}
        aria-hidden="true"
      />
    )), []
  );

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${className}`}
      role="banner"
      aria-label="Hero section"
    >
      {/* Background layers with better semantic structure */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/90 z-10" />
        
        {/* Hero image background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={backgroundStyle}
          role="img"
          aria-label="ByteNest tech training background"
        />
        
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20 z-20" />
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 z-30" aria-hidden="true">
        {floatingElements}
      </div>

      {/* Main content */}
      <div className="relative z-40 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust badge */}
          <div 
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 shadow-lg animate-pulse-glow"
            role="img"
            aria-label="Leading tech training platform badge"
          >
            ✨ Leading Tech Training Platform
          </div>

          {/* Main heading with better typography hierarchy */}
          <header>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Master{" "}
              <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Tech Skills
              </span>{" "}
              That Build Careers
            </h1>
          </header>

          {/* Enhanced subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Transform your future with hands-on training in{" "}
            <span className="font-medium text-accent-light">Data Analysis</span>,{" "}
            <span className="font-medium text-secondary-light">Graphics Design</span>, 
            <span className="font-medium text-secondary-light">Cloud Engineering</span>,{" "}
            <span className="font-medium text-accent-light">Data Science</span>,{" "}and{" "}
            <span className="font-medium text-accent-light">Web Development</span>.
            <br className="hidden md:block" />
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 px-8 py-4 text-lg font-semibold group transform hover:scale-105 active:scale-95"
              aria-label="Start learning now via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
              Start Learning Now
              <ArrowRight 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                aria-hidden="true" 
              />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleCoursesClick}
              className="border-primary-dark/70 text-primary-dark/90 hover:bg-primary-dark/30 hover:border-primary-dark/70 backdrop-blur-md px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg"
              aria-label="View all programs"
            >
              <NotebookText className="w-5 h-5 mr-2" aria-hidden="true" />
              View All Programs
            </Button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="pt-12 text-white/70">

            <div 
              className="flex flex-wrap justify-center gap-6 text-sm"
              role="list"
              aria-label="Countries where our students are located"
            >
              {TRUSTED_COUNTRIES.map((country, index) => (
                <span 
                  key={country.name}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors duration-200"
                  role="listitem"
                >
                  <span role="img" aria-label={`${country.name} flag`}>
                    {country.flag}
                  </span>
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;