"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { calculateMonthlyDataOptimized } from "@/lib/calculate-monthly-data";
import { Forecast } from "@/types";

const chartConfig = {
  budget: {
    label: "Budget"
  },
  recettes: {
    label: "Recettes",
    color: "hsl(var(--chart-2))"
  },
  depenses: {
    label: "Dépenses",

    color: "hsl(var(--chart-1))"
  }
} satisfies ChartConfig;

// interface ChartAreaInteractiveProps {
//   forecast: Forecast;
// }

export function ChartAreaInteractive({ forecast }: any) {
  const [timeRange, setTimeRange] = React.useState("12m");

  // Calculate monthly data from the forecast
  const chartData = React.useMemo(() => {
    return calculateMonthlyDataOptimized(forecast);
  }, [forecast]);

  // Filter data based on selected time range
  const filteredData = React.useMemo(() => {
    if (timeRange === "12m") return chartData;

    // For demonstration purposes only - normally you'd filter based on actual dates
    // Since we have month names, we'll just take the last N months
    const monthCount = timeRange === "6m" ? 6 : 3;
    return chartData.slice(-monthCount);
  }, [chartData, timeRange]);

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Budget de Caisse {forecast.startYear}</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Visualisation des recettes et dépenses
          </span>
          <span className="@[540px]/card:hidden">Recettes et dépenses</span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={(value) => value && setTimeRange(value)}
            variant="outline"
            className="hidden sm:flex"
          >
            <ToggleGroupItem value="12m" className="h-8 px-2.5">
              12 mois
            </ToggleGroupItem>
            <ToggleGroupItem value="6m" className="h-8 px-2.5">
              6 mois
            </ToggleGroupItem>
            <ToggleGroupItem value="3m" className="h-8 px-2.5">
              3 mois
            </ToggleGroupItem>
          </ToggleGroup>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="sm:hidden flex w-40"
              aria-label="Sélectionner une période"
            >
              <SelectValue placeholder="12 mois" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="12m" className="rounded-lg">
                12 mois
              </SelectItem>
              <SelectItem value="6m" className="rounded-lg">
                6 mois
              </SelectItem>
              <SelectItem value="3m" className="rounded-lg">
                3 mois
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRecettes" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.recettes.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.recettes.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDepenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.depenses.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.depenses.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="hsl(var(--border))"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="mois"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => value}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="recettes"
              type="monotone"
              fill="url(#fillRecettes)"
              stroke={chartConfig.recettes.color}
              strokeWidth={2}
            />
            <Area
              dataKey="depenses"
              type="monotone"
              fill="url(#fillDepenses)"
              stroke={chartConfig.depenses.color}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
