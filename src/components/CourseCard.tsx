import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, ArrowRight, Eye } from "lucide-react";
import { Course } from "../lib/types";

interface CourseCardProps extends Course {
  onViewDetails: (courseDetails: Course['details']) => void;
}

const CourseCard = ({ title, description, duration, students, level, skills, icon, details, onViewDetails }: CourseCardProps) => {
  const handleEnrollClick = () => {
    const message = `Hi! I'm interested in enrolling for the ${title} course. Can you provide more information?`;
    window.open(`https://wa.me/+237654815233?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-success/10 text-success border-success/20";
      case "Intermediate":
        return "bg-accent/10 text-accent border-accent/20";
      case "Advanced":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <Card className="relative flex flex-col h-full overflow-hidden group hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/30">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
      
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-2xl">
            {icon}
          </div>
          <Badge variant="outline" className={getLevelColor(level)}>
            {level}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students}+ students</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>Certificate</span>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-sm">Key Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-shrink-0 flex items-center justify-between pt-4 border-t">
        <Button
          onClick={() => onViewDetails(details)}
          className="group/btn"
          variant="secondary"
        >
          View Details
          <Eye className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
        
        <Button
          onClick={handleEnrollClick}
          className="group/btn"
          variant="secondary"
        >
          Enroll Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;