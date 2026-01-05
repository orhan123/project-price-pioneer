// Historical construction data from the provided dataset
export interface ProjectData {
  id: number;
  daireAdet: number;
  daireCinsleri: string;
  metrekare: number;
  yillar: string;
  maliyetler: Record<string, number>;
  toplamMaliyet: number;
}

export const costCategories = [
  { key: "demir", label: "Demir", icon: "🔩" },
  { key: "beton", label: "Beton", icon: "🧱" },
  { key: "tugla", label: "Tuğla", icon: "🪨" },
  { key: "usta", label: "Usta İşçilik", icon: "👷" },
  { key: "demirci", label: "Demirci", icon: "⚒️" },
  { key: "salih", label: "Salih (Kalıpçı)", icon: "🪵" },
  { key: "sucu", label: "Su Tesisatı", icon: "🚿" },
  { key: "elektrikci", label: "Elektrik", icon: "⚡" },
  { key: "pakpen", label: "Pakpen (PVC)", icon: "🪟" },
  { key: "mobilya", label: "Mobilya", icon: "🪑" },
  { key: "kapi", label: "Kapı + İşçilik", icon: "🚪" },
  { key: "ruhsat", label: "Ruhsat", icon: "📋" },
  { key: "kereste", label: "Kereste", icon: "🪵" },
  { key: "malzeme", label: "Genel Malzeme", icon: "📦" },
  { key: "aluminyum", label: "Alüminyum", icon: "🔲" },
  { key: "asansor", label: "Asansör", icon: "🛗" },
  { key: "fayans", label: "Fayans", icon: "🔳" },
  { key: "mermer", label: "Mermer", icon: "💎" },
  { key: "cevre", label: "Çevre Düzenlemesi", icon: "🌳" },
  { key: "sigorta", label: "Sigorta", icon: "🛡️" },
  { key: "proje", label: "Proje", icon: "📐" },
  { key: "yapiDenetim", label: "Yapı Denetim", icon: "🔍" },
  { key: "laminant", label: "Laminant", icon: "🪵" },
  { key: "oluk", label: "Oluk", icon: "🌧️" },
  { key: "dusakabin", label: "Duşakabin", icon: "🚿" },
  { key: "boya", label: "Boya", icon: "🎨" },
  { key: "granit", label: "Granit", icon: "🪨" },
  { key: "montalama", label: "Montalama", icon: "🔧" },
  { key: "digerGiderler", label: "Diğer Giderler", icon: "📊" },
  { key: "asmaTavan", label: "Asma Tavan", icon: "🏠" },
  { key: "duvar", label: "Duvar", icon: "🧱" },
  { key: "kazi", label: "Kazı", icon: "⛏️" },
];

