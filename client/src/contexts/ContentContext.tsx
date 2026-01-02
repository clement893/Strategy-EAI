import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ContentData, defaultContent } from '@/data/content';

interface ContentContextType {
  content: ContentData;
  updateContent: (path: string, value: any) => void;
  resetContent: () => void;
  isEditMode: boolean;
  toggleEditMode: () => void;
  exportContent: () => void;
  importContent: (jsonString: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);
  const [isEditMode, setIsEditMode] = useState(false);

  // Charger le contenu depuis localStorage au démarrage
  useEffect(() => {
    const savedContent = localStorage.getItem('strategyContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error('Erreur lors du chargement du contenu:', e);
      }
    }
  }, []);

  // Sauvegarder le contenu dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('strategyContent', JSON.stringify(content));
  }, [content]);

  const updateContent = (path: string, value: any) => {
    setContent((prev) => {
      const newContent = { ...prev };
      const keys = path.split('.');
      let current: any = newContent;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newContent;
    });
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('strategyContent');
  };

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'strategy-content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importContent = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      setContent(imported);
    } catch (e) {
      console.error('Erreur lors de l\'importation:', e);
      alert('Erreur lors de l\'importation du fichier JSON');
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        resetContent,
        isEditMode,
        toggleEditMode,
        exportContent,
        importContent
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
