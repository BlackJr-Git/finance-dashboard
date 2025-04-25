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
import { BreakEvenAnalysis } from "@/components/SeuilRentabilite/BreakEvenAnalysis";
import { Separator } from "@/components/ui/separator";

export default function SeuilsRentabilitesPage() {
  return (
    <ContentLayout title="Seuils de Rentabilité">
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
            <BreadcrumbPage>Seuils de Rentabilité</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Seuils de Rentabilité</h1>
        <p className="text-muted-foreground mb-6">Analyse du point mort et calcul des seuils de rentabilité</p>
        <Separator className="mb-8" />
        <BreakEvenAnalysis />
      </div>
    </ContentLayout>
  );
}
