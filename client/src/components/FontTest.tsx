/**
 * Composant de test pour vérifier le chargement des fonts
 * À utiliser temporairement pour valider que Lato et Electrolize se chargent correctement
 */
import { useEffect, useState } from "react";

export function FontTest() {
  const [fontStatus, setFontStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkFonts = () => {
      const status: Record<string, boolean> = {};
      ['Lato', 'Electrolize'].forEach((font) => {
        status[font] = document.fonts.check(`16px "${font}"`);
      });
      setFontStatus(status);
    };

    checkFonts();
    document.fonts.ready.then(checkFonts);
  }, []);

  return (
    <div className="p-8 space-y-8 bg-black/50 rounded-lg">
      <div>
        <h3 className="text-sm text-gray-400 mb-4">Test de chargement des fonts</h3>
        
        {/* Test Lato (font-sans) */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2">Lato (font-sans) - Texte général</p>
          <p className="font-sans text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            The quick brown fox jumps over the lazy dog
          </p>
          <p className="font-sans font-light text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            Lato Light (300)
          </p>
          <p className="font-sans font-normal text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            Lato Regular (400)
          </p>
          <p className="font-sans font-bold text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            Lato Bold (700)
          </p>
        </div>

        {/* Test Electrolize (font-display) */}
        <div>
          <p className="text-xs text-gray-500 mb-2">Electrolize (font-display) - Titres</p>
          <h1 className="font-display text-4xl" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            Entertain-AI 2026
          </h1>
          <h2 className="font-display text-2xl mt-4" style={{ fontFamily: 'Electrolize, sans-serif' }}>
            Stratégie Marketing
          </h2>
        </div>

        {/* Vérification via JavaScript */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-2">Vérification JavaScript:</p>
          <div className="text-sm space-y-1">
            {['Lato', 'Electrolize'].map((font) => (
              <div key={font} className={fontStatus[font] ? 'text-green-400' : 'text-red-400'}>
                {font}: {fontStatus[font] ? '✓ Chargée' : '✗ Non chargée'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
