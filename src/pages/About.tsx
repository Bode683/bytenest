import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Award, CheckCircle } from "lucide-react";
import teamData from "../assets/team.json";

const About = () => {
  

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in tech education and career outcomes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusivity",
      description: "Tech education should be accessible to everyone, regardless of background."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Empowering African talent to compete and lead on the global tech stage."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously evolving our curriculum with the latest industry trends."
    }
  ];

  const team = teamData;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About ByteNest
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Empowering the next generation of African tech leaders through 
              world-class training programs and career development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To bridge the global tech skills gap by providing world-class, accessible, 
                and practical technology education that transforms lives and builds careers 
                across Africa and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Industry professionals committed to transforming tech education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((team, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {team.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{team.name}</h3>
                        <p className="text-primary font-medium mb-2">{team.role}</p>
                        <p className="text-sm text-muted-foreground">{team.background}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{team.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {team.credentials.map((credential, credIndex) => (
                        <Badge key={credIndex} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default About;