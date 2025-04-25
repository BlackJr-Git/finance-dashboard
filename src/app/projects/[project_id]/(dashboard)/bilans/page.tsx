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
import { BalanceSheet } from "@/components/Bilans";
import { Separator } from "@/components/ui/separator";

export default function BilansPages() {
  return (
    <ContentLayout title="Bilans">
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
            <BreadcrumbPage>Bilans</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-2">Bilan Financier</h1>
        <p className="text-muted-foreground mb-6">Vue d&apos;ensemble des actifs et passifs de l&apos;entreprise</p>
        <Separator className="mb-8" />
        <BalanceSheet />
      </div>
    </ContentLayout>
  );
}
