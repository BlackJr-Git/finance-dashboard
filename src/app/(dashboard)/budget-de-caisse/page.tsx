import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "@/lib/data/fake-data.json";
import { ChartAreaInteractive } from "@/components/Budget-Caisse/chartArea";
import { SectionCards } from "@/components/Budget-Caisse/sectionCards";
import { MoreForecastInfo } from "@/components/Budget-Caisse/moreForecastInfo";

export default function BudgetDeCaisse() {
  const forecast = data.forecasts;
  return (
    <ContentLayout title="Budget de Caisse">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Accueil</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Budget de Caisse</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Tabs defaultValue={forecast?.[0]?.startYear.toString()} className="mt-4">
        <TabsList defaultValue={forecast?.[0]?.startYear.toString()}>
          {forecast?.map((forecast) => (
            <TabsTrigger
              key={forecast.id}
              value={forecast.startYear.toString()}
            >
              {forecast.startYear}
            </TabsTrigger>
          ))}
        </TabsList>
        {forecast?.map((forecast) => (
          <TabsContent key={forecast.id} value={forecast.startYear.toString()}>
            <SectionCards forecast={forecast} />
            <ChartAreaInteractive forecast={forecast} />
            <MoreForecastInfo forecast={forecast} />
          </TabsContent>
        ))}
      </Tabs>
    </ContentLayout>
  );
}
