'use client';

import React, { ReactNode, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useProjectStore } from './project-store';

interface ProjectProviderProps {
  children: ReactNode;
}

/**
 * Composant Provider qui synchronise le projet actif avec l'URL
 * À placer au niveau élevé dans l'arbre de composants, par exemple dans le RootLayout
 */
export function ProjectProvider({ children }: ProjectProviderProps) {
  const params = useParams();
  const pathname = usePathname();
  const { setActiveProject, getProjectById, fetchProjects } = useProjectStore();

  // Charger tous les projets au démarrage
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Synchroniser le projet actif avec l'URL
  useEffect(() => {
    // Vérifier si nous sommes sur une page de projet
    if (pathname?.includes('/projects/') && params.project_id) {
      const projectId = Array.isArray(params.project_id) 
        ? params.project_id[0] 
        : params.project_id;
      
      const project = getProjectById(projectId);
      if (project) {
        setActiveProject(project);
      }
    } else if (!pathname?.includes('/projects/')) {
      // Si nous ne sommes plus sur une page de projet, réinitialiser le projet actif
      setActiveProject(null);
    }
  }, [pathname, params, setActiveProject, getProjectById]);

  return <>{children}</>;
}
