"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CoinsIcon,
  BuildingIcon,
  CreditCardIcon,
  ArchiveIcon,
  BanknoteIcon,
  WalletIcon,
  ScaleIcon
} from "lucide-react";

interface BalanceSheetItemProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
}

const BalanceSheetItem: React.FC<BalanceSheetItemProps> = ({
  label,
  value,
  icon
}) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-2">
        {icon && <div className="text-muted-foreground">{icon}</div>}
        <span>{label}</span>
      </div>
      <span className="font-medium">{value.toLocaleString()}$</span>
    </div>
  );
};

interface BalanceSheetSectionProps {
  title: string;
  total: number;
  items: BalanceSheetItemProps[];
  icon?: React.ReactNode;
}

const BalanceSheetSection: React.FC<BalanceSheetSectionProps> = ({
  title,
  total,
  items,
  icon
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
        <CardDescription className="text-xl font-bold text-primary">
          {total.toLocaleString()}$
        </CardDescription>
      </CardHeader>
      {expanded && (
        <CardContent className="pt-0">
          {items.map((item, index) => (
            <BalanceSheetItem
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          ))}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-2 font-bold">
            <span>Total</span>
            <span>: {total.toLocaleString()}$</span>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

// Données d'exemple pour le graphique
const chartData = [
  { name: "Actifs", value: 10767 },
  { name: "Passifs", value: 10767 }
];

const COLORS = ["#4f46e5", "#16a34a", "#ea580c", "#e11d48"];

// Données pour le graphique de répartition des actifs
const assetsDistributionData = [
  { name: "Immobilisés", value: 0 },
  { name: "Circulants", value: 0 }
];

export const BalanceSheet = () => {
  // Données pour les actifs circulants
  const currentAssets = {
    title: "ACTIFS CIRCULANTS",
    total: 10767,
    items: [
      { label: "Stock", value: 0, icon: <ArchiveIcon className="h-4 w-4" /> },
      {
        label: "Créances clients",
        value: 1500,
        icon: <CreditCardIcon className="h-4 w-4" />
      },
      { label: "Créances TVA", value: 0, icon: <CoinsIcon className="h-4 w-4" /> },
      {
        label: "Trésorerie",
        value: 0,
        icon: <BanknoteIcon className="h-4 w-4" />
      }
    ],
    icon: <WalletIcon className="h-5 w-5" />
  };

  // Données pour les actifs immobilisés
  const fixedAssets = {
    title: "ACTIFS IMMOBILISÉS",
    total: 2000,
    items: [
      {
        label: "Amortissements",
        value: 2000,
        icon: <ChevronDownIcon className="h-4 w-4" />
      },
      {
        label: "Immobilisations (Net)",
        value: 0,
        icon: <BuildingIcon className="h-4 w-4" />
      }
    ],
    icon: <BuildingIcon className="h-5 w-5" />
  };

  // Données pour les dettes
  const liabilities = {
    title: "DETTES",
    total: 15000,
    items: [
      {
        label: "Prêts et avances",
        value: 15000,
        icon: <CreditCardIcon className="h-4 w-4" />
      },
      {
        label: "Dettes fournisseurs",
        value: 0,
        icon: <CreditCardIcon className="h-4 w-4" />
      },
      { label: "Dette TVA", value: 0, icon: <CoinsIcon className="h-4 w-4" /> },
      {
        label: "Dette fiscale",
        value: 0,
        icon: <BuildingIcon className="h-4 w-4" />
      }
    ],
    icon: <CreditCardIcon className="h-5 w-5" />
  };

  // Données pour les capitaux propres
  const equity = {
    title: "CAPITAUX PROPRES",
    total: 10767,
    items: [
      { label: "Capital", value: 0, icon: <CoinsIcon className="h-4 w-4" /> },
      {
        label: "Comptes courants",
        value: 4800,
        icon: <CreditCardIcon className="h-4 w-4" />
      },
      {
        label: "Réserves et Résultats",
        value: 10767,
        icon: <BanknoteIcon className="h-4 w-4" />
      }
    ],
    icon: <CoinsIcon className="h-5 w-5" />
  };

  // Calcul des totaux
  const totalAssets = currentAssets.total + fixedAssets.total;
  const totalLiabilities = liabilities.total + equity.total;

  // Données pour le graphique d'équilibre - Modification de la structure pour deux barres distinctes
  const balanceData = [
    { name: "Bilan", actifs: totalAssets > 0 ? totalAssets : 5000, passifs: totalLiabilities > 0 ? totalLiabilities : 5000 }
  ];

  // Données pour le graphique de répartition - Éviter les valeurs à 0 qui causent des problèmes d'affichage
  const distributionData = [
    { name: "Actifs circulants", value: currentAssets.total > 0 ? currentAssets.total : 1 },
    { name: "Actifs immobilisés", value: fixedAssets.total > 0 ? fixedAssets.total : 1 },
    { name: "Capitaux propres", value: equity.total },
    { name: "Dettes", value: liabilities.total > 0 ? liabilities.total : 1 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {/* Graphique d'équilibre */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScaleIcon className="h-5 w-5 text-primary" />
              Équilibre du bilan
            </CardTitle>
            <CardDescription>
              Visualisation de l&#39;équilibre entre actifs et passifs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={balanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <Tooltip 
                    formatter={(value, name) => {
                      return [`${value}$`, name === "actifs" ? "Actifs" : "Passifs"];
                    }}
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "8px"
                    }}
                    itemStyle={{ paddingTop: "2px" }}
                    cursor={{ opacity: 0.5 }}
                    isAnimationActive={true}
                  />
                  <Legend />
                  <Bar 
                    dataKey="actifs" 
                    fill="#4f46e5" 
                    radius={[4, 4, 0, 0]} 
                    name="Actifs"
                  />
                  <Bar 
                    dataKey="passifs" 
                    fill="#16a34a" 
                    radius={[4, 4, 0, 0]} 
                    name="Passifs"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Graphique répartition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Répartition des actifs
            </CardTitle>
            <CardDescription>
              Distribution des différents types d&#39;actifs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}$`, "Montant"]}
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      color: "red"
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <BalanceSheetSection
          title={currentAssets.title}
          total={currentAssets.total}
          items={currentAssets.items}
          icon={currentAssets.icon}
        />
        <BalanceSheetSection
          title={liabilities.title}
          total={liabilities.total}
          items={liabilities.items}
          icon={liabilities.icon}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <BalanceSheetSection
          title={fixedAssets.title}
          total={fixedAssets.total}
          items={fixedAssets.items}
          icon={fixedAssets.icon}
        />
        <BalanceSheetSection
          title={equity.title}
          total={equity.total}
          items={equity.items}
          icon={equity.icon}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <Card className="bg-blue-600 text-white">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-2">
              <WalletIcon className="h-6 w-6" />
              <span className="text-xl font-bold">TOTAL ACTIFS</span>
            </div>
            <span className="text-xl font-bold">{totalAssets.toLocaleString()} $</span>
          </CardContent>
        </Card>

        <Card className="bg-green-600 text-white">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="h-6 w-6" />
              <span className="text-xl font-bold">TOTAL PASSIFS</span>
            </div>
            <span className="text-xl font-bold">{totalLiabilities.toLocaleString()} $</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
