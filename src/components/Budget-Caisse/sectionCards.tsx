import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Chip } from "@heroui/chip";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

type ColorType =
  | "default"
  | "success"
  | "danger"
  | "warning"
  | "primary"
  | "secondary"
  | undefined;

export function SectionCards({ forecast }: { forecast: any }) {
  const sectionCardsData = [
    {
      title: "Bénéfices Net",
      amount: `$ ${forecast.financialResume.netIncome.toLocaleString("fr-FR")}`,
      change: "+12.5%",
      color: "success" as ColorType,
      icon: <TrendingUpIcon className="size-3" />
    },
    {
      title: "Dépenses",
      amount: `$ ${forecast.financialForecast.expenses.toLocaleString(
        "fr-FR"
      )}`,
      change: "-20%",
      color: "danger" as ColorType,
      icon: <TrendingDownIcon className="size-3" />
    },
    {
      title: "Recettes",
      amount: `$ ${forecast.salesRevenues.toLocaleString("fr-FR")}`,
      change: "+12.5%",
      color: "success" as ColorType,
      icon: <TrendingUpIcon className="size-3" />
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mb-6">
      {sectionCardsData.map((data) => (
        <SectionCard key={data.title} {...data} />
      ))}
    </div>
  );
}

function SectionCard({
  title,
  amount,
  change,
  color,
  icon
}: {
  title: string;
  amount: string;
  change: string;
  color?: ColorType;
  icon: React.ReactNode;
}) {
  return (
    <Card className="bg-gradient-to-t from-primary/5 to-card shadow-sm">
      <CardHeader className="relative">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl sm:text-3xl font-semibold tabular-nums">
          {amount}
        </CardTitle>
        <div className="absolute right-4 top-4">
          <Chip
            variant="bordered"
            startContent={icon}
            radius="full"
            color={color}
          >
            {change}
          </Chip>
        </div>
      </CardHeader>
    </Card>
  );
}
