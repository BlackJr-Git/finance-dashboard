import { create } from 'zustand';
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Définition du type Project
export interface Project {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  model: string;
  // Ajoutez d'autres propriétés selon vos besoins
}

// Mock data pour les projets (à remplacer par les données réelles)
const mockProjects: Project[] = [
  {
    id: "projet-finance-1",
    title: "Budget prévisionnel 2025",
    description: "Budget prévisionnel annuel avec analyse financière détaillée",
    lastModified: "11/04/2025",
    model: "Modèle Générique"
  },
  {
    id: "projet-finance-2",
    title: "Plan d'investissement Q2",
    description: "Plan d'investissement pour le deuxième trimestre",
    lastModified: "15/04/2025",
    model: "Modèle POSEC"
  }
];

// Interface du store
interface ProjectState {
  activeProject: Project | null;
  allProjects: Project[];
  setActiveProject: (project: Project | null) => void;
  getProjectById: (id: string) => Project | null;
  fetchProjects: () => Promise<void>;
}

// Création du store
export const useProjectStore = create<ProjectState>((set, get) => ({
  activeProject: null,
  allProjects: mockProjects, // Initialisation avec les données mock
  
  setActiveProject: (project) => set({ activeProject: project }),
  
  getProjectById: (id) => {
    const { allProjects } = get();
    return allProjects.find(project => project.id === id) || null;
  },
  
  // Fonction pour récupérer les projets depuis une API (à implémenter)
  fetchProjects: async () => {
    try {
      // Simuler une requête API
      // Dans une vraie application, cela serait remplacé par un appel à l'API
      // const response = await fetch('/api/projects');
      // const data = await response.json();
      
      // Pour l'instant, on utilise les données mock
      set({ allProjects: mockProjects });
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
    }
  }
}));

// Hook pour synchroniser automatiquement le projet actif avec l'URL
export function useSyncProjectWithUrl() {
  const params = useParams();
  const pathname = usePathname();
  const { setActiveProject, getProjectById, activeProject } = useProjectStore();

  useEffect(() => {
    // Vérifier si nous sommes sur une page de projet
    if (pathname?.includes('/projects/') && params.project_id) {
      const projectId = Array.isArray(params.project_id) 
        ? params.project_id[0] 
        : params.project_id;
      
      // Si l'ID du projet a changé, mettre à jour le projet actif
      if (!activeProject || activeProject.id !== projectId) {
        const project = getProjectById(projectId);
        if (project) {
          setActiveProject(project);
        }
      }
    } else if (!pathname?.includes('/projects/')) {
      // Si nous ne sommes plus sur une page de projet, réinitialiser le projet actif
      setActiveProject(null);
    }
  }, [pathname, params, setActiveProject, getProjectById, activeProject]);

  return activeProject;
}
