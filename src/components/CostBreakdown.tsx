import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { costCategories, formatCurrency, TahminGirdisi } from "@/lib/constructionData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, PieChartIcon, BarChart3, List } from "lucide-react";

interface CostBreakdownProps {
  tahminler: Record<string, number>;
  girdi: TahminGirdisi;
}

const COLORS = [
  '#1e3a5f', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6',
  '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1',
  '#14b8a6', '#f43f5e', '#a855f7', '#22c55e', '#3b82f6',
  '#eab308', '#64748b', '#0ea5e9', '#d946ef', '#78716c',
  '#fb923c', '#4ade80', '#facc15', '#38bdf8', '#c084fc',
  '#2dd4bf', '#fb7185', '#a3e635', '#818cf8', '#fbbf24'
];

export function CostBreakdown({ tahminler, girdi }: CostBreakdownProps) {
  const [activeView, setActiveView] = useState<"list" | "pie" | "bar">("list");

  const toplamMaliyet = Object.values(tahminler).reduce((a, b) => a + b, 0);
  const toplamDaire = girdi.daireler.reduce((acc, d) => acc + d.adet, 0);
  const birimMaliyet = toplamMaliyet / girdi.oturumAlani;
  const daireBirimMaliyet = toplamMaliyet / toplamDaire;

  // Prepare data for charts
  const chartData = costCategories
    .filter(cat => tahminler[cat.key] > 0)
    .map((cat, index) => ({
      name: cat.label,
      value: tahminler[cat.key],
      icon: cat.icon,
      color: COLORS[index % COLORS.length],
      percentage: ((tahminler[cat.key] / toplamMaliyet) * 100).toFixed(1)
    }))
    .sort((a, b) => b.value - a.value);

  // Top 5 costs
  const top5 = chartData.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardHeader className="pb-2">
            <CardDescription className="text-primary-foreground/80">Toplam Tahmini Maliyet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(toplamMaliyet)}</div>
            <div className="flex items-center gap-1 mt-1 text-sm text-primary-foreground/80">
              <TrendingUp className="h-4 w-4" />
              {girdi.baslangicYili}-{girdi.bitisYili} dönemi
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Metrekare Başına Maliyet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{formatCurrency(birimMaliyet)}</div>
            <div className="text-sm text-muted-foreground">/ m² ({girdi.oturumAlani} m²)</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Daire Başına Maliyet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{formatCurrency(daireBirimMaliyet)}</div>
            <div className="text-sm text-muted-foreground">/ daire ({toplamDaire} daire)</div>
          </CardContent>
        </Card>
      </div>

      {/* Project Summary */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Proje Özeti</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-sm">
              📐 {girdi.oturumAlani} m²
            </Badge>
            {girdi.daireler.map((d, i) => (
              <Badge key={i} variant="outline" className="text-sm">
                🏠 {d.adet}x {d.tip}
              </Badge>
            ))}
            {girdi.dukkanSayisi > 0 && (
              <Badge variant="outline" className="text-sm">
                🏪 {girdi.dukkanSayisi} dükkan
              </Badge>
            )}
            <Badge className="bg-secondary text-secondary-foreground text-sm">
              📅 {girdi.baslangicYili}-{girdi.bitisYili}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Top 5 Cost Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            🔥 En Yüksek 5 Maliyet Kalemi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {top5.map((item, index) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg bg-muted">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold">{formatCurrency(item.value)}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground w-12 text-right">
                  %{item.percentage}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Detaylı Maliyet Dökümü</CardTitle>
            <Tabs value={activeView} onValueChange={(v) => setActiveView(v as any)}>
              <TabsList>
                <TabsTrigger value="list" className="gap-1">
                  <List className="h-4 w-4" />
                  Liste
                </TabsTrigger>
                <TabsTrigger value="pie" className="gap-1">
                  <PieChartIcon className="h-4 w-4" />
                  Pasta
                </TabsTrigger>
                <TabsTrigger value="bar" className="gap-1">
                  <BarChart3 className="h-4 w-4" />
                  Çubuk
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {activeView === "list" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {chartData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{formatCurrency(item.value)}</div>
                    <div className="text-xs text-muted-foreground">%{item.percentage}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === "pie" && (
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData.slice(0, 10)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={140}
                    label={({ name, percentage }) => `${name} (%${percentage})`}
                    labelLine={true}
                  >
                    {chartData.slice(0, 10).map((entry, index) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeView === "bar" && (
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    type="number"
                    tickFormatter={(value) => `₺${(value / 1000000).toFixed(1)}M`}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={100}
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
