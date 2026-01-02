import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";
import EditableField from "./EditableField";

export default function ICCDefinition() {
  const { content } = useContent();
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-500/20 rounded-lg flex-shrink-0">
                <Sparkles className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-serif italic mb-4 text-blue-200">
                  <EditableField 
                    path="iccDefinition.title" 
                    value={content.iccDefinition.title}
                    className="text-2xl font-serif italic text-blue-200"
                  />
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  <EditableField 
                    path="iccDefinition.definition" 
                    value={content.iccDefinition.definition}
                    type="textarea"
                    className="text-white/80 leading-relaxed"
                  />
                </p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-3">
                    <EditableField 
                      path="iccDefinition.whyTitle" 
                      value={content.iccDefinition.whyTitle}
                      className="font-sans text-xs uppercase tracking-widest text-white/50"
                    />
                  </h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    <EditableField 
                      path="iccDefinition.whyText" 
                      value={content.iccDefinition.whyText}
                      type="textarea"
                      className="text-white/70 leading-relaxed text-sm"
                    />
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
