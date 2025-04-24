import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CustomActiveShapePieChart } from "@/components/Budget-Caisse/custom-pie-chart";

interface PieChartSectionProps {
  title: string;
  description: string;
  chartData: { name: string; value: number; color: string }[];
  chartLabel: string;
}

export const PieChartSection: React.FC<PieChartSectionProps> = ({
  title,
  description,
  chartData,
  chartLabel
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center">
        <div className="h-[300px] w-full">
          <CustomActiveShapePieChart data={chartData} />
        </div>
        <p className="text-sm text-muted-foreground text-center mt-2">
          {chartLabel}
        </p>
      </div>
    </CardContent>
  </Card>
);