// Historical data from the Excel file
export const historicalProjects: ProjectData[] = [
  {
    id: 1,
    daireAdet: 16,
    daireCinsleri: "16 tane 2+1",
    metrekare: 440,
    yillar: "2023-2024",
    maliyetler: {
      demir: 1400000, beton: 1350000, tugla: 375000, usta: 1500000,
      demirci: 350000, salih: 1650000, sucu: 860000, elektrikci: 450000,
      pakpen: 650000, mobilya: 850000, kapi: 0, ruhsat: 50000,
      kereste: 170000, malzeme: 1250000, aluminyum: 160000, asansor: 400000,
      fayans: 300000, mermer: 175000, cevre: 200000, sigorta: 500000,
      proje: 90000, yapiDenetim: 240000, laminant: 200000, oluk: 50000,
      dusakabin: 50000, boya: 100000, granit: 50000, montalama: 200000,
      digerGiderler: 500000, asmaTavan: 100000, duvar: 150000, kazi: 55000
    },
    toplamMaliyet: 12605000
  },
  {
    id: 2,
    daireAdet: 24,
    daireCinsleri: "24 tane 3+1",
    metrekare: 780,
    yillar: "2023-2024",
    maliyetler: {
      demir: 2100000, beton: 2300000, tugla: 400000, usta: 1300000,
      demirci: 350000, salih: 1400000, sucu: 1150000, elektrikci: 520000,
      pakpen: 740000, mobilya: 1300000, kapi: 0, ruhsat: 100000,
      kereste: 275000, malzeme: 1500000, aluminyum: 180000, asansor: 300000,
      fayans: 400000, mermer: 250000, cevre: 200000, sigorta: 900000,
      proje: 125000, yapiDenetim: 400000, laminant: 210000, oluk: 75000,
      dusakabin: 100000, boya: 200000, granit: 100000, montalama: 350000,
      digerGiderler: 500000, asmaTavan: 200000, duvar: 100000, kazi: 80000
    },
    toplamMaliyet: 16105000
  },
  {
    id: 3,
    daireAdet: 16,
    daireCinsleri: "16 tane 3+1",
    metrekare: 580,
    yillar: "2024-2025",
    maliyetler: {
      demir: 2250000, beton: 2260000, tugla: 870000, usta: 2300000,
      demirci: 700000, salih: 2100000, sucu: 1400000, elektrikci: 580000,
      pakpen: 935000, mobilya: 1300000, kapi: 500000, ruhsat: 50000,
      kereste: 625000, malzeme: 1500000, aluminyum: 300000, asansor: 1000000,
      fayans: 500000, mermer: 520000, cevre: 50000, sigorta: 1250000,
      proje: 260000, yapiDenetim: 600000, laminant: 350000, oluk: 100000,
      dusakabin: 75000, boya: 200000, granit: 75000, montalama: 250000,
      digerGiderler: 750000, asmaTavan: 50000, duvar: 0, kazi: 60000
    },
    toplamMaliyet: 22780000
  },
  {
    id: 4,
    daireAdet: 8,
    daireCinsleri: "8 tane 2+1",
    metrekare: 175,
    yillar: "2024-2025",
    maliyetler: {
      demir: 760000, beton: 830000, tugla: 200000, usta: 750000,
      demirci: 225000, salih: 900000, sucu: 640000, elektrikci: 250000,
      pakpen: 350000, mobilya: 400000, kapi: 150000, ruhsat: 60000,
      kereste: 90000, malzeme: 750000, aluminyum: 135000, asansor: 450000,
      fayans: 100000, mermer: 210000, cevre: 50000, sigorta: 350000,
      proje: 110000, yapiDenetim: 150000, laminant: 85000, oluk: 35000,
      dusakabin: 36000, boya: 60000, granit: 20000, montalama: 300000,
      digerGiderler: 0, asmaTavan: 25000, duvar: 50000, kazi: 30000
    },
    toplamMaliyet: 8501000
  },
  {
    id: 5,
    daireAdet: 12,
    daireCinsleri: "8 tane 2+1, 4 tane 3+1",
    metrekare: 330,
    yillar: "2024-2025",
    maliyetler: {
      demir: 1250000, beton: 1350000, tugla: 400000, usta: 1550000,
      demirci: 400000, salih: 1400000, sucu: 960000, elektrikci: 400000,
      pakpen: 575000, mobilya: 650000, kapi: 260000, ruhsat: 100000,
      kereste: 200000, malzeme: 1000000, aluminyum: 140000, asansor: 450000,
      fayans: 200000, mermer: 295000, cevre: 100000, sigorta: 600000,
      proje: 170000, yapiDenetim: 300000, laminant: 200000, oluk: 50000,
      dusakabin: 60000, boya: 125000, granit: 70000, montalama: 250000,
      digerGiderler: 500000, asmaTavan: 75000, duvar: 100000, kazi: 45000
    },
    toplamMaliyet: 14375000
  },
  {
    id: 6,
    daireAdet: 12,
    daireCinsleri: "8 tane 3+1, 4 tane 1+1",
    metrekare: 360,
    yillar: "2024-2025",
    maliyetler: {
      demir: 1200000, beton: 1350000, tugla: 365000, usta: 1350000,
      demirci: 325000, salih: 1500000, sucu: 960000, elektrikci: 400000,
      pakpen: 450000, mobilya: 1000000, kapi: 0, ruhsat: 50000,
      kereste: 450000, malzeme: 1500000, aluminyum: 130000, asansor: 500000,
      fayans: 250000, mermer: 270000, cevre: 20000, sigorta: 600000,
      proje: 150000, yapiDenetim: 300000, laminant: 150000, oluk: 60000,
      dusakabin: 55000, boya: 125000, granit: 75000, montalama: 250000,
      digerGiderler: 500000, asmaTavan: 75000, duvar: 0, kazi: 75000
    },
    toplamMaliyet: 14485000
  },
  {
    id: 7,
    daireAdet: 16,
    daireCinsleri: "16 tane 2+1",
    metrekare: 400,
    yillar: "2025-2026",
    maliyetler: {
      demir: 1650000, beton: 1500000, tugla: 540000, usta: 1850000,
      demirci: 525000, salih: 2250000, sucu: 1400000, elektrikci: 750000,
      pakpen: 1000000, mobilya: 1200000, kapi: 350000, ruhsat: 250000,
      kereste: 400000, malzeme: 1500000, aluminyum: 200000, asansor: 500000,
      fayans: 570000, mermer: 340000, cevre: 300000, sigorta: 650000,
      proje: 250000, yapiDenetim: 500000, laminant: 250000, oluk: 100000,
      dusakabin: 100000, boya: 200000, granit: 58000, montalama: 200000,
      digerGiderler: 2000000, asmaTavan: 50000, duvar: 50000, kazi: 55000
    },
    toplamMaliyet: 21488000
  }
];

