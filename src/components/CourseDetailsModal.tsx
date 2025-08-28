import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    shortDescription: string;
    curriculum: string[];
  } | null;
}

export const CourseDetailsModal = ({ isOpen, onClose, course }: CourseDetailsModalProps) => {
  if (!course) return null;

  const handleEnrollClick = () => {
    const message = `Hi! I'm interested in enrolling for the ${course.title} course. Can you provide more information?`;
    window.open(`https://wa.me/+237654815233?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-xl lg:max-w-2xl overflow-y-scroll max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary mb-2">{course.title}</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {course.shortDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
          <div className="space-y-3">
            {course.curriculum.map((topic, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-base text-foreground">{topic}</span>
              </div>
            ))}
          </div>
        </div>
        <Button 
          onClick={handleEnrollClick}
          className="w-full mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          Enroll Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};
