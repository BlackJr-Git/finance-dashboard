"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SideDetailsBudget } from "@/components/Budget-Caisse/side-details";
import { CustomActiveShapePieChart } from "@/components/Budget-Caisse/custom-pie-chart";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export function MoreForecastInfo({ forecast }: { forecast: any }) {
  // Données pour le graphique circulaire
  const pieChartData = [
    {
      name: "Autres entrées de fonds",
      value: 5191,
      color: "hsl(var(--chart-1))"
    },
    {
      name: "Produit d'exploitation",
      value: 2490,
      color: "hsl(var(--chart-2))"
    }
  ];

  // Données pour le graphique circulaire des dépenses
  const expensesPieChartData = [
    {
      name: "C.P",
      value: 1848,
      color: "hsl(var(--chart-3))"
    },
    {
      name: "B.D",
      value: 3548,
      color: "hsl(var(--chart-5))"
    },
    {
      name: "C.E",
      value: 3548,
      color: "hsl(var(--chart-1))"
    },
    {
      name: "Autres",
      value: 1200,
      color: "hsl(var(--chart-4))"
    }
  ];

  return (
    <div className="flex flex-col mb-6 mt-6">
      <Tabs defaultValue="recettes" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="recettes">
            Recettes {forecast.startYear}
          </TabsTrigger>
          <TabsTrigger value="depenses">
            Dépenses {forecast.startYear}
          </TabsTrigger>
          <TabsTrigger value="soldes">Soldes Précédents</TabsTrigger>
        </TabsList>

        <TabsContent value="recettes">
          <Card>
            <CardHeader>
              <CardTitle>Répartition des Entrées Financières</CardTitle>
              <CardDescription>
                Vue détaillée des différentes sources de financement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Graphique camembert interactif */}
                <div className="flex flex-col">
                  <h3 className="font-medium mb-3 text-center">
                    Répartition des Fonds
                  </h3>
                  <div className="h-[300px]">
                    <CustomActiveShapePieChart data={pieChartData} />
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Répartition des entrées financières pour l&apos;exercice{" "}
                    {forecast.startYear}
                  </p>
                </div>

                {/* Liens stylisés */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-medium mb-4">
                    Détails des Sources de Financement
                  </h3>

                  <div className="space-y-4">
                    <Link
                      href="#"
                      className="block p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            Autres entrées de fonds
                          </h4>
                          <p className="text-2xl font-bold mt-1">5 191 €</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Subventions, prêts et autres ressources externes
                      </p>
                    </Link>

                    <Link
                      href="#"
                      className="block p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            Produit d&apos;Exploitation
                          </h4>
                          <p className="text-2xl font-bold mt-1">2 490 €</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Revenus générés par l&apos;activité principale de
                        l&apos;entreprise
                      </p>
                    </Link>

                    <div className="flex justify-end mt-2">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm text-primary hover:underline gap-1"
                      >
                        Voir toutes les sources de financement
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="depenses">
          <Card>
            <CardHeader>
              <CardTitle>Répartition des Dépenses</CardTitle>
              <CardDescription>
                Vue détaillée des différentes charges de l&apos;entreprise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Graphique camembert interactif pour les dépenses */}
                <div className="flex flex-col">
                  <h3 className="font-medium mb-3 text-center">
                    Analyse des Charges
                  </h3>
                  <div className="h-[300px]">
                    <CustomActiveShapePieChart data={expensesPieChartData} />
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Répartition des charges pour l&apos;exercice{" "}
                    {forecast.startYear}
                  </p>
                </div>

                {/* Liste des dépenses */}
                <div className="grid grid-cols-2 gap-3 col-span-2">
                  <h3 className="font-medium mb-1">Détail des Charges</h3>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Besoins de démarrage
                        </h4>
                        <p className="text-xl font-bold mt-1">0 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Charges d&apos;exploitation
                        </h4>
                        <p className="text-xl font-bold mt-1">0 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Charges fixes (Charges Externes)
                        </h4>
                        <p className="text-xl font-bold mt-1">0 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group bg-primary/5"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-primary transition-colors">
                          Charges du personnel
                        </h4>
                        <p className="text-xl font-bold mt-1">1 848 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-100" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Charges sociales
                        </h4>
                        <p className="text-xl font-bold mt-1">0 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Valeur ajoutée
                        </h4>
                        <p className="text-xl font-bold mt-1">0 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>

                  <Link
                    href="#"
                    className="block p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          Excédent brut d&apos;exploitation
                        </h4>
                        <p className="text-xl font-bold mt-1">0 €</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cliquez dessus pour avoir plus détails
                    </p>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soldes">
          <Card>
            <CardHeader>
              <CardTitle>Soldes Précédents</CardTitle>
              <CardDescription>
                Indicateurs de performance et ratios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L&apos;analyse des données financières montre une tendance
                positive pour l&apos;exercice {forecast.startYear}.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Ratios financiers</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Marge bénéficiaire:
                      </span>
                      <span className="font-medium">
                        {calculateProfitMargin(forecast)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Rentabilité des fonds propres:
                      </span>
                      <span className="font-medium">
                        {calculateRoE(forecast)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Ratio dépenses/revenus:
                      </span>
                      <span className="font-medium">
                        {calculateExpenseRatio(forecast)}%
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Recommandations</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Continuer à diversifier les sources de revenus</li>
                    <li>
                      Surveiller attentivement l&apos;évolution des coûts du
                      personnel
                    </li>
                    <li>
                      Envisager des investissements dans de nouvelles
                      technologies
                    </li>
                    <li>Établir une réserve pour les périodes creuses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Dernière mise à jour: 23 avril 2025
              </span>
              <span className="text-sm font-medium">
                Prévision {forecast.currentForecast ? "(actuelle)" : ""}
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Utility functions
function calculateYearlyTotal(entry: any): number {
  return (
    entry.januaryValue +
    entry.februaryValue +
    entry.marchValue +
    entry.aprilValue +
    entry.mayValue +
    entry.juneValue +
    entry.julyValue +
    entry.augustValue +
    entry.septemberValue +
    entry.octoberValue +
    entry.novemberValue +
    entry.decemberValue
  );
}

function calculateProfitMargin(forecast: any): string {
  const margin =
    (forecast.financialResume.netIncome / forecast.salesRevenues) * 100;
  return margin.toFixed(1);
}

function calculateRoE(forecast: any): string {
  const roe =
    (forecast.financialResume.netIncome /
      forecast.financialResume.shareholdersEquity) *
    100;
  return roe.toFixed(1);
}

function calculateExpenseRatio(forecast: any): string {
  const ratio =
    (forecast.financialForecast.expenses / forecast.salesRevenues) * 100;
  return ratio.toFixed(1);
}
