import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Calculator, Building2 } from "lucide-react";
import { DaireGirdisi, DaireTipi, TahminGirdisi } from "@/lib/constructionData";

interface CostEstimationFormProps {
  onSubmit: (girdi: TahminGirdisi) => void;
}

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 6 }, (_, i) => currentYear + i);

export function CostEstimationForm({ onSubmit }: CostEstimationFormProps) {
  const [oturumAlani, setOturumAlani] = useState<string>("");
  const [daireler, setDaireler] = useState<DaireGirdisi[]>([{ tip: "2+1", adet: 1 }]);
  const [dukkanSayisi, setDukkanSayisi] = useState<string>("0");
  const [baslangicYili, setBaslangicYili] = useState<string>(currentYear.toString());
  const [bitisYili, setBitisYili] = useState<string>((currentYear + 1).toString());

  const handleDaireEkle = () => {
    setDaireler([...daireler, { tip: "2+1", adet: 1 }]);
  };

  const handleDaireSil = (index: number) => {
    if (daireler.length > 1) {
      setDaireler(daireler.filter((_, i) => i !== index));
    }
  };

  const handleDaireGuncelle = (index: number, field: "tip" | "adet", value: string | number) => {
    const yeniDaireler = [...daireler];
    if (field === "tip") {
      yeniDaireler[index].tip = value as DaireTipi;
    } else {
      yeniDaireler[index].adet = Number(value) || 0;
    }
    setDaireler(yeniDaireler);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const girdi: TahminGirdisi = {
      oturumAlani: Number(oturumAlani) || 0,
      daireler: daireler.filter(d => d.adet > 0),
      dukkanSayisi: Number(dukkanSayisi) || 0,
      baslangicYili: Number(baslangicYili),
      bitisYili: Number(bitisYili),
    };

    onSubmit(girdi);
  };

  const toplamDaire = daireler.reduce((acc, d) => acc + d.adet, 0);

  return (
    <Card className="shadow-lg border-2 border-border/50">
      <CardHeader className="bg-primary/5 border-b">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <Building2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl">Şantiye Bilgileri</CardTitle>
            <CardDescription>İnşaat detaylarını girerek maliyet tahmini alın</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Oturum Alanı */}
          <div className="space-y-2">
            <Label htmlFor="oturumAlani" className="text-sm font-medium">
              Oturum Alanı (m²)
            </Label>
            <Input
              id="oturumAlani"
              type="number"
              placeholder="Örn: 450"
              value={oturumAlani}
              onChange={(e) => setOturumAlani(e.target.value)}
              className="text-lg"
              required
            />
          </div>

          {/* Daireler */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">
                Daireler ({toplamDaire} adet)
              </Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleDaireEkle}
                className="gap-1"
              >
                <Plus className="h-4 w-4" />
                Daire Tipi Ekle
              </Button>
            </div>
            
            <div className="space-y-2">
              {daireler.map((daire, index) => (
                <div key={index} className="flex gap-2 items-center p-3 bg-muted/50 rounded-lg">
                  <Input
                    type="number"
                    min="0"
                    value={daire.adet}
                    onChange={(e) => handleDaireGuncelle(index, "adet", e.target.value)}
                    className="w-20"
                    placeholder="Adet"
                  />
                  <span className="text-muted-foreground">adet</span>
                  <Select
                    value={daire.tip}
                    onValueChange={(value) => handleDaireGuncelle(index, "tip", value)}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1+1">1+1</SelectItem>
                      <SelectItem value="2+1">2+1</SelectItem>
                      <SelectItem value="3+1">3+1</SelectItem>
                      <SelectItem value="4+1">4+1</SelectItem>
                    </SelectContent>
                  </Select>
                  {daireler.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDaireSil(index)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Dükkan */}
          <div className="space-y-2">
            <Label htmlFor="dukkan" className="text-sm font-medium">
              Dükkan Sayısı (Varsa)
            </Label>
            <Input
              id="dukkan"
              type="number"
              min="0"
              placeholder="0"
              value={dukkanSayisi}
              onChange={(e) => setDukkanSayisi(e.target.value)}
            />
          </div>

          {/* Yıllar */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Başlangıç Yılı</Label>
              <Select value={baslangicYili} onValueChange={setBaslangicYili}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Bitiş Yılı</Label>
              <Select value={bitisYili} onValueChange={setBitisYili}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full gap-2 h-12 text-base" size="lg">
            <Calculator className="h-5 w-5" />
            Maliyet Tahmini Hesapla
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
