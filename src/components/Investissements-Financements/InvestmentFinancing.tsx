"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CoinsIcon,
  BuildingIcon,
  WalletIcon,
  ArchiveIcon,
  BanknoteIcon,
  UserIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  PiggyBankIcon,
  HandCoinsIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface FinanceItemProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
}

interface FinanceColumnProps {
  title: string;
  totalAmount: number;
  items: FinanceItemProps[];
  className?: string;
}

// Composant pour chaque élément financier (ligne)
const FinanceItem: React.FC<FinanceItemProps> = ({ title, amount, icon }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3 mb-3">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-2 text-primary">
          {icon}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <Badge variant="outline" className="font-mono text-sm">
        {amount > 0 ? `${amount}$` : "-"}
      </Badge>
    </div>
  );
};

// Composant pour chaque colonne (besoins ou ressources)
const FinanceColumn: React.FC<FinanceColumnProps> = ({
  title,
  totalAmount,
  items,
  className
}) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-2xl font-bold">
          {totalAmount}$
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {items.map((item, index) => (
          <FinanceItem
            key={index}
            title={item.title}
            amount={item.amount}
            icon={item.icon}
          />
        ))}
      </CardContent>
    </Card>
  );
};

// Composant pour la carte de total (en haut)
const TotalCard: React.FC<{ title: string; amount: number; type: "needs" | "resources" }> = ({
  title,
  amount,
  type
}) => {
  return (
    <Card className={cn(
      "flex flex-col justify-between",
      type === "needs" ? "bg-blue-600 text-white" : "bg-green-600 text-white"
    )}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-sm font-medium opacity-80">{title}</div>
            <div className="text-2xl font-bold">{amount}$</div>
          </div>
          <div className="text-3xl opacity-80">
            {type === "needs" ? 
              <WalletIcon className="h-6 w-6" /> : 
              <CoinsIcon className="h-6 w-6" />
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Composant principal
export const InvestmentFinancing = () => {
  // Données pour les besoins
  const needsItems = [
    {
      title: "Immobilisations incorporelles",
      amount: 100,
      icon: <GlobeIcon className="h-4 w-4" />
    },
    {
      title: "Immobilisations corporelles",
      amount: 200,
      icon: <BuildingIcon className="h-4 w-4" />
    },
    {
      title: "Stock de matières et produits",
      amount: 75,
      icon: <ArchiveIcon className="h-4 w-4" />
    },
    {
      title: "Trésorerie de départ",
      amount: 70,
      icon: <BanknoteIcon className="h-4 w-4" />
    }
  ];

  // Données pour les ressources
  const resourcesItems = [
    {
      title: "Apport personnel",
      amount: 150,
      icon: <UserIcon className="h-4 w-4" />
    },
    {
      title: "Emprunt",
      amount: 200,
      icon: <BanknoteIcon className="h-4 w-4" />
    },
    {
      title: "Subvention",
      amount: 98,
      icon: <HeartHandshakeIcon className="h-4 w-4" />
    },
    {
      title: "Autre financement",
      amount: 0,
      icon: <HandCoinsIcon className="h-4 w-4" />
    }
  ];

  // Calcul des totaux
  const totalNeeds = needsItems.reduce((sum, item) => sum + item.amount, 0);
  const totalResources = resourcesItems.reduce((sum, item) => sum + item.amount, 0);
  
  // Calcul de la différence
  const difference = totalResources - totalNeeds;
  const isBalanced = totalNeeds === totalResources;
  const hasSurplus = totalResources > totalNeeds;
  const hasDeficit = totalResources < totalNeeds;

  return (
    <div className="space-y-6">
      {/* Totaux en haut */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TotalCard 
          title="Total besoin" 
          amount={totalNeeds} 
          type="needs"
        />
        <TotalCard 
          title="Total ressources" 
          amount={totalResources} 
          type="resources"
        />
      </div>

      {/* Message d'état d'équilibre */}
      {!isBalanced && (
        <Card className={cn(
          "bg-opacity-80 border-2",
          hasSurplus ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"
        )}>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              {hasSurplus ? (
                <PiggyBankIcon className="h-5 w-5 text-green-500" />
              ) : (
                <WalletIcon className="h-5 w-5 text-red-500" />
              )}
              <span className={hasSurplus ? "text-green-700" : "text-red-700"}>
                {hasSurplus
                  ? `Vous avez un excédent de ${Math.abs(difference)}$`
                  : `Il vous manque ${Math.abs(difference)}$ pour équilibrer votre financement`}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Colonnes principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinanceColumn
          title="Besoins"
          totalAmount={totalNeeds}
          items={needsItems}
        />
        <FinanceColumn
          title="Ressources"
          totalAmount={totalResources}
          items={resourcesItems}
        />
      </div>
    </div>
  );
};
