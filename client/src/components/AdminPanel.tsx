import { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Settings, Download, Upload, RotateCcw, Edit3, Eye, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminPanel() {
  const { isEditMode, toggleEditMode, exportContent, importContent, resetContent } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          importContent(content);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleReset = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser tout le contenu aux valeurs par défaut ?')) {
      resetContent();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 group"
        title="Ouvrir le panneau d'administration"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Settings className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        )}
      </button>

      {/* Panneau d'administration */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-96">
          <Card className="bg-gray-900 border-gray-700 shadow-2xl">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-xl font-sans flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Panneau d'administration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {/* Mode édition */}
              <div>
                <h3 className="text-sm font-sans uppercase tracking-wider text-white/50 mb-3">Mode édition</h3>
                <button
                  onClick={toggleEditMode}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                    isEditMode
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isEditMode ? (
                      <>
                        <Edit3 className="w-4 h-4" />
                        Mode édition actif
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        Mode lecture
                      </>
                    )}
                  </span>
                  <div
                    className={`w-12 h-6 rounded-full transition-colors ${
                      isEditMode ? 'bg-green-400' : 'bg-gray-500'
                    } relative`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        isEditMode ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </div>
                </button>
                {isEditMode && (
                  <p className="text-xs text-white/50 mt-2">
                    Cliquez sur n'importe quel texte ou valeur pour le modifier
                  </p>
                )}
              </div>

              {/* Actions */}
              <div>
                <h3 className="text-sm font-sans uppercase tracking-wider text-white/50 mb-3">Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={exportContent}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Exporter le contenu (JSON)
                  </button>
                  
                  <button
                    onClick={handleImport}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Importer le contenu (JSON)
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Réinitialiser aux valeurs par défaut
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                <p className="text-xs text-white/70 leading-relaxed">
                  <strong className="text-white">💡 Astuce :</strong> Les modifications sont automatiquement sauvegardées dans votre navigateur. Exportez le contenu en JSON pour le sauvegarder de manière permanente.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
