"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrendingUpIcon,
  PercentIcon,
  BanknoteIcon,
  FileDigitIcon,
  BarChart4Icon,
  CoinsIcon,
  ActivityIcon,
  PiggyBankIcon,
  WalletIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DollarSignIcon,
  ArrowRightIcon,
  LineChartIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as Collapsible from "@radix-ui/react-collapsible";

// Types
interface IncomeStatementItemProps {
  label: string;
  values: Record<string, number | null>;
  icon?: React.ReactNode;
  isExpandable?: boolean;
  subItems?: IncomeStatementItemProps[];
  isTotal?: boolean;
  variant?: "default" | "total" | "result" | "netResult";
  growth?: Record<string, number | null>; // Taux de croissance
}

// Années de prévision (colonnes)
const YEARS = ["Prévision 2023", "Prévision 2024", "Prévision 2025"];
const YEAR_KEYS = ["2023", "2024", "2025"];

// Palette de couleurs
const COLORS = {
  revenue: "#0ea5e9", // blue
  expenses: "#f97316", // orange
  profit: "#10b981", // green
  netProfit: "#14b8a6", // teal
  personnel: "#8b5cf6", // violet
  autres: "#ec4899", // pink
  accent1: "#6366f1", // indigo
  accent2: "#a855f7", // purple
  muted: "#94a3b8", // slate
};

// Constantes
const CURRENCY = "$";

// Utilitaires
const formatCurrency = (value: number | null): string => {
  if (value === null) return "-";
  return value.toLocaleString() + CURRENCY;
};

const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
};

// Composant pour les stats cards en haut de la page
const StatCard: React.FC<{
  title: string;
  value: number;
  previousValue?: number;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  color: string;
}> = ({ title, value, previousValue, icon, trend, color }) => {
  let growthPercent = 0;
  if (previousValue !== undefined && previousValue !== 0) {
    growthPercent = ((value - previousValue) / Math.abs(previousValue)) * 100;
  }

  const trendColor = trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-500";

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{formatCurrency(value)}</h3>
            
            {previousValue !== undefined && (
              <div className="flex items-center mt-2">
                <span className={`text-xs font-medium flex items-center gap-1 ${trendColor}`}>
                  {trend === "up" ? <ArrowUpIcon className="h-3 w-3" /> : 
                   trend === "down" ? <ArrowDownIcon className="h-3 w-3" /> : 
                   <ArrowRightIcon className="h-3 w-3" />}
                  {growthPercent.toFixed(1)}%
                </span>
                <span className="text-xs text-muted-foreground ml-2">vs 2023</span>
              </div>
            )}
          </div>
          
          <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
            <div style={{ color }} className="text-lg">
              {icon}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Composant pour chaque ligne de données
const IncomeStatementRow: React.FC<IncomeStatementItemProps & { yearKeys: string[], onToggle?: () => void }> = ({
  label,
  values,
  icon,
  isExpandable = false,
  subItems = [],
  isTotal = false,
  variant = "default",
  yearKeys,
  onToggle
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = subItems && subItems.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onToggle) onToggle();
  };

  // Styles conditionnels en fonction du type de ligne
  const rowStyles = cn(
    "grid gap-4 py-3 px-4 items-center border-b last:border-b-0 transition-colors",
    {
      "font-bold": isTotal || variant !== "default",
      "bg-orange-500/10": variant === "total",
      "bg-green-500/10": variant === "result",
      "bg-teal-600/10": variant === "netResult",
      "hover:bg-muted/50 cursor-pointer": hasSubItems,
      "!border-b-0": hasSubItems && isOpen,
      "rounded-t-md": hasSubItems && isOpen
    }
  );

  const labelStyles = cn(
    "text-foreground",
    {
      "text-orange-700": variant === "total",
      "text-green-700": variant === "result",
      "text-teal-800": variant === "netResult"
    }
  );

  const valueStyles = cn(
    "text-right font-medium",
    {
      "text-orange-700": variant === "total",
      "text-green-700": variant === "result",
      "text-teal-800": variant === "netResult"
    }
  );

  // Définition des colonnes de la grille
  let gridTemplateColumns = "1fr";
  yearKeys.forEach(() => {
    gridTemplateColumns += " 110px"; // 110px pour chaque année
  });

  return (
    <>
      <div
        className={rowStyles}
        style={{ gridTemplateColumns }}
        onClick={hasSubItems ? handleToggle : undefined}
      >
        <div className="flex items-center gap-2">
          {hasSubItems ? (
            <div className="text-muted-foreground transition-transform" style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          ) : (
            <div className="w-4" />
          )}
          {icon && <div className={labelStyles}>{icon}</div>}
          <span className={labelStyles}>{label}</span>
        </div>

        {/* Colonnes pour chaque année */}
        {yearKeys.map((year) => (
          <div key={year} className={valueStyles}>
            {values[year] !== null && values[year] !== 0 ? formatCurrency(values[year]!) : "0$"}
          </div>
        ))}
      </div>

      {/* Contenu accordéon pour les sous-items */}
      {hasSubItems && isOpen && (
        <div className="bg-accent/30 border-l-2 border-r-2 border-b-2 rounded-b-lg mb-2 overflow-hidden">
          {subItems.map((item, index) => (
            <IncomeStatementRow
              key={index}
              label={item.label}
              values={item.values}
              icon={item.icon}
              isExpandable={false}
              subItems={item.subItems}
              isTotal={item.isTotal}
              variant={item.variant}
              yearKeys={yearKeys}
            />
          ))}
        </div>
      )}
    </>
  );
};

// Composant pour l'en-tête du tableau
const IncomeStatementHeader: React.FC<{ yearKeys: string[] }> = ({ yearKeys }) => {
  // Définition des colonnes de la grille pour l'en-tête
  let gridTemplateColumns = "1fr";
  yearKeys.forEach(() => {
    gridTemplateColumns += " 110px"; // 110px pour chaque année
  });

  return (
    <div 
      className="grid gap-4 py-3 text-sm font-medium text-muted-foreground bg-muted/70 rounded-t-lg px-4" 
      style={{ gridTemplateColumns }}
    >
      <div>Éléments</div>
      {yearKeys.map((year) => (
        <div key={year} className="text-right">
          {year}
        </div>
      ))}
    </div>
  );
};

// Composant pour les graphiques de tendance
const TrendChart: React.FC<{
  data: any[];
  type: "bar" | "line" | "area";
  dataKeys: string[];
  colors: string[];
  height?: number;
}> = ({ data, type, dataKeys, colors, height = 300 }) => {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        {type === "bar" ? (
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)"
              }}
              formatter={(value: any) => [`${value.toLocaleString()}${CURRENCY}`, ""]}
            />
            <Legend />
            {dataKeys.map((key, index) => (
              <Bar 
                key={key} 
                dataKey={key} 
                name={key === "revenue" ? "Revenus" : 
                     key === "expenses" ? "Dépenses" : 
                     key === "profit" ? "Résultat" : key} 
                fill={colors[index % colors.length]} 
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        ) : type === "line" ? (
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)"
              }}
              formatter={(value: any) => [`${value.toLocaleString()}${CURRENCY}`, ""]}
            />
            <Legend />
            {dataKeys.map((key, index) => (
              <Line 
                key={key} 
                type="monotone" 
                dataKey={key} 
                name={key === "revenue" ? "Revenus" : 
                     key === "expenses" ? "Dépenses" : 
                     key === "profit" ? "Résultat" : key} 
                stroke={colors[index % colors.length]} 
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        ) : (
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)"
              }}
              formatter={(value: any) => [`${value.toLocaleString()}${CURRENCY}`, ""]}
            />
            <Legend />
            {dataKeys.map((key, index) => (
              <Area 
                key={key} 
                type="monotone" 
                dataKey={key} 
                name={key === "revenue" ? "Revenus" : 
                     key === "expenses" ? "Dépenses" : 
                     key === "profit" ? "Résultat" : key} 
                stroke={colors[index % colors.length]} 
                fill={`${colors[index % colors.length]}40`}
                stackId="1"
              />
            ))}
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