// Calculate average cost per m² for each category
export function calculateAverageCostsPerM2(): Record<string, number> {
  const averages: Record<string, number> = {};
  
  costCategories.forEach(({ key }) => {
    let totalCost = 0;
    let totalM2 = 0;
    
    historicalProjects.forEach(project => {
      if (project.maliyetler[key] > 0) {
        totalCost += project.maliyetler[key];
        totalM2 += project.metrekare;
      }
    });
    
    averages[key] = totalM2 > 0 ? totalCost / totalM2 : 0;
  });
  
  return averages;
}

// Calculate average cost per apartment
export function calculateAverageCostsPerDaire(): Record<string, number> {
  const averages: Record<string, number> = {};
  
  costCategories.forEach(({ key }) => {
    let totalCost = 0;
    let totalDaire = 0;
    
    historicalProjects.forEach(project => {
      if (project.maliyetler[key] > 0) {
        totalCost += project.maliyetler[key];
        totalDaire += project.daireAdet;
      }
    });
    
    averages[key] = totalDaire > 0 ? totalCost / totalDaire : 0;
  });
  
  return averages;
}

// Inflation rates by year (approximate)
export const inflationRates: Record<string, number> = {
  "2023": 1.0,
  "2024": 1.45,
  "2025": 1.75,
  "2026": 2.1,
  "2027": 2.4,
  "2028": 2.7,
};

export type DaireTipi = "1+1" | "2+1" | "3+1" | "4+1";

export interface DaireGirdisi {
  tip: DaireTipi;
  adet: number;
}

export interface TahminGirdisi {
  oturumAlani: number;
  daireler: DaireGirdisi[];
  dukkanSayisi: number;
  baslangicYili: number;
  bitisYili: number;
}

// Size multipliers by apartment type
export const daireBuyuklukKatsayisi: Record<DaireTipi, number> = {
  "1+1": 0.6,
  "2+1": 1.0,
  "3+1": 1.4,
  "4+1": 1.8,
};

export function tahminHesapla(girdi: TahminGirdisi): Record<string, number> {
  const m2Ortalama = calculateAverageCostsPerM2();
  const daireOrtalama = calculateAverageCostsPerDaire();
  
  // Calculate weighted apartment count
  const agirlikliDaireAdet = girdi.daireler.reduce((acc, d) => {
    return acc + d.adet * daireBuyuklukKatsayisi[d.tip];
  }, 0);
  
  const toplamDaire = girdi.daireler.reduce((acc, d) => acc + d.adet, 0);
  
  // Calculate inflation factor
  const ortaYil = Math.floor((girdi.baslangicYili + girdi.bitisYili) / 2);
  const enflasyonKatsayisi = inflationRates[ortaYil.toString()] || 1.0;
  
  const tahminler: Record<string, number> = {};
  
  costCategories.forEach(({ key }) => {
    // Use a weighted average between m² based and apartment based costs
    const m2Maliyet = m2Ortalama[key] * girdi.oturumAlani;
    const daireMaliyet = daireOrtalama[key] * agirlikliDaireAdet;
    
    // Categories that depend more on apartment count
    const daireAgirlikliKategoriler = ["mobilya", "pakpen", "sucu", "elektrikci", "asansor", "fayans", "dusakabin", "kapi"];
    
    let tabanMaliyet: number;
    if (daireAgirlikliKategoriler.includes(key)) {
      tabanMaliyet = daireMaliyet * 0.7 + m2Maliyet * 0.3;
    } else {
      tabanMaliyet = m2Maliyet * 0.6 + daireMaliyet * 0.4;
    }
    
    // Apply inflation
    tahminler[key] = Math.round(tabanMaliyet * enflasyonKatsayisi);
  });
  
  // Add shop cost if applicable
  if (girdi.dukkanSayisi > 0) {
    const dukkanEkMaliyet = girdi.dukkanSayisi * 150000 * enflasyonKatsayisi;
    tahminler.digerGiderler = (tahminler.digerGiderler || 0) + Math.round(dukkanEkMaliyet);
  }
  
  return tahminler;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0
  }).format(amount);
}
