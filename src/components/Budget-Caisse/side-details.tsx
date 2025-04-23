"use client";

import * as React from "react";
import { FileText, Percent, Calculator } from "lucide-react";
import { SideAccordion } from "@/components/ui/side-accordion";
import { Forecast } from "@/types";

interface SideDetailsProps {
  forecast: any; // Using any until we fix the type issues
}

export function SideDetailsBudget({ forecast }: SideDetailsProps) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <SideAccordion 
        title="Détails Budget" 
        side="right"
        width="350px"
        icon={<FileText className="h-4 w-4" />}
      >
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Budget de Caisse {forecast.startYear}</h3>
          
          <div className="space-y-4">
            <div className="border-b pb-2">
              <h4 className="font-medium text-sm text-muted-foreground">Résumé Financier</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="text-sm">Recettes Totales:</div>
                <div className="text-sm font-medium">{formatCurrency(forecast.salesRevenues)}</div>
                
                <div className="text-sm">Dépenses Totales:</div>
                <div className="text-sm font-medium">{formatCurrency(forecast.financialForecast.expenses)}</div>
                
                <div className="text-sm">Bénéfice Net:</div>
                <div className="text-sm font-medium">{formatCurrency(forecast.financialResume.netIncome)}</div>
              </div>
            </div>
            
            <div className="border-b pb-2">
              <h4 className="font-medium text-sm text-muted-foreground">Sources de Revenus</h4>
              <div className="mt-2 space-y-2">
                {forecast.forecastBudgets
                  .filter((budget: any) => budget.budgetType === "REVENUE")
                  .flatMap((budget: any) => budget.entries)
                  .map((entry: any, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-2">
                      <div className="text-sm">{entry.title}:</div>
                      <div className="text-sm font-medium">
                        {calculateYearlyTotal(entry)} €
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Répartition des Dépenses</h4>
              <div className="mt-2 space-y-2">
                {forecast.forecastBudgets
                  .filter((budget: any) => budget.budgetType === "PERSONNEL")
                  .flatMap((budget: any) => budget.entries)
                  .map((entry: any, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-2">
                      <div className="text-sm">{entry.title}:</div>
                      <div className="text-sm font-medium">
                        {calculateYearlyTotal(entry)} €
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </SideAccordion>
      
      <SideAccordion 
        title="Calcul de Rentabilité" 
        side="right"
        width="350px"
        icon={<Calculator className="h-4 w-4" />}
      >
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Analyse de Rentabilité</h3>
          
          <div className="space-y-4">
            <div className="border-b pb-2">
              <h4 className="font-medium text-sm text-muted-foreground">Indicateurs de Performance</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="text-sm">Marge Bénéficiaire:</div>
                <div className="text-sm font-medium">
                  {calculateProfitMargin(forecast)}%
                </div>
                
                <div className="text-sm">Rendement des Fonds Propres:</div>
                <div className="text-sm font-medium">
                  {calculateRoE(forecast)}%
                </div>
                
                <div className="text-sm">Ratio Dépenses/Revenus:</div>
                <div className="text-sm font-medium">
                  {calculateExpenseRatio(forecast)}%
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Seuil de Rentabilité</h4>
              <div className="mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm">Chiffre d&apos;affaires critique:</div>
                  <div className="text-sm font-medium">
                    {formatCurrency(forecast.financialForecast.expenses)} 
                  </div>
                  
                  <div className="text-sm">Marge de sécurité:</div>
                  <div className="text-sm font-medium">
                    {calculateSafetyMargin(forecast)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideAccordion>
    </div>
  );
}

// Utility functions
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', { 
    style: 'currency', 
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(amount);
}

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
  const margin = (forecast.financialResume.netIncome / forecast.salesRevenues) * 100;
  return margin.toFixed(1);
}

function calculateRoE(forecast: any): string {
  const roe = (forecast.financialResume.netIncome / forecast.financialResume.shareholdersEquity) * 100;
  return roe.toFixed(1);
}

function calculateExpenseRatio(forecast: any): string {
  const ratio = (forecast.financialForecast.expenses / forecast.salesRevenues) * 100;
  return ratio.toFixed(1);
}

function calculateSafetyMargin(forecast: any): string {
  const breakEven = forecast.financialForecast.expenses;
  const revenue = forecast.salesRevenues;
  const safetyMargin = ((revenue - breakEven) / revenue) * 100;
  return safetyMargin.toFixed(1);
}
