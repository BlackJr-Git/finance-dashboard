"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { BarChart, PieChart, Activity, TrendingUp, Calendar, Users, Clock, AlertCircle } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useProjectStore } from "@/store";

export default function DashboardPage() {
  const params = useParams();
  const projectId = params?.project_id as string;
  const { getProjectById } = useProjectStore();
  const project = getProjectById(projectId) || { 
    id: projectId,
    title: "Projet financier",
    description: "Description du projet",
    lastModified: new Date().toLocaleDateString('fr-FR')
  };

  // Données fictives pour le tableau de bord (à remplacer par de vraies données)
  const financialMetrics = {
    totalRevenue: 125000,
    totalExpenses: 85000,
    profitMargin: 32,
    breakEvenPoint: 75000,
    workingCapital: 40000,
    cashPosition: 65000,
    totalInvestments: 120000,
    completionRate: 68,
    alerts: 2
  };
  
  // Fonction pour formater les montants en euros
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <ContentLayout title={`Tableau de bord - ${project.title}`}>
      <div className="flex flex-col space-y-6">
        
        {/* En-tête du projet avec informations clés */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                Dernière modification: {project.lastModified}
              </Badge>
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Avancement: {financialMetrics.completionRate}%
              </Badge>
            </div>
          </div>
          <Separator />
        </div>

        {/* Section des métriques clés */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Chiffre d&apos;affaires prévisionnel
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(financialMetrics.totalRevenue)}
              </div>
              <p className="text-xs text-muted-foreground">
                +{(financialMetrics.profitMargin / 2).toFixed(1)}% par rapport au plan
              </p>
              <Progress
                value={65}
                className="h-1 mt-2"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Seuil de rentabilité
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(financialMetrics.breakEvenPoint)}
              </div>
              <p className="text-xs text-muted-foreground">
                Atteint à {Math.round((financialMetrics.totalRevenue / financialMetrics.breakEvenPoint) * 100)}%
              </p>
              <Progress
                value={Math.min(100, (financialMetrics.totalRevenue / financialMetrics.breakEvenPoint) * 100)}
                className="h-1 mt-2"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Besoin en fonds de roulement
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(financialMetrics.workingCapital)}
              </div>
              <p className="text-xs text-muted-foreground">
                {(financialMetrics.workingCapital / financialMetrics.totalRevenue * 100).toFixed(1)}% du CA
              </p>
              <Progress
                value={(financialMetrics.cashPosition / financialMetrics.workingCapital) * 100}
                className="h-1 mt-2"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Marge bénéficiaire
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {financialMetrics.profitMargin}%
              </div>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(financialMetrics.totalRevenue - financialMetrics.totalExpenses)} net
              </p>
              <Progress
                value={financialMetrics.profitMargin}
                className="h-1 mt-2"
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Onglets de données principales */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-3 max-w-md">
            <TabsTrigger value="overview">Vue d&apos;ensemble</TabsTrigger>
            <TabsTrigger value="analysis">Analyses</TabsTrigger>
            <TabsTrigger value="forecasts">Prévisions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              {/* Graphique de répartition des revenus (simulé) */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Répartition des revenus</CardTitle>
                  <CardDescription>
                    Ventilation par catégorie de produits/services
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[240px] flex items-center justify-center bg-muted/20 rounded-md">
                    <div className="text-muted-foreground flex flex-col items-center">
                      <BarChart className="h-8 w-8 mb-2" />
                      <span>Graphique de répartition des revenus</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  Mise à jour: {new Date().toLocaleDateString('fr-FR')}
                </CardFooter>
              </Card>
              
              {/* Alertes et notifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Alertes Financières</CardTitle>
                  <CardDescription>
                    Points d&apos;attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {financialMetrics.alerts > 0 ? (
                      <>
                        <div className="flex items-start gap-2 pb-3 border-b">
                          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Besoin en trésorerie</p>
                            <p className="text-xs text-muted-foreground">
                              Pic de besoin en trésorerie prévu en juin 2025
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Délai client élevé</p>
                            <p className="text-xs text-muted-foreground">
                              Les délais de paiement des clients dépassent 60 jours
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex h-[180px] items-center justify-center">
                        <p className="text-muted-foreground">Aucune alerte actuellement</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Calendrier des échéances */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Calendrier Financier</CardTitle>
                  <CardDescription>
                    Principales échéances à venir
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Clôture trimestrielle</p>
                        <p className="text-xs text-muted-foreground">30 juin 2025</p>
                      </div>
                      <Badge variant="outline" className="text-xs">Dans 65 jours</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Présentation investisseurs</p>
                        <p className="text-xs text-muted-foreground">15 mai 2025</p>
                      </div>
                      <Badge variant="outline" className="text-xs">Dans 20 jours</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                      <div className="rounded-full bg-primary/10 p-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Révision du budget</p>
                        <p className="text-xs text-muted-foreground">10 mai 2025</p>
                      </div>
                      <Badge variant="outline" className="text-xs">Dans 15 jours</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Voir tout le calendrier
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Objectifs financiers */}
              <Card>
                <CardHeader>
                  <CardTitle>Objectifs financiers</CardTitle>
                  <CardDescription>
                    Progression vers les objectifs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Chiffre d&apos;affaires</p>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Réduction des coûts</p>
                        <span className="text-sm text-muted-foreground">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Marge brute</p>
                        <span className="text-sm text-muted-foreground">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Délai de paiement</p>
                        <span className="text-sm text-muted-foreground">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analyse Financière</CardTitle>
                <CardDescription>
                  Tendances et analyses détaillées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <Activity className="h-8 w-8 mb-2" />
                    <span>Analyses financières détaillées</span>
                    <p className="text-xs mt-2">Sélectionnez un module spécifique pour voir l&apos;analyse détaillée</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Télécharger le rapport</Button>
                <Button>Voir l&apos;analyse complète</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="forecasts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Prévisions Financières</CardTitle>
                <CardDescription>
                  Projections et scénarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <TrendingUp className="h-8 w-8 mb-2" />
                    <span>Prévisions et projections</span>
                    <p className="text-xs mt-2">Les données de prévision sont disponibles dans le module Budget</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Ajuster les paramètres</Button>
                <Button>Voir le module Budget</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
