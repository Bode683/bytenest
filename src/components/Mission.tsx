import { Target, Users, Award, Lightbulb } from "lucide-react";

const Mission = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals across Africa with cutting-edge tech skills that open doors to global opportunities and drive innovation in their communities."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Join hundreds of learners from Cameroon, Nigeria, and beyond who are transforming their careers through our comprehensive training programs."
    },
    {
      icon: Award,
      title: "Our Excellence",
      description: "Hands-on projects that prepare you for real-world challenges in today's competitive tech landscape."
    },
    {
      icon: Lightbulb,
      title: "Our Innovation",
      description: "Stay ahead with the latest technologies like AI, taught by experienced professionals."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Why Choose ByteNest?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're on a mission to take you from beginner to advanced, by providing personalised training that turns ambitious learners into industry-ready professionals. Every moment with us brings you closer to becoming fluent in your area of interest.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {missionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default Mission;
