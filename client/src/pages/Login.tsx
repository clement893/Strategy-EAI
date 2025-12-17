import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "123123123") {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c] text-white px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-serif italic font-bold">Accès Restreint</h2>
          <p className="mt-2 text-white/60">Veuillez entrer le mot de passe pour accéder à la stratégie.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Mot de passe"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-400 pl-1">Mot de passe incorrect</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold tracking-wide"
          >
            ACCÉDER
          </Button>
        </form>
      </div>
    </div>
  );
}
