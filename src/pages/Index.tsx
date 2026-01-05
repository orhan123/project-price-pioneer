import { useState } from "react";
import { Header } from "@/components/Header";
import { CostEstimationForm } from "@/components/CostEstimationForm";
import { CostBreakdown } from "@/components/CostBreakdown";
import { HistoricalDataView } from "@/components/HistoricalDataView";
import { tahminHesapla, TahminGirdisi } from "@/lib/constructionData";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [tahminler, setTahminler] = useState<Record<string, number> | null>(null);
  const [sonGirdi, setSonGirdi] = useState<TahminGirdisi | null>(null);

  const handleSubmit = (girdi: TahminGirdisi) => {
    const sonuclar = tahminHesapla(girdi);
    setTahminler(sonuclar);
    setSonGirdi(girdi);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById("sonuclar")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CostEstimationForm onSubmit={handleSubmit} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HistoricalDataView />
            </motion.div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2" id="sonuclar">
            <AnimatePresence mode="wait">
              {tahminler && sonGirdi ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <CostBreakdown tahminler={tahminler} girdi={sonGirdi} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-[600px] text-center"
                >
                  <div className="p-6 bg-muted/50 rounded-full mb-6">
                    <svg
                      className="w-16 h-16 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Maliyet Tahmini Bekliyor
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Sol taraftaki formu doldurarak inşaat projenizin detaylı maliyet tahminini alabilirsiniz.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/30 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Bu tahminler geçmiş proje verilerine dayanmaktadır. 
            Gerçek maliyetler piyasa koşullarına göre değişiklik gösterebilir.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
