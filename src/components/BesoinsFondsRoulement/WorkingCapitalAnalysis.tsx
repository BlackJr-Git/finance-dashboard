"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  CreditCardIcon,
  TruckIcon,
  CoinsIcon
} from "lucide-react";

// Types
interface WorkingCapitalItemProps {
  id: string;
  label: string;
  delayDays: number;
  values: Record<string, number | null>;
  icon?: React.ReactNode;
  variant?: "default" | "total" | "result";
  onDelayChange?: (id: string, newDelay: number) => void;
}

// Années de prévision (colonnes)
const YEARS = ["Prévision 2023", "Prévision 2024", "Prévision 2025"];
const YEAR_KEYS = ["2023", "2024", "2025"];

// Palette de couleurs
const COLORS = {
  needs: "#f97316", // orange
  resources: "#0ea5e9", // blue
  result: "#ec4899", // pink
  muted: "#94a3b8", // slate
};

// Constantes
const CURRENCY = "$";

// Utilitaires
const formatCurrency = (value: number | null): string => {
  if (value === null) return "-";
  return value.toLocaleString() + CURRENCY;
};

// Composant pour l'en-tête du tableau
const WorkingCapitalHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-[2fr_100px_1fr_1fr_1fr] gap-4 py-2 px-4 bg-muted text-muted-foreground font-medium text-sm rounded-t-md">
      <div>Poste</div>
      <div className="text-center">Délai jours</div>
      {YEARS.map((year, index) => (
        <div key={index} className="text-right">{year}</div>
      ))}
    </div>
  );
};

// Composant pour chaque ligne de données
const WorkingCapitalRow: React.FC<WorkingCapitalItemProps> = ({
  id,
  label,
  delayDays,
  values,
  icon,
  variant = "default",
  onDelayChange
}) => {
  const [delay, setDelay] = useState(delayDays);

  const handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDelay = parseInt(e.target.value) || 0;
    setDelay(newDelay);
    if (onDelayChange) {
      onDelayChange(id, newDelay);
    }
  };

  // Styles conditionnels en fonction du type de ligne
  const rowStyles = cn(
    "grid grid-cols-[2fr_100px_1fr_1fr_1fr] gap-4 py-3 px-4 items-center border-b last:border-b-0 transition-colors",
    {
      "font-bold": variant !== "default",
      "bg-orange-500/10": variant === "total" && label.toLowerCase().includes('besoin'),
      "bg-pink-500/10": variant === "result"
    }
  );

  const labelStyles = cn(
    "text-foreground",
    {
      "text-orange-700": variant === "total" && label.toLowerCase().includes('besoin'),
      "text-pink-700": variant === "result"
    }
  );

  const valueStyles = cn(
    "text-right font-medium",
    {
      "text-orange-700": variant === "total" && label.toLowerCase().includes('besoin'),
      "text-pink-700": variant === "result"
    }
  );

  const delayStyles = cn(
    "text-center font-medium",
    {
      "text-orange-700": variant === "total" && label.toLowerCase().includes('besoin'),
      "text-pink-700": variant === "result"
    }
  );

  return (
    <div className={rowStyles}>
      <div className={labelStyles}>
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{label}</span>
        </div>
      </div>
      
      <div className={delayStyles}>
        {variant === "total" || variant === "result" ? (
          delay
        ) : (
          <Input
            type="number"
            value={delay}
            onChange={handleDelayChange}
            className="h-8 w-16 text-center mx-auto"
            min="0"
          />
        )}
      </div>
      
      {YEAR_KEYS.map(year => (
        <div key={year} className={valueStyles}>
          {values[year] !== null && values[year] !== undefined
            ? formatCurrency(values[year] as number) 
            : "-"}
        </div>
      ))}
    </div>
  );
};

// Composant pour les sections (Besoins, Ressources)
const WorkingCapitalSection: React.FC<{
  title: string;
  items: WorkingCapitalItemProps[];
  onDelayChange: (id: string, newDelay: number) => void;
}> = ({ title, items, onDelayChange }) => {
  return (
    <>
      <div className="grid grid-cols-[2fr_100px_1fr_1fr_1fr] gap-4 py-2 px-4 text-white font-semibold text-sm">
        <div>{title}</div>
        <div className="col-span-4"></div>
      </div>
      
      {items.map((item) => (
        <WorkingCapitalRow
          key={item.id}
          id={item.id}
          label={item.label}
          delayDays={item.delayDays}
          values={item.values}
          icon={item.icon}
          variant={item.variant}
          onDelayChange={onDelayChange}
        />
      ))}
    </>
  );
};

