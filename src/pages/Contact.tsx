import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+237654815233?text=Hi! I\'d like to know more about ByteNest courses", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/company/bytenest", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const whatsappMessage = `Hi! My name is ${name}. Email: ${email}. Message: ${message}`;
    window.open(`https://wa.me/+237654815233?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Get instant responses",
      value: "+237 6 54 81 52 33",
      action: handleWhatsAppClick,
      color: "bg-accent"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "For detailed inquiries",
      value: "ayendohterrence@gmail.com",
      action: () => window.open("mailto:ayendohterrence@gmail.com"),
      color: "bg-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "Call us directly",
      value: "+237 6 54 81 52 33",
      action: () => window.open("tel:+237654815233"),
      color: "bg-secondary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "@bytenest",
      action: handleLinkedInClick,
      color: "bg-success"
    }
  ];

  const offices = [
    {
      city: "Yaounde, Cameroon",
      address: "Biyem-assi, Yaounde",
      description: "Main office and training center"
    },
    {
      city: "Lagos, Nigeria",
      address: "Lagos State, Nigeria",
      description: "Training center"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your tech journey? We're here to help you every step of the way. 
              Reach out to us and let's discuss your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="text-center cursor-pointer hover:shadow-card transition-all duration-300 group"
                onClick={method.action}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                    {method.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course (Optional)</Label>
                    <Input id="course" name="course" placeholder="e.g., Data Science, Web Development" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="Tell us about your goals and how we can help you..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-8">
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Ready to Start Learning?</CardTitle>
                  <CardDescription className="text-white/90">
                    Join thousands of students who have transformed their careers with ByteNest.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with an Advisor
                  </Button>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">{office.city}</h4>
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                      <p className="text-xs text-muted-foreground mt-1">{office.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I start a course?",
                  answer: "New cohorts start every month. You can reserve your spot immediately and begin within a few days."
                },
                {
                  question: "Do you offer payment plans?",
                  answer: "Yes! We offer flexible payment options including installments and scholarships for qualifying students."
                },
                {
                  question: "What support do I get after graduation?",
                  answer: "Lifetime access to our alumni network, job placement assistance, and career mentorship for 6 months post-graduation."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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

export default Contact;