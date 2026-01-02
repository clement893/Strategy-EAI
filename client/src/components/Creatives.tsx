import { useContent } from "@/contexts/ContentContext";
import EditableField from "./EditableField";

export default function Creatives() {
  const { content } = useContent();
  const { creatives } = content;

  // Chemins des images
  const secondaireImages = [
    "/creatives/Secondaire/1080x1080.jpg",
    "/creatives/Secondaire/1080x1350.jpg",
    "/creatives/Secondaire/1080x1920.jpg"
  ];

  const generalImages = [
    "/creatives/General/1080x1080_1.jpg",
    "/creatives/General/1080x1080_2.jpg",
    "/creatives/General/1080x1080_3.jpg",
    "/creatives/General/1350x1080_1.jpg",
    "/creatives/General/1350x1080_2.jpg",
    "/creatives/General/1350x1080_3.jpg",
    "/creatives/General/1920x1080_1.jpg",
    "/creatives/General/1920x1080_2.jpg",
    "/creatives/General/1920x1080_3.jpg"
  ];

  const argumentImages = [
    "/creatives/Argument/1080x1080_1.jpg",
    "/creatives/Argument/1080x1080_2.jpg",
    "/creatives/Argument/1080x1080_3.jpg",
    "/creatives/Argument/1080x1080_4.jpg",
    "/creatives/Argument/1080x1350_1.jpg",
    "/creatives/Argument/1080x1350_2.jpg",
    "/creatives/Argument/1080x1350_3.jpg",
    "/creatives/Argument/1080x1350_4.jpg",
    "/creatives/Argument/1080x1920_1.jpg",
    "/creatives/Argument/1080x1920_2.jpg",
    "/creatives/Argument/1080x1920_3.jpg",
    "/creatives/Argument/1080x1920_4.jpg"
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="mb-16">
          <EditableField
            path="creatives.sectionNumber"
            className="text-sm font-sans text-white/40 uppercase tracking-widest mb-4"
          />
          <EditableField
            path="creatives.sectionTitle"
            className="text-5xl font-serif italic text-white mb-6"
          />
          <EditableField
            path="creatives.intro"
            className="text-lg text-white/70 leading-relaxed max-w-4xl"
          />
        </div>

        {/* Total assets */}
        <div className="mb-16 p-8 bg-white/5 rounded-lg border border-white/10">
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">
              <EditableField path="creatives.totalAssets" />
            </div>
            <div className="text-white/60 font-sans uppercase tracking-wider text-sm">
              Assets créatifs disponibles
            </div>
          </div>
        </div>

        {/* Catégorie Secondaire */}
        <div className="mb-20">
          <div className="mb-8">
            <EditableField
              path="creatives.secondaireTitle"
              className="text-3xl font-serif italic text-white mb-4"
            />
            <EditableField
              path="creatives.secondaireDescription"
              className="text-white/70 leading-relaxed max-w-3xl"
            />
            <div className="mt-4 text-white/50 text-sm font-sans">
              <EditableField path="creatives.secondaireCount" /> visuels
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaireImages.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <img
                  src={src}
                  alt={`Secondaire ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Catégorie General */}
        <div className="mb-20">
          <div className="mb-8">
            <EditableField
              path="creatives.generalTitle"
              className="text-3xl font-serif italic text-white mb-4"
            />
            <EditableField
              path="creatives.generalDescription"
              className="text-white/70 leading-relaxed max-w-3xl"
            />
            <div className="mt-4 text-white/50 text-sm font-sans">
              <EditableField path="creatives.generalCount" /> visuels + <EditableField path="creatives.generalAnimations" /> animations
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {generalImages.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <img
                  src={src}
                  alt={`General ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <video
                src="/creatives/General/Animation 1.mp4"
                controls
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-xs text-white font-sans">
                Animation 1
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <video
                src="/creatives/General/Animation 2.mp4"
                controls
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-xs text-white font-sans">
                Animation 2
              </div>
            </div>
          </div>
        </div>

        {/* Catégorie Argument */}
        <div>
          <div className="mb-8">
            <EditableField
              path="creatives.argumentTitle"
              className="text-3xl font-serif italic text-white mb-4"
            />
            <EditableField
              path="creatives.argumentDescription"
              className="text-white/70 leading-relaxed max-w-3xl"
            />
            <div className="mt-4 text-white/50 text-sm font-sans">
              <EditableField path="creatives.argumentCount" /> visuels
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {argumentImages.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <img
                  src={src}
                  alt={`Argument ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Note sur les formats */}
        <div className="mt-16 p-8 bg-white/5 rounded-lg border border-white/10">
          <h3 className="text-xl font-serif italic text-white mb-4">Formats disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/70 text-sm">
            <div>
              <div className="font-sans text-white/90 mb-2">Réseaux sociaux</div>
              <ul className="space-y-1">
                <li>• 1080x1080 (carré) — Instagram/Facebook Feed</li>
                <li>• 1080x1350 (portrait) — Instagram Portrait</li>
                <li>• 1080x1920 (vertical) — Instagram/Facebook Story</li>
              </ul>
            </div>
            <div>
              <div className="font-sans text-white/90 mb-2">Display & LinkedIn</div>
              <ul className="space-y-1">
                <li>• 1350x1080 (paysage) — LinkedIn/Facebook</li>
                <li>• 1920x1080 (paysage large) — Display, YouTube</li>
                <li>• Animations MP4 — Meta, LinkedIn, Display</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
