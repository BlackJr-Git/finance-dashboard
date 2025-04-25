"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, FileText, Edit2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { CreateProjectModal } from "@/components/projects/CreateProjectModal";

export default function ProjectsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const projects = [
    {
      id: "projet-finance-1",
      title: "Budget prévisionnel 2025",
      description:
        "Budget prévisionnel annuel avec analyse financière détaillée",
      lastModified: "11/04/2025"
    },
    {
      id: "projet-finance-2",
      title: "Plan d'investissement Q2",
      description: "Plan d'investissement pour le deuxième trimestre",
      lastModified: "15/04/2025"
    }
  ];

  const handleCreateProject = (project: { 
    title: string; 
    description: string; 
    startDate: Date | undefined; 
    endDate: Date | undefined; 
  }) => {
    // Logique pour créer un nouveau projet
    // Dans une application réelle, vous feriez un appel à l'API ici
    console.log("Nouveau projet créé:", project);
    
    // Exemple simple d'ajout d'un projet à la liste (à adapter selon votre logique métier)
    const newProject = {
      id: `projet-finance-${projects.length + 1}`,
      title: project.title,
      description: project.description,
      lastModified: new Date().toLocaleDateString('fr-FR')
    };
    
    // Vous pourriez utiliser une fonction setState ou un hook personnalisé pour mettre à jour la liste
    // setProjets([...projects, newProject]);
    
    // Rediriger vers le nouveau projet
    // router.push(`/projects/${newProject.id}/dashboard`);
  };

  return (
    <ContentLayout title="Mes Projets Financiers">
      <div className="flex flex-col space-y-8 min-h-screen">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mes projets financiers</h1>
          <p className="text-muted-foreground mb-6">
            Créez rapidement des projets financiers avec l&apos; aide en temps
            réel de notre IA. Rédigez efficacement et attirez les investisseurs
            avec des prévisions financières précises.
          </p>
          <Separator className="mb-8" />
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Main Content - Project Cards */}
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Create New Project Card */}
              <div 
                onClick={() => setIsCreateModalOpen(true)}
                className="group cursor-pointer"
              >
                <Card className="border-2 border-dashed h-full flex flex-col justify-center items-center p-6 hover:border-primary/70 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center pt-6">
                    <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <PlusCircle className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">
                      CRÉER
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      Démarrer un nouveau projet financier
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Project Cards */}
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}/dashboard`}
                >
                  <Card className="h-full hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-2 bg-primary/80 w-full"></div>
                      <div className="p-6">
                        <div className="flex gap-3 items-start mb-4">
                          <div className="rounded-full p-2 bg-primary/10 text-primary">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-8 pt-3 border-t border-border/40 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Edit2 className="h-3.5 w-3.5" />
                            <span>Modifié le {project.lastModified}</span>
                          </div>

                          {/* <div className="rounded-full px-2 py-1 bg-primary/10 text-primary text-xs font-medium">
                          {project.model}
                        </div> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Recent Activity Section */}
            {/* <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Dernières Activités & notifications</h2>
            <p className="text-muted-foreground text-sm">0 notifications non lues</p>
            
            <div className="mt-4 py-4 border-t text-center text-muted-foreground">
              <p>Aucune notification pour l'instant.</p>
            </div>
          </div> */}
          </div>

          {/* Sidebar - Information Section */}
          <div className="md:w-80 lg:w-96 shrink-0">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">
                Qu&apos;est-ce qu&apos;un projet financier ?
              </h2>
              <p className="text-muted-foreground mb-4">
                Découvrez notre outil d&apos;aide à la création de projets
                financiers. Notre assistant intelligent vous guide pas à pas
                dans l&apos;élaboration de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2 mb-6">
                <li>Budgets prévisionnels</li>
                <li>Plans d&apos;investissement</li>
                <li>Analyses financières</li>
                <li>Tableaux de bord financiers</li>
              </ul>

              <div className="aspect-video relative bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden mb-6">
                {/* Placeholder for video or image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">Vidéo de présentation</p>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="/tutoriel">Voir le tutoriel</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal de création de projet */}
      <CreateProjectModal 
        isOpen={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onCreateProject={handleCreateProject}
      />
    </ContentLayout>
  );
}
