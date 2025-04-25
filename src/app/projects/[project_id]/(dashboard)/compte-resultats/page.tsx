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
import { IncomeStatement } from "@/components/ComptesResultats";
import { Separator } from "@/components/ui/separator";

export default function ComptesResultatsPage() {
  return (
    <ContentLayout title="Comptes de Résultats">
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
            <BreadcrumbPage>Comptes de Résultats</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Comptes de Résultats</h1>
        <p className="text-muted-foreground mb-6">Vue d&apos;ensemble des revenus et dépenses sur plusieurs périodes</p>
        <Separator className="mb-8" />
        <IncomeStatement />
      </div>
    </ContentLayout>
  );
}
