import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { historicalProjects, formatCurrency } from "@/lib/constructionData";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Database } from "lucide-react";

export function HistoricalDataView() {
  return (
    <Card>
      <CardHeader className="bg-muted/50 border-b">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">Referans Projeler</CardTitle>
            <CardDescription>
              Tahminlerin dayandığı {historicalProjects.length} geçmiş proje
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px]">
          <div className="divide-y">
            {historicalProjects.map((project) => (
              <div key={project.id} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{project.daireCinsleri}</span>
                      <Badge variant="secondary" className="text-xs">
                        {project.yillar}
                      </Badge>
                    </div>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>📐 {project.metrekare} m²</span>
                      <span>🏠 {project.daireAdet} daire</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">
                      {formatCurrency(project.toplamMaliyet)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formatCurrency(project.toplamMaliyet / project.metrekare)}/m²
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
