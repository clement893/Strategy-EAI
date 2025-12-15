import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  isActive: boolean;
  isPrev: boolean;
  className?: string;
  backgroundImage?: string;
}

export function Slide({ children, isActive, isPrev, className, backgroundImage }: SlideProps) {
  return (
    <div 
      className={cn(
        "slide p-8 md:p-16",
        isActive && "active",
        isPrev && "prev",
        className
      )}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.95)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="container mx-auto h-full flex flex-col justify-center relative z-10">
        {children}
      </div>
    </div>
  );
}
