import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { Database, Cloud, Settings, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CourseDetailsModal } from "@/components/CourseDetailsModal";
import faqData from "../assets/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import courseData from "../assets/courses.json";
import { Course } from "../lib/types";

const Courses = () => {
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

  const courses = courseData.map((course: any) => ({
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
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Diverse Course Catalog
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Unlock your potential with our industry-leading tech courses. Find the perfect program to kickstart or advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Browse Our Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Browse Our Courses</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Button variant="outline" className="rounded-full">All</Button>
                <Button variant="secondary" className="rounded-full">Data Science</Button>
                <Button variant="secondary" className="rounded-full">Cloud Engineering</Button>
                <Button variant="secondary" className="rounded-full">DevOps</Button>
                <Button variant="secondary" className="rounded-full">Web Development</Button>
              </div>
              {/* Search Bar */}
              <Input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full sm:w-auto flex-grow"
              />
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  {...course}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* How it Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why It Works</h2>
            <p className="text-lg text-muted-foreground mt-4">Wondering why our teaching methods work even for people with no tech background? </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-muted-foreground">We keep our classes small for personalized attention and effective teaching.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
              <p className="text-muted-foreground">Apply your knowledge through practical, real-world projects and case studies.</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="w-16 h-16 bg-info/10 text-info rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Certificates</h3>
              <p className="text-muted-foreground">We certify our graduates through attestations and certificates with our partners</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-md">
              <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground">We provide you with resources and support even after completeing your course </p>
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
              Request More Info
            </Button>
          </div>
        
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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

export default Courses;