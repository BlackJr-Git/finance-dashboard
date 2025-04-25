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
interface BreakEvenItemProps {
  label: string;
  values: Record<string, number | null>;
  icon?: React.ReactNode;
  isExpandable?: boolean;
  subItems?: BreakEvenItemProps[];
  isTotal?: boolean;
  variant?: "default" | "total" | "result" | "breakEven" | "surplus";
}

// Années de prévision (colonnes)
const YEARS = ["Prévision 2023", "Prévision 2024", "Prévision 2025"];
const YEAR_KEYS = ["2023", "2024", "2025"];

// Palette de couleurs
const COLORS = {
  revenue: "#0ea5e9", // blue
  expenses: "#f97316", // orange
  profit: "#10b981", // green
  breakEven: "#22d3ee", // cyan
  surplus: "#f59e0b", // amber
  costs: "#f43f5e", // rose
  variableCosts: "#a855f7", // purple
  fixedCosts: "#ec4899", // pink
  muted: "#94a3b8", // slate
};

// Constantes
const CURRENCY = "$";

// Utilitaires
const formatCurrency = (value: number | null): string => {
  if (value === null) return "-";
  return value.toLocaleString() + CURRENCY;
};

const formatPercent = (value: number | null): string => {
  if (value === null) return "-";
  return value + "%";
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
const BreakEvenRow: React.FC<BreakEvenItemProps & { yearKeys: string[], onToggle?: () => void }> = ({
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
      "bg-cyan-500/10": variant === "breakEven",
      "bg-amber-500/10": variant === "surplus",
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
      "text-cyan-700": variant === "breakEven",
      "text-amber-700": variant === "surplus"
    }
  );

  const valueStyles = cn(
    "text-right font-medium",
    {
      "text-orange-700": variant === "total",
      "text-green-700": variant === "result",
      "text-cyan-700": variant === "breakEven",
      "text-amber-700": variant === "surplus"
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
          {hasSubItems && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
              className="p-1 rounded-sm hover:bg-muted/80 focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {isOpen ? 
                <ChevronUpIcon className="h-4 w-4 text-muted-foreground" /> : 
                <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
              }
            </button>
          )}
          
          {icon && <span className="text-muted-foreground">{icon}</span>}
          
          <span className={labelStyles}>{label}</span>
        </div>
        
        {yearKeys.map(year => (
          <div key={year} className={valueStyles}>
            {values[year] !== null && values[year] !== undefined
              ? (typeof values[year] === 'number' && label.toLowerCase().includes('taux') 
                ? formatPercent(values[year] as number) 
                : formatCurrency(values[year] as number))
              : "-"}
          </div>
        ))}
      </div>
      
      {/* Sous-éléments si développé */}
      {hasSubItems && isOpen && (
        <div className="bg-muted/30 rounded-b-md mb-2">
          {subItems.map((item, idx) => (
            <BreakEvenRow
              key={idx}
              label={item.label}
              values={item.values}
              icon={item.icon}
              isExpandable={item.isExpandable}
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
const BreakEvenHeader: React.FC<{ yearKeys: string[] }> = ({ yearKeys }) => {
  // Définition des colonnes de la grille pour l'en-tête
  let gridTemplateColumns = "1fr";
  yearKeys.forEach(() => {
    gridTemplateColumns += " 110px"; // 110px pour chaque année
  });

  return (
    <div 
      className="grid gap-4 py-2 px-4 bg-muted text-muted-foreground font-medium text-sm rounded-t-md"
      style={{ gridTemplateColumns }}
    >
      <div>Poste</div>
      {YEARS.map((year, index) => (
        <div key={index} className="text-right">{year}</div>
      ))}
    </div>
  );
};

// Composant pour les graphiques de tendance
const BreakEvenChart: React.FC<{
  data: any[];
  type: "area" | "bar" | "line";
  dataKeys: string[];
  colors: string[];
  height?: number;
}> = ({ data, type, dataKeys, colors, height = 300 }) => {
  const renderTooltip = (props: any) => {
    const { active, payload } = props;
    
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-md shadow-md">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm font-medium">
                {entry.name}: {formatCurrency(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      {type === "area" ? (
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis 
            tick={{ fontSize: 12 }} 
            stroke="#94a3b8"
            tickFormatter={(value) => `${value}${CURRENCY}`}
          />
          <Tooltip content={renderTooltip} />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "10px" }}
            formatter={(value) => <span className="text-sm font-medium">{value}</span>}
          />
          
          {dataKeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              name={key}
              fill={colors[index % colors.length]}
              stroke={colors[index % colors.length]}
              stackId="1"
              fillOpacity={0.6}
            />
          ))}
        </AreaChart>
      ) : type === "bar" ? (
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis 
            tick={{ fontSize: 12 }} 
            stroke="#94a3b8"
            tickFormatter={(value) => `${value}${CURRENCY}`}
          />
          <Tooltip content={renderTooltip} />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "10px" }}
            formatter={(value) => <span className="text-sm font-medium">{value}</span>}
          />
          
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              type="monotone"
              dataKey={key}
              name={key}
              fill={colors[index % colors.length]}
              stroke={colors[index % colors.length]}
            />
          ))}
        </BarChart>
      ) : (
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
          <YAxis 
            tick={{ fontSize: 12 }} 
            stroke="#94a3b8"
            tickFormatter={(value) => `${value}${CURRENCY}`}
          />
          <Tooltip content={renderTooltip} />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "10px" }}
            formatter={(value) => <span className="text-sm font-medium">{value}</span>}
          />
          
          {dataKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              name={key}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

// Composant pour le seuil de rentabilité (Break-Even Point Chart)
const BreakEvenPointChart: React.FC<{
  data: any[];
  height?: number;
}> = ({ data, height = 400 }) => {
  const renderTooltip = (props: any) => {
    const { active, payload, label } = props;
    
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-md shadow-md">
          <p className="text-sm font-bold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm font-medium">
                {entry.name}: {formatCurrency(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12 }} 
          stroke="#94a3b8" 
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          stroke="#94a3b8"
          tickFormatter={(value) => `${value}${CURRENCY}`}
        />
        <Tooltip content={renderTooltip} />
        <Legend
          verticalAlign="bottom"
          wrapperStyle={{ paddingTop: "10px" }}
          formatter={(value) => <span className="text-sm font-medium">{value}</span>}
        />
        
        <Line
          type="monotone"
          dataKey="revenue"
          name="Ventes"
          stroke={COLORS.revenue}
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="fixedCosts"
          name="Coûts Fixes"
          stroke={COLORS.fixedCosts}
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="variableCosts"
          name="Coûts Variables"
          stroke={COLORS.variableCosts}
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="totalCosts"
          name="Coûts Totaux"
          stroke={COLORS.costs}
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="breakEvenPoint"
          name="Seuil de Rentabilité"
          stroke={COLORS.breakEven}
          strokeWidth={3}
          strokeDasharray="5 5"
          dot={{ r: 5, fill: COLORS.breakEven }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Mock data for the break-even analysis based on the screenshot
const breakEvenData: BreakEvenItemProps[] = [
  {
    label: "Ventes + Production réelle",
    icon: <BanknoteIcon className="h-4 w-4" />,
    values: {
      "2023": 53775,
      "2024": 57174,
      "2025": 12615
    },
    isExpandable: false,
    subItems: [],
    isTotal: false
  },
  {
    label: "Marge sur coûts variables",
    icon: <TrendingUpIcon className="h-4 w-4" />,
    values: {
      "2023": 53775,
      "2024": 57174,
      "2025": 12615
    },
    isExpandable: false,
    subItems: [],
    isTotal: false
  },
  {
    label: "Taux de marge sur coûts variables",
    icon: <PercentIcon className="h-4 w-4" />,
    values: {
      "2023": 1,
      "2024": 1,
      "2025": 1
    },
    isExpandable: false,
    subItems: [],
    isTotal: false
  },
  {
    label: "Coûts fixes",
    icon: <FileDigitIcon className="h-4 w-4" />,
    values: {
      "2023": 0,
      "2024": 0,
      "2025": 0
    },
    isExpandable: false,
    subItems: [],
    isTotal: false
  },
  {
    label: "Total des charges",
    icon: <ActivityIcon className="h-4 w-4" />,
    values: {
      "2023": 0,
      "2024": 0,
      "2025": 0
    },
    isExpandable: false,
    subItems: [],
    isTotal: true,
    variant: "total"
  },
  {
    label: "Résultat courant avant impôts",
    icon: <PiggyBankIcon className="h-4 w-4" />,
    values: {
      "2023": 53775,
      "2024": 57174,
      "2025": 12615
    },
    isExpandable: false,
    subItems: [],
    isTotal: false,
    variant: "result"
  },
  {
    label: "SEUIL DE RENTABILITÉ (CHIFFRE D'AFFAIRES)",
    icon: <BarChart4Icon className="h-4 w-4" />,
    values: {
      "2023": 0,
      "2024": 0,
      "2025": 0
    },
    isExpandable: false,
    subItems: [],
    isTotal: false,
    variant: "breakEven"
  },
  {
    label: "EXCÉDENT / INSUFFISANCE",
    icon: <CoinsIcon className="h-4 w-4" />,
    values: {
      "2023": 53775,
      "2024": 57174,
      "2025": 12615
    },
    isExpandable: false,
    subItems: [],
    isTotal: false,
    variant: "surplus"
  }
];

// Données pour les graphiques
const chartData = [
  { name: "Jan", revenue: 4500, costs: 3000, profit: 1500 },
  { name: "Fév", revenue: 5000, costs: 3200, profit: 1800 },
  { name: "Mar", revenue: 5500, costs: 3500, profit: 2000 },
  { name: "Avr", revenue: 6000, costs: 3800, profit: 2200 },
  { name: "Mai", revenue: 6500, costs: 4000, profit: 2500 },
  { name: "Jui", revenue: 7000, costs: 4200, profit: 2800 },
  { name: "Jul", revenue: 7500, costs: 4500, profit: 3000 },
  { name: "Aoû", revenue: 8000, costs: 4800, profit: 3200 },
  { name: "Sep", revenue: 7800, costs: 4700, profit: 3100 },
  { name: "Oct", revenue: 7600, costs: 4600, profit: 3000 },
  { name: "Nov", revenue: 7400, costs: 4500, profit: 2900 },
  { name: "Déc", revenue: 7200, costs: 4400, profit: 2800 },
];

// Données pour le graphique du seuil de rentabilité
const breakEvenChartData = [
  { name: "0%", revenue: 0, fixedCosts: 4000, variableCosts: 0, totalCosts: 4000, breakEvenPoint: 0 },
  { name: "25%", revenue: 2500, fixedCosts: 4000, variableCosts: 1250, totalCosts: 5250, breakEvenPoint: 0 },
  { name: "50%", revenue: 5000, fixedCosts: 4000, variableCosts: 2500, totalCosts: 6500, breakEvenPoint: 8000 },
  { name: "75%", revenue: 7500, fixedCosts: 4000, variableCosts: 3750, totalCosts: 7750, breakEvenPoint: 8000 },
  { name: "100%", revenue: 10000, fixedCosts: 4000, variableCosts: 5000, totalCosts: 9000, breakEvenPoint: 8000 },
  { name: "125%", revenue: 12500, fixedCosts: 4000, variableCosts: 6250, totalCosts: 10250, breakEvenPoint: 8000 },
  { name: "150%", revenue: 15000, fixedCosts: 4000, variableCosts: 7500, totalCosts: 11500, breakEvenPoint: 8000 },
];

// Composant principal d'analyse du seuil de rentabilité
export const BreakEvenAnalysis: React.FC = () => {
  // Cartes statistiques en haut de la page
  const stats = [
    { 
      title: "Chiffre d'Affaires 2024", 
      value: 57174, 
      previousValue: 53775, 
      icon: <BanknoteIcon className="h-5 w-5" />, 
      trend: "up" as const, 
      color: COLORS.revenue 
    },
    { 
      title: "Seuil de Rentabilité", 
      value: 0, 
      icon: <BarChart4Icon className="h-5 w-5" />, 
      trend: "neutral" as const, 
      color: COLORS.breakEven 
    },
    { 
      title: "Marge de Sécurité", 
      value: 57174, 
      icon: <TrendingUpIcon className="h-5 w-5" />, 
      trend: "up" as const, 
      color: COLORS.profit 
    },
    { 
      title: "Indice de Sécurité", 
      value: 100, 
      icon: <PercentIcon className="h-5 w-5" />, 
      trend: "neutral" as const, 
      color: COLORS.surplus 
    },
  ];

  return (
    <div className="space-y-8">
      {/* Cartes statistiques */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title}
            value={stat.value}
            previousValue={stat.previousValue}
            icon={stat.icon}
            trend={stat.trend}
            color={stat.color}
          />
        ))}
      </div> */}
      
      {/* Tableau du seuil de rentabilité */}
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <BarChart4Icon className="h-5 w-5 text-muted-foreground" />
            Analyse du Seuil de Rentabilité
          </CardTitle>
          <CardDescription>
            Analyse détaillée du point mort et calcul du seuil de rentabilité sur les trois prochaines années
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="border rounded-md overflow-hidden">
            <BreakEvenHeader yearKeys={YEAR_KEYS} />
            
            <div className="divide-y">
              {breakEvenData.map((item, index) => (
                <BreakEvenRow
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
      
      {/* Onglets pour les graphiques */}
      {/* <Tabs defaultValue="breakEvenPoint" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="breakEvenPoint">Point Mort</TabsTrigger>
          <TabsTrigger value="trends">Tendances</TabsTrigger>
          <TabsTrigger value="evolution">Évolution</TabsTrigger>
        </TabsList>
        
        <TabsContent value="breakEvenPoint">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <LineChartIcon className="h-5 w-5 text-muted-foreground" />
                Graphique du Seuil de Rentabilité
              </CardTitle>
              <CardDescription>
                Visualisation du point mort où les revenus croisent les coûts totaux
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <BreakEvenPointChart 
                data={breakEvenChartData} 
                height={400}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Formule du Seuil de Rentabilité</h4>
                  <div className="p-4 bg-muted/30 rounded-md">
                    <p className="text-sm">
                      <strong>Seuil de Rentabilité</strong> = 
                      <span className="ml-2 inline-block p-1 bg-background rounded">
                        Coûts Fixes / Taux de Marge sur Coûts Variables
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Interprétation</h4>
                  <p className="text-sm text-muted-foreground">
                    Le seuil de rentabilité représente le montant de chiffre d&apos;affaires à partir duquel votre entreprise devient rentable. En dessous de ce seuil, l&apos;entreprise est en perte.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <BarChart4Icon className="h-5 w-5 text-muted-foreground" />
                Tendances Mensuelles
              </CardTitle>
              <CardDescription>
                Évolution mensuelle des revenus, coûts et profits
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <BreakEvenChart 
                data={chartData} 
                type="bar"
                dataKeys={["revenue", "costs", "profit"]}
                colors={[COLORS.revenue, COLORS.costs, COLORS.profit]}
                height={400}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="evolution">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <TrendingUpIcon className="h-5 w-5 text-muted-foreground" />
                Évolution Pluriannuelle
              </CardTitle>
              <CardDescription>
                Comparaison du chiffre d&apos;affaires et du seuil de rentabilité sur 3 ans
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <BreakEvenChart 
                data={[
                  { name: "2023", revenue: 53775, breakEvenPoint: 0, surplus: 53775 },
                  { name: "2024", revenue: 57174, breakEvenPoint: 0, surplus: 57174 },
                  { name: "2025", revenue: 12615, breakEvenPoint: 0, surplus: 12615 }
                ]} 
                type="bar"
                dataKeys={["revenue", "breakEvenPoint", "surplus"]}
                colors={[COLORS.revenue, COLORS.breakEven, COLORS.surplus]}
                height={400}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
      
      {/* Notes explicatives */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <FileDigitIcon className="h-5 w-5 text-muted-foreground" />
            Notes Explicatives
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Marge de Sécurité</h4>
              <p className="text-sm text-muted-foreground">
                La marge de sécurité représente la différence entre le chiffre d&apos;affaires prévu et le seuil de rentabilité. Elle indique de combien les ventes peuvent diminuer avant que l&apos;entreprise ne commence à perdre de l&apos;argent.
              </p>
              <div className="p-3 bg-muted/30 rounded-md">
                <p className="text-sm">
                  <strong>Marge de Sécurité</strong> = 
                  <span className="ml-2 inline-block p-1 bg-background rounded">
                    Chiffre d&apos;Affaires - Seuil de Rentabilité
                  </span>
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Indice de Sécurité</h4>
              <p className="text-sm text-muted-foreground">
                L&apos;indice de sécurité exprime la marge de sécurité en pourcentage du chiffre d&apos;affaires. Plus cet indice est élevé, plus l&apos;entreprise a de la marge pour absorber une baisse des ventes.
              </p>
              <div className="p-3 bg-muted/30 rounded-md">
                <p className="text-sm">
                  <strong>Indice de Sécurité</strong> = 
                  <span className="ml-2 inline-block p-1 bg-background rounded">
                    (Marge de Sécurité / Chiffre d&apos;Affaires) × 100
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};
