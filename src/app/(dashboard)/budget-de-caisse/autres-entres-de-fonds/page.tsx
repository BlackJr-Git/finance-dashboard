"use client"
import React from "react";
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
import { SideDetailsBudget } from "@/components/Budget-Caisse/side-details";
import { MoreForecastInfo } from "@/components/Budget-Caisse/moreForecastInfo";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Copy, Trash2, Eye } from "lucide-react";
import { useState } from "react";
import { ModifyEntryModal } from "@/components/Budget-Caisse/ModifyEntryModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const initialItems = [
  { id: 1, label: "Subventions", description: "Aides financières reçues de l'État ou d'organismes." },
  { id: 2, label: "Prêt bancaire", description: "Sommes empruntées auprès d'une banque." },
  { id: 3, label: "Apport personnel", description: "Investissement personnel dans le projet." },
  { id: 4, label: "Apport familial", description: "Soutien financier de la famille." }
];

export default function AutresEntresDeFonds() {
  const [items, setItems] = useState(initialItems);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [entryValues, setEntryValues] = useState<{ [id: number]: number[] }>({});
  const [visualiseOpen, setVisualiseOpen] = useState(false);
  const [visualiseId, setVisualiseId] = useState<number | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = (id: number) => {
    setEditingId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingId(null);
  };

  const handleModalSave = (values: number[]) => {
    if (editingId != null) {
      setEntryValues(prev => ({ ...prev, [editingId]: values }));
    }
    setModalOpen(false);
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleDuplicate = (id: number) => {
    const item = items.find(i => i.id === id);
    if (item) {
      setItems([
        ...items,
        { ...item, id: Math.max(...items.map(i => i.id)) + 1, label: item.label + " (copie)" }
      ]);
    }
  };

  const handleAdd = () => {
    setCreateModalOpen(true);
  };

  const handleCreateSave = () => {
    if (newLabel.trim()) {
      setItems([
        ...items,
        {
          id: Math.max(...items.map(i => i.id)) + 1,
          label: newLabel,
          description: newDescription
        }
      ]);
      setNewLabel("");
      setNewDescription("");
      setCreateModalOpen(false);
    }
  };

  const handleCreateCancel = () => {
    setNewLabel("");
    setNewDescription("");
    setCreateModalOpen(false);
  };

  const handleVisualise = (id: number) => {
    setVisualiseId(id);
    setVisualiseOpen(true);
  };

  const handleVisualiseClose = () => {
    setVisualiseOpen(false);
    setVisualiseId(null);
  };

  return (
    <ContentLayout title="Autres entrées de fonds">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/budget-de-caisse">Budget de Caisse</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Autres entrées de fonds</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {items.map(item => {
          const values = entryValues[item.id] || Array(12).fill(0);
          const total = values.reduce((sum, v) => sum + (Number(v) || 0), 0);
          return (
            <Card key={item.id}>
              <div className="flex flex-row items-center justify-between px-4 py-3">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg font-semibold mb-1 truncate">{item.label}</CardTitle>
                  <div className="text-muted-foreground text-sm mb-1">
                    {item.description}
                  </div>
                  <div className="font-bold text-primary text-xl">
                    {total.toLocaleString()} $
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end ml-4">
                  <Button size="sm" variant="secondary" onClick={() => handleVisualise(item.id)} className="w-32 justify-start">
                    <Eye className="w-4 h-4 mr-1" /> Visualiser
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleUpdate(item.id)} className="w-32 justify-start">
                    <Edit className="w-4 h-4 mr-1" /> Modifier
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDuplicate(item.id)} className="w-32 justify-start">
                    <Copy className="w-4 h-4 mr-1" /> Dupliquer
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)} className="w-32 justify-start">
                    <Trash2 className="w-4 h-4 mr-1" /> Supprimer
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
        {/* Add new element card */}
        <Card className="flex items-center justify-center cursor-pointer bg-transparent hover:bg-primary/10 transition-colors border-dashed border-2 border-primary" onClick={handleAdd}>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Plus className="w-8 h-8 mb-2 text-primary" />
            <span className="font-medium text-primary">Créer une nouvelle entrée budgétaire</span>
          </CardContent>
        </Card>
      </div>
      <ModifyEntryModal
        open={modalOpen}
        defaultValues={editingId != null ? entryValues[editingId] || Array(12).fill(0) : Array(12).fill(0)}
        onClose={handleModalClose}
        onSave={handleModalSave}
        label={editingId != null ? items.find(i => i.id === editingId)?.label : undefined}
      />
      <Dialog open={visualiseOpen} onOpenChange={handleVisualiseClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Visualisation : {visualiseId != null ? items.find(i => i.id === visualiseId)?.label : ""}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
            {(() => {
              const values = visualiseId != null ? (entryValues[visualiseId] || Array(12).fill(0)) : Array(12).fill(0);
              const months = [
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
              ];
              return months.map((month, idx) => (
                <div key={month} className="flex flex-col">
                  <span className="text-sm font-medium mb-1">{month}</span>
                  <span className="text-base font-mono">
                    {values[idx].toLocaleString()} $
                  </span>
                </div>
              ));
            })()}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={createModalOpen} onOpenChange={handleCreateCancel}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nouvelle entrée budgétaire</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 my-2">
            <div>
              <label className="text-sm font-medium mb-1 block">Titre</label>
              <input
                type="text"
                className="input input-bordered rounded px-2 py-1 border w-full"
                value={newLabel}
                onChange={e => setNewLabel(e.target.value)}
                placeholder="Nom de l'entrée"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Description</label>
              <input
                type="text"
                className="input input-bordered rounded px-2 py-1 border w-full"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="Description de l'entrée"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-4">
            <Button variant="outline" onClick={handleCreateCancel} type="button">Annuler</Button>
            <Button onClick={handleCreateSave} type="button">Créer</Button>
          </div>
        </DialogContent>
      </Dialog>
    </ContentLayout>
  );
}
