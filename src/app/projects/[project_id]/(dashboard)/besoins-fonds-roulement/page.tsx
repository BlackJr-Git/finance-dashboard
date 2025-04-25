"use client";
import React from "react";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { WorkingCapitalAnalysis } from "@/components/BesoinsFondsRoulement/WorkingCapitalAnalysis";
import { Separator } from "@/components/ui/separator";

export default function BesoinsFondsRoulementPage() {
  return (
    <ContentLayout title="Besoin en Fonds de Roulement">
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
            <BreadcrumbPage>Besoin en Fonds de Roulement</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Besoin en Fonds de Roulement</h1>
        <p className="text-muted-foreground mb-6">Analyse des besoins en fonds de roulement et des ressources disponibles</p>
        <Separator className="mb-8" />
        <WorkingCapitalAnalysis />
      </div>
    </ContentLayout>
  );
}
