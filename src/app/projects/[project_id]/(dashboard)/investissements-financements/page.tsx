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
import { InvestmentFinancing } from "@/components/Investissements-Financements";
import { Separator } from "@/components/ui/separator";

export default function InvestissementsFinancementsPage() {
  return (
    <ContentLayout title="Investissements et financements">
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
            <BreadcrumbPage>Investissements et financements</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Plan de financement initial</h1>
        <p className="text-muted-foreground mb-6">Équilibrez vos besoins et ressources de financement</p>
        <Separator className="mb-8" />
        <InvestmentFinancing />
      </div>
    </ContentLayout>
  );
}
