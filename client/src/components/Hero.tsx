import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";
import EditableField from "./EditableField";

export default function Hero() {
  const { content } = useContent();
  
  const scrollToContent = () => {
    const element = document.getElementById("executive-summary");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 text-xs font-sans uppercase tracking-widest mb-8">
            <EditableField 
              path="hero.subtitle" 
              value={content.hero.subtitle}
              className="text-xs font-sans uppercase tracking-widest"
            />
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tight mb-6 leading-none">
            <EditableField 
              path="hero.title" 
              value={content.hero.title}
              className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tight"
              as="span"
            />
            <br />
            <span className="font-serif italic font-normal text-white/90">
              <EditableField 
                path="hero.titleItalic" 
                value={content.hero.titleItalic}
                className="font-serif italic font-normal text-white/90"
              />
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 font-sans font-light leading-relaxed mb-12">
            <EditableField 
              path="hero.description" 
              value={content.hero.description}
              type="textarea"
              className="text-lg md:text-xl text-white/60 font-sans font-light leading-relaxed"
              as="span"
            />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
          <button 
            onClick={scrollToContent}
            className="group flex items-center gap-2 text-xs font-sans uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            Découvrir la stratégie
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
