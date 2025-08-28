import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Cloud, Settings, Code, Star, TrendingUp, Users, MessageCircle, Award } from "lucide-react";
import courseData from "../assets/courses.json";
import { Course } from "../lib/types";
import { useState } from "react";
import { CourseDetailsModal } from "@/components/CourseDetailsModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState<Course['details'] | null>(null);

  const handleViewDetails = (details: Course['details']) => {
    setSelectedCourseDetails(details);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourseDetails(null);
  };

  const featuredCourses = courseData
    .filter(course => {
      console.log(`Filtering: ${course.title}, Featured: ${(course as any).featured}`);
      return (course as any).featured;
    })
    .map((course: any) => {
      console.log(`Mapping: ${course.title}`);
      return {
        ...course,
        icon: (
          {
            "Data Science & Analytics": <Database className="w-6 h-6" />,
            "Cloud Engineering (AWS)": <Cloud className="w-6 h-6" />,
            "DevOps Engineering": <Settings className="w-6 h-6" />,
            "Full-Stack Web Development": <Code className="w-6 h-6" />,
            "Data Analysis with R": <Award className="w-6 h-6" />,
            "C Programming Fundamentals": <Code className="w-6 h-6" />,
          }[course.title] || null
        ),
        level: course.level as "Beginner" | "Intermediate" | "Advanced",
      };
    });


  const testimonials = [
    {
      name: "Nabila Aboubakar",
      role: "A-Level Computer Science Student",
      content: "ByteNest's practical approach made complex computer science concepts easy to grasp, helping me excel in my A-levels!",
      
    },
    {
      name: "Achille Njami",
      role: "University Student, Yaoundé",
      content: "As a university student, ByteNest supplemented my studies with real-world skills, making me job-ready before graduation.",
      
    },
    {
      name: "Monique Ekwalla",
      role: "Former Entrepreneur, now Software Developer",
      content: "From a teacher to coding, ByteNest helped me pivot my career with their supportive community and excellent curriculum.",
      
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Mission />
      
      
      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Courses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start your tech journey with our most in-demand programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredCourses.map((course, index) => (
                <CourseCard 
                  key={index} 
                  {...course} 
                  onViewDetails={() => handleViewDetails(course.details)} 
                />
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => window.location.href = '/courses'}
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Real stories from real people who transformed their careers with ByteNest
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mt-4">Enroll in a course today and transform your career.</p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="secondary" 
              className="group/btn"
              onClick={() => window.open("https://wa.me/237654815233", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Request More Info
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <CourseDetailsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        course={selectedCourseDetails} 
      />
    </div>
  );
};

export default Index;