// Distribution Pie Chart 
const DistributionPieChart: React.FC<{
  data: any[];
  nameKey: string;
  dataKey: string;
  colors: string[];
  height?: number;
}> = ({ data, nameKey, dataKey, colors, height = 300 }) => {
  const validData = data.filter(item => item[dataKey] > 0);
  
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={validData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey={dataKey}
            nameKey={nameKey}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {validData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any) => [`${value.toLocaleString()}${CURRENCY}`, ""]}
            contentStyle={{
              backgroundColor: "var(--background)",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)"
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// Composant principal
export const IncomeStatement = () => {
  const [activeYear, setActiveYear] = useState<string>("2024");
  
  // Données pour le compte de résultat
  const incomeStatementData: IncomeStatementItemProps[] = [
    {
      label: "PRODUIT D&apos;EXPLOITATION",
      values: { "2023": 53775, "2024": 57174, "2025": 12615 },
      icon: <TrendingUpIcon className="h-4 w-4" />,
      isExpandable: true,
      subItems: [
        { 
          label: "Ventes de produits", 
          values: { "2023": 32265, "2024": 34304, "2025": 7569 },
          icon: <CoinsIcon className="h-4 w-4" />
        },
        { 
          label: "Prestations de services", 
          values: { "2023": 21510, "2024": 22870, "2025": 5046 },
          icon: <ActivityIcon className="h-4 w-4" />
        }
      ]
    },
    {
      label: "AUTRES ENTRÉES DE FONDS",
      values: { "2023": 0, "2024": 0, "2025": 0 },
      icon: <CoinsIcon className="h-4 w-4" />,
      isExpandable: true,
      subItems: [
        { 
          label: "Subventions d&apos;exploitation", 
          values: { "2023": 0, "2024": 0, "2025": 0 },
          icon: <PiggyBankIcon className="h-4 w-4" />
        }
      ]
    },
    {
      label: "CHARGES FIXES (CHARGES EXTERNES)",
      values: { "2023": 0, "2024": 0, "2025": 0 },
      icon: <BarChart4Icon className="h-4 w-4" />,
      isExpandable: true,
      subItems: [
        { 
          label: "Loyer et charges", 
          values: { "2023": 0, "2024": 0, "2025": 0 },
          icon: <FileDigitIcon className="h-4 w-4" />
        },
        { 
          label: "Assurances", 
          values: { "2023": 0, "2024": 0, "2025": 0 },
          icon: <FileDigitIcon className="h-4 w-4" />
        }
      ]
    },
    {
      label: "CHARGES DU PERSONNEL",
      values: { "2023": 1848, "2024": 1848, "2025": 1848 },
      icon: <BanknoteIcon className="h-4 w-4" />,
      isExpandable: true,
      subItems: [
        { 
          label: "Salaires", 
          values: { "2023": 1848, "2024": 1848, "2025": 1848 },
          icon: <BanknoteIcon className="h-4 w-4" />
        }
      ]
    },
    {
      label: "CHARGES SOCIALES",
      values: { "2023": 0, "2024": 0, "2025": 0 },
      icon: <PercentIcon className="h-4 w-4" />,
      isExpandable: true,
      subItems: [
        { 
          label: "Cotisations sociales", 
          values: { "2023": 0, "2024": 0, "2025": 0 },
          icon: <PercentIcon className="h-4 w-4" />
        }
      ]
    },
    {
      label: "TOTAL DEPENSES",
      values: { "2023": 1848, "2024": 1848, "2025": 1848 },
      variant: "total",
      isTotal: true,
    },
    {
      label: "RESULTAT NET AVANT IMPOT",
      values: { "2023": 53775, "2024": 57174, "2025": 12615 },
      variant: "result",
      isTotal: true,
    },
    {
      label: "RESULTAT NET",
      values: { "2023": 51927, "2024": 55326, "2025": 10767 },
      variant: "netResult",
      isTotal: true,
    },
  ];

  // Créer les données pour les graphiques
  const trendChartData = [
    { 
      name: "2023", 
      revenue: 53775, 
      expenses: 1848, 
      profit: 51927 
    },
    { 
      name: "2024", 
      revenue: 57174, 
      expenses: 1848, 
      profit: 55326 
    },
    { 
      name: "2025", 
      revenue: 12615, 
      expenses: 1848, 
      profit: 10767 
    }
  ];

  // Données pour le graphique de répartition des dépenses
  const expensesDistributionData = [
    { name: "Charges du personnel", value: 1848 },
    { name: "Charges fixes", value: 0 },
    { name: "Charges sociales", value: 0 }
  ];

  // Données pour le graphique de répartition des revenus
  const revenueDistributionData = [
    { name: "Ventes de produits", value: 34304 },
    { name: "Prestations de services", value: 22870 }
  ];

  // Calcul des croissances
  const revenueGrowth = calculateGrowth(trendChartData[1].revenue, trendChartData[0].revenue);
  const profitGrowth = calculateGrowth(trendChartData[1].profit, trendChartData[0].profit);
  const expensesGrowth = calculateGrowth(trendChartData[1].expenses, trendChartData[0].expenses);

  // Récupérer les valeurs pour les cartes de statistiques
  const currentYearData = trendChartData.find(item => item.name === activeYear) || trendChartData[1];
  const previousYearData = trendChartData[0]; // 2023 comme référence
  
  return (
    <div className="space-y-8">
      {/* Filtres */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Vue d&apos;ensemble</h2>
        <Tabs defaultValue="2024" onValueChange={setActiveYear} className="w-fit">
          <TabsList>
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2024">2024</TabsTrigger>
            <TabsTrigger value="2025">2025</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Revenus"
          value={currentYearData.revenue}
          previousValue={previousYearData.revenue}
          icon={<TrendingUpIcon className="h-5 w-5" />}
          trend={revenueGrowth > 0 ? "up" : revenueGrowth < 0 ? "down" : "neutral"}
          color={COLORS.revenue}
        />
        <StatCard
          title="Dépenses"
          value={currentYearData.expenses}
          previousValue={previousYearData.expenses}
          icon={<WalletIcon className="h-5 w-5" />}
          trend={expensesGrowth > 0 ? "down" : expensesGrowth < 0 ? "up" : "neutral"}
          color={COLORS.expenses}
        />
        <StatCard
          title="Résultat Net"
          value={currentYearData.profit}
          previousValue={previousYearData.profit}
          icon={<PiggyBankIcon className="h-5 w-5" />}
          trend={profitGrowth > 0 ? "up" : profitGrowth < 0 ? "down" : "neutral"}
          color={COLORS.profit}
        />
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart4Icon className="h-5 w-5 text-primary" />
              Évolution des résultats
            </CardTitle>
            <CardDescription>
              Comparaison des revenus, dépenses et résultats sur trois ans
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TrendChart
              data={trendChartData}
              type="bar"
              dataKeys={["revenue", "expenses", "profit"]}
              colors={[COLORS.revenue, COLORS.expenses, COLORS.profit]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChartIcon className="h-5 w-5 text-primary" />
              Tendances sur 3 ans
            </CardTitle>
            <CardDescription>
              Évolution des indicateurs financiers clés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TrendChart
              data={trendChartData}
              type="line"
              dataKeys={["revenue", "profit"]}
              colors={[COLORS.revenue, COLORS.profit]}
            />
          </CardContent>
        </Card>
      </div>

      {/* Distribution des revenus et dépenses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PiggyBankIcon className="h-5 w-5 text-primary" />
              Répartition des revenus ({activeYear})
            </CardTitle>
            <CardDescription>
              Distribution des sources de revenus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DistributionPieChart
              data={revenueDistributionData}
              nameKey="name"
              dataKey="value"
              colors={[COLORS.revenue, COLORS.accent1]}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WalletIcon className="h-5 w-5 text-primary" />
              Répartition des dépenses ({activeYear})
            </CardTitle>
            <CardDescription>
              Distribution des types de dépenses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DistributionPieChart
              data={expensesDistributionData}
              nameKey="name"
              dataKey="value"
              colors={[COLORS.expenses, COLORS.accent2, COLORS.personnel]}
            />
          </CardContent>
        </Card>
      </div>

      {/* Tableau des données détaillées */}
      <Card className="overflow-hidden mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSignIcon className="h-5 w-5 text-primary" />
            Compte de résultat détaillé
          </CardTitle>
          <CardDescription>
            Détail des produits et charges par année
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto">
            {/* En-tête du tableau */}
            <IncomeStatementHeader yearKeys={YEAR_KEYS} />
            
            {/* Corps du tableau avec les données */}
            <div className="space-y-0.5 mt-0.5">
              {incomeStatementData.map((item, index) => (
                <IncomeStatementRow
                  key={index}
                  label={item.label}
                  values={item.values}
                  icon={item.icon}
                  isExpandable={item.isExpandable}
                  subItems={item.subItems}
                  isTotal={item.isTotal}
                  variant={item.variant}
                  yearKeys={YEAR_KEYS}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
