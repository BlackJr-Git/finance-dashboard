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
import { PieChartSection } from "@/components/Budget-Caisse/PieChartSection";
import {
  DetailsList,
  DetailsListItem
} from "@/components/Budget-Caisse/DetailsList";
import { ArrowRight, ChevronRight, ExternalLink, Calendar } from "lucide-react";
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

  // Listes d'objets pour les détails
  const recettesDetails: DetailsListItem[] = [
    {
      title: "Autres entrées de fonds",
      amount: "5 191 €",
      description: "Subventions, prêts et autres ressources externes",
      href: "budget-de-caisse/autres-entres-de-fonds"
    },
    {
      title: "Produit d'exploitation",
      amount: "2 490 €",
      description: "Revenus générés par l'activité principale de l'entreprise",
      href: "budget-de-caisse/produits-exploitations"
    }
  ];

  const depensesDetails: DetailsListItem[] = [
    {
      title: "Besoins de démarrage",
      amount: "$ 3 000",
      description: "Cliquez dessus pour avoir plus détails"
    },
    {
      title: "Charges d'exploitation",
      amount: "$ 1 245",
      description: "Cliquez dessus pour avoir plus détails"
    },
    {
      title: "Charges fixes (Charges Externes)",
      amount: "$ 0",
      description: "Cliquez dessus pour avoir plus détails"
    },
    {
      title: "Charges du personnel",
      amount: "$ 1 848",
      description: "Cliquez dessus pour avoir plus détails"
    },
    {
      title: "Charges sociales",
      amount: "$ 220",
      description: "Cliquez dessus pour avoir plus détails"
    },
    {
      title: "Valeur ajoutée",
      amount: "$ 0",
      description: "Cliquez dessus pour avoir plus détails"
    },
    {
      title: "Excédent brut d'exploitation",
      amount: "$ 0",
      description: "Cliquez dessus pour avoir plus détails"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PieChartSection
              title="Répartition des Entrées Financières"
              description="Vue détaillée des différentes sources de financement"
              chartData={pieChartData}
              chartLabel={`Répartition des entrées financières pour l'exercice ${forecast.startYear}`}
            />
            <div className="flex flex-col">
              <h3 className="font-medium mb-4">
                Détails des Sources de Financement
              </h3>
              <DetailsList items={recettesDetails} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="depenses">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PieChartSection
              title="Répartition des Dépenses"
              description="Vue détaillée des différentes charges de l'entreprise"
              chartData={expensesPieChartData}
              chartLabel={`Répartition des charges pour l'exercice ${forecast.startYear}`}
            />
            <div className="md:col-span-2">
              <h3 className="font-medium mb-1 col-span-2">
                Détail des Charges
              </h3>
              <DetailsList
                items={depensesDetails}
                amountClassName="text-xl"
                gridCols={2}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="soldes">
          <Card>
            <CardHeader>
              <CardTitle>Soldes Précédents</CardTitle>
              <CardDescription>Exercice: {forecast.startYear}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {[
                  { mois: "Janvier", value: 0 },
                  { mois: "Février", value: 265104 },
                  { mois: "Mars", value: 267290 },
                  { mois: "Avril", value: 33377 },
                  { mois: "Mai", value: 33523 },
                  { mois: "Juin", value: 26642 },
                  { mois: "Juillet", value: 26788 },
                  { mois: "Août", value: 26297 },
                  { mois: "Septembre", value: 26443 },
                  { mois: "Octobre", value: 26072 },
                  { mois: "Novembre", value: 26038 },
                  { mois: "Décembre", value: 25847 }
                ].map(({ mois, value }) => (
                  <div key={mois}>
                    <Card className="h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          {mois}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <span
                          className={`text-2xl font-bold ${
                            value < 0 ? "text-red-500" : "text-primary"
                          }`}
                        >
                          {value < 0 ? "-" : ""}
                          {Math.abs(value).toLocaleString()} $
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