// Composant principal d'analyse du besoin en fonds de roulement
export const WorkingCapitalAnalysis: React.FC = () => {
  const [needsData, setNeedsData] = useState<WorkingCapitalItemProps[]>([
    {
      id: "credit-client",
      label: "VOLUME CRÉDIT CLIENT HT",
      delayDays: 1,
      values: {
        "2023": 0,
        "2024": 0,
        "2025": 0
      },
      icon: <CreditCardIcon className="h-4 w-4" />
    }
  ]);

  const [resourcesData, setResourcesData] = useState<WorkingCapitalItemProps[]>([
    {
      id: "dettes-fournisseurs",
      label: "VOLUME DETTES FOURNISSEURS HT",
      delayDays: 1,
      values: {
        "2023": 147329,
        "2024": 156641,
        "2025": 34562
      },
      icon: <TruckIcon className="h-4 w-4" />
    }
  ]);

  // Calculer le BFR basé sur les données actuelles
  const calculateBFR = (): WorkingCapitalItemProps => {
    const resultValues: Record<string, number> = {
      "2023": 0,
      "2024": 0,
      "2025": 0
    };

    // Somme des besoins
    const needsSum: Record<string, number> = {
      "2023": 0,
      "2024": 0,
      "2025": 0
    };
    
    needsData.forEach(item => {
      YEAR_KEYS.forEach(year => {
        if (item.values[year] !== null) {
          needsSum[year] += item.values[year] as number;
        }
      });
    });

    // Somme des ressources
    const resourcesSum: Record<string, number> = {
      "2023": 0,
      "2024": 0,
      "2025": 0
    };
    
    resourcesData.forEach(item => {
      YEAR_KEYS.forEach(year => {
        if (item.values[year] !== null) {
          resourcesSum[year] += item.values[year] as number;
        }
      });
    });

    // Calcul du BFR (Besoins - Ressources)
    YEAR_KEYS.forEach(year => {
      resultValues[year] = needsSum[year] - resourcesSum[year];
    });

    return {
      id: "bfr-result",
      label: "BESOIN EN FONDS DE ROULEMENT",
      delayDays: 0,
      values: resultValues,
      icon: <CoinsIcon className="h-4 w-4" />,
      variant: "total"
    };
  };

  const bfrResult = calculateBFR();

  const handleNeedsDelayChange = (id: string, newDelay: number) => {
    setNeedsData(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, delayDays: newDelay } 
          : item
      )
    );
  };

  const handleResourcesDelayChange = (id: string, newDelay: number) => {
    setResourcesData(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, delayDays: newDelay } 
          : item
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Tableau du BFR */}
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <CoinsIcon className="h-5 w-5 text-muted-foreground" />
            Besoin en Fonds de Roulement
          </CardTitle>
          <CardDescription>
            Analyse des besoins en fonds de roulement et des ressources disponibles sur les trois prochaines années
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="border rounded-md overflow-hidden">
            <WorkingCapitalHeader />
            
            <div className="divide-y">
              <WorkingCapitalSection 
                title="Besoins" 
                items={needsData}
                onDelayChange={handleNeedsDelayChange}
              />
              
              <WorkingCapitalSection 
                title="Ressources" 
                items={resourcesData}
                onDelayChange={handleResourcesDelayChange}
              />
              
              <WorkingCapitalRow
                id={bfrResult.id}
                label={bfrResult.label}
                delayDays={bfrResult.delayDays}
                values={bfrResult.values}
                icon={bfrResult.icon}
                variant={bfrResult.variant}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Description et explication */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <CoinsIcon className="h-5 w-5 text-muted-foreground" />
            Interprétation
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Qu&apos;est-ce que le BFR ?</h4>
              <p className="text-sm text-muted-foreground">
                Le Besoin en Fonds de Roulement (BFR) représente le montant de trésorerie nécessaire pour financer le décalage 
                entre le paiement des dépenses et l&apos;encaissement des recettes. Un BFR négatif signifie que l&apos;entreprise dispose 
                de ressources supérieures à ses besoins, ce qui est favorable à sa trésorerie.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Calcul du BFR</h4>
              <div className="p-3 bg-muted/30 rounded-md">
                <p className="text-sm">
                  <strong>BFR</strong> = 
                  <span className="ml-2 inline-block p-1 bg-background rounded">
                    Besoins (Crédit clients + Stocks) - Ressources (Dettes fournisseurs)
                  </span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Votre BFR est négatif, ce qui indique que vos ressources à court terme couvrent vos besoins, 
                générant une trésorerie positive.
              </p>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};
