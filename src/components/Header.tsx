import { Building2, HardHat } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-secondary rounded-xl">
            <HardHat className="h-8 w-8 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              İnşaat Maliyet Tahmini
              <Building2 className="h-6 w-6 text-secondary" />
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base mt-1">
              Geçmiş verilerinize dayalı akıllı maliyet analizi
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
