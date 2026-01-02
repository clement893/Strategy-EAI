import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const documents = {
  "strategie-eai-2026": {
    title: "Stratégie Marketing Entertain-AI 2026",
    file: "/strategie-eai-2026.md",
  },
  "strategie-digitale-complete-eai-2026": {
    title: "Stratégie Digitale Complète - Entertain-AI 2026",
    file: "/strategie-digitale-complete-eai-2026.md",
  },
  "plan-modifications-strategie": {
    title: "Plan de Modifications - Stratégie",
    file: "/plan-modifications-strategie.md",
  },
};

export default function Document() {
  const [location] = useLocation();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const docKey = location.split("/").pop() || "";
  const doc = documents[docKey as keyof typeof documents];

  useEffect(() => {
    if (!doc) return;

    setLoading(true);
    fetch(doc.file)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading markdown:", err);
        setContent("# Error\n\nCould not load document.");
        setLoading(false);
      });
  }, [doc]);

  if (!doc) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 py-32">
          <h1 className="text-5xl font-sans font-bold mb-4">Document not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:italic prose-headings:text-white
              prose-h1:text-5xl prose-h1:font-sans prose-h1:font-bold prose-h1:mb-4
              prose-h2:text-4xl prose-h2:font-serif prose-h2:italic prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
              prose-h3:text-3xl prose-h3:font-serif prose-h3:italic prose-h3:mt-6 prose-h3:mb-3
              prose-h4:text-2xl prose-h4:font-serif prose-h4:italic prose-h4:mt-4 prose-h4:mb-2
              prose-p:text-white/60 prose-p:leading-relaxed prose-p:my-6
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-white prose-a:border-b prose-a:border-white/30 hover:prose-a:border-white/60
              prose-ul:text-white/70 prose-ul:my-6 prose-li:my-3
              prose-table:border prose-table:border-white/10 prose-th:bg-white/5 prose-th:text-white/70 prose-th:font-serif prose-th:italic prose-th:font-normal
              prose-td:text-white/70 prose-td:border prose-td:border-white/10
              prose-blockquote:border-l-4 prose-blockquote:border-white/30 prose-blockquote:bg-white/5 prose-blockquote:text-white/70 prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:py-4
              prose-code:bg-white/10 prose-code:text-white/90 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:text-white/90
              prose-img:border prose-img:border-white/10 prose-img:my-8
              prose-hr:border-white/10"
          >
            {loading ? (
              <div className="text-center py-32">
                <div className="text-white/50">Loading...</div>
              </div>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
