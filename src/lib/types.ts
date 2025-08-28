export interface CourseDetails {
  title: string;
  shortDescription: string;
  curriculum: string[];
}

export interface Course {
  title: string;
  description: string;
  duration: string;
  students: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  icon?: React.ReactNode; // Icon is added dynamically, so it's optional in the base data
  details: CourseDetails;
}
