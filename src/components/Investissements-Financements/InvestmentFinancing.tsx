"use client";

import React, { useState } from "react";
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
  HandCoinsIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as Collapsible from "@radix-ui/react-collapsible";

// Types
interface FinanceItemProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  subItems?: SubItemProps[];
}

interface SubItemProps {
  title: string;
  amount: number;
}

interface FinanceColumnProps {
  title: string;
  totalAmount: number;
  items: FinanceItemProps[];
  className?: string;
}

// Composant pour chaque sous-item (ligne intérieure d'un accordion)
const SubItem: React.FC<SubItemProps> = ({ title, amount }) => {
  return (
    <div className="flex items-center justify-between py-2 px-3 ml-10 border-b border-dashed border-gray-200">
      <div className="text-sm font-medium text-gray-600">{title}</div>
      <Badge variant="outline" className="font-mono text-sm">
        {amount > 0 ? `${amount}$` : "0$"}
      </Badge>
    </div>
  );
};

// Composant pour chaque élément financier avec accordion
const FinanceItem: React.FC<FinanceItemProps> = ({ title, amount, icon, subItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="mb-3"
    >
      <Collapsible.Trigger asChild className="w-full">
        <div className="flex items-center justify-between rounded-lg border p-3 cursor-pointer hover:bg-primary/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              {icon}
            </div>
            <div className="font-medium">{title}</div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-sm">
              {amount > 0 ? `${amount}$` : "0$"}
            </Badge>
            {hasSubItems && (
              <div className="text-gray-500">
                {isOpen ? (
                  <ChevronUpIcon className="h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4" />
                )}
              </div>
            )}
          </div>
        </div>
      </Collapsible.Trigger>
      
      {hasSubItems && (
        <Collapsible.Content className="overflow-hidden border-x border-b rounded-b-lg bg-gray-50">
          <div className="py-1 space-y-1">
            {subItems.map((subItem, index) => (
              <SubItem
                key={index}
                title={subItem.title}
                amount={subItem.amount}
              />
            ))}
          </div>
        </Collapsible.Content>
      )}
    </Collapsible.Root>
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
            subItems={item.subItems}
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
      amount: 0,
      icon: <GlobeIcon className="h-4 w-4" />,
      subItems: [
        { title: "Frais d'établissements", amount: 0 },
        { title: "Frais d'ouverture de comptes", amount: 0 },
        { title: "Logiciels, Formations", amount: 0 },
        { title: "Dépôt marque, brevet, modèle", amount: 0 },
        { title: "Droits d'entrée", amount: 0 },
        { title: "Achat fond de commerce ou parts", amount: 0 },
        { title: "Droit au bail", amount: 0 },
        { title: "Caution ou dépôt de garantie", amount: 0 },
        { title: "Frais de dossier", amount: 0 },
        { title: "Frais de notaire ou d'avocat", amount: 0 }
      ]
    },
    {
      title: "Immobilisations corporelles",
      amount: 0,
      icon: <BuildingIcon className="h-4 w-4" />,
      subItems: [
        { title: "Enseigne et éléments de communication", amount: 0 },
        { title: "Achat immobilier", amount: 0 },
        { title: "Travaux et aménagements", amount: 0 },
        { title: "Matériel", amount: 0 },
        { title: "Matériel de bureau", amount: 0 }
      ]
    },
    {
      title: "Stock de matières et produits",
      amount: 0,
      icon: <ArchiveIcon className="h-4 w-4" />
    },
    {
      title: "Trésorerie de départ",
      amount: 0,
      icon: <BanknoteIcon className="h-4 w-4" />
    }
  ];

  // Données pour les ressources
  const resourcesItems = [
    {
      title: "Apport personnel",
      amount: 0,
      icon: <UserIcon className="h-4 w-4" />,
      subItems: [
        { title: "Apport personnel", amount: 0 },
        { title: "Apport familial", amount: 0 }
      ]
    },
    {
      title: "Emprunt",
      amount: 0,
      icon: <BanknoteIcon className="h-4 w-4" />,
      subItems: [
        { title: "Subventions", amount: 0 },
        { title: "Prêt bancaire", amount: 0 }
      ]
    },
    {
      title: "Subvention",
      amount: 0,
      icon: <HeartHandshakeIcon className="h-4 w-4" />
    },
    {
      title: "Autre financement",
      amount: 0,
      icon: <HandCoinsIcon className="h-4 w-4" />
    }
  ];

  // Calcul des totaux, avec prise en compte de sous-items
  const calculateTotalWithSubItems = (items: FinanceItemProps[]): number => {
    return items.reduce((sum: number, item: FinanceItemProps) => {
      if (item.subItems && item.subItems.length > 0) {
        // Mise à jour du montant de l'item parent en fonction de ses sous-items
        item.amount = item.subItems.reduce((subSum: number, subItem: SubItemProps) => subSum + subItem.amount, 0);
      }
      return sum + item.amount;
    }, 0);
  };

  const totalNeeds = calculateTotalWithSubItems(needsItems);
  const totalResources = calculateTotalWithSubItems(resourcesItems);
  
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
