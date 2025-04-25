// Service pour gérer les opérations liées aux projets
import prisma from "@/lib/shared/prisma";

// Types basés sur le schéma Prisma actuel
export interface Project {
  id: string;
  title: string;
  description: string | null;
  startDate: Date | null;
  endDate: Date | null;
  userId: string;
  lastModified: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Forecast {
  id: string;
  startYear: number;
  projectId: string;
}

export interface ProjectWithForecast extends Project {
  forecasts: {
    id: string;
    startYear: number;
  }[];
}

/**
 * Récupère tous les projets d'un utilisateur
 */
export async function getProjectsByUserId(userId: string): Promise<ProjectWithForecast[]> {
  try {
    return await prisma.project.findMany({
      where: {
        userId,
      },
      orderBy: {
        lastModified: "desc",
      },
      include: {
        forecasts: {
          select: {
            id: true,
            startYear: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    throw new Error("Impossible de récupérer les projets");
  }
}

/**
 * Récupère tous les projets (sans filtrage)
 */
export async function getAllProjects(): Promise<ProjectWithForecast[]> {
  try {
    return await prisma.project.findMany({
      orderBy: {
        lastModified: "desc",
      },
      include: {
        forecasts: {
          select: {
            id: true,
            startYear: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    throw new Error("Impossible de récupérer les projets");
  }
}

/**
 * Récupère un projet par son ID
 */
export async function getProjectById(id: string): Promise<any> {
  try {
    return await prisma.project.findUnique({
      where: { id },
      include: {
        forecasts: {
          include: {
            forecastBudgets: {
              include: {
                entries: true
              }
            },
            forecastArticles: true
          }
        }
      }
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du projet:", error);
    throw new Error(`Impossible de récupérer le projet ${id}`);
  }
}

/**
 * Crée un nouveau projet
 */
export async function createProject(
  data: {
    title: string;
    description?: string;
    startDate?: Date | null;
    endDate?: Date | null;
    userId: string;
  }
): Promise<Project> {
  try {
    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description || "",
        startDate: data.startDate,
        endDate: data.endDate,
        userId: data.userId,
      },
    });

    // Créer une prévision par défaut pour le projet
    await prisma.forecast.create({
      data: {
        startYear: new Date().getFullYear(),
        projectId: project.id,
      },
    });

    return project;
  } catch (error) {
    console.error("Erreur lors de la création du projet:", error);
    throw new Error("Impossible de créer le projet");
  }
}

/**
 * Met à jour un projet existant
 */
export async function updateProject(
  id: string,
  data: {
    title?: string;
    description?: string;
    startDate?: Date | null;
    endDate?: Date | null;
  }
): Promise<Project> {
  try {
    return await prisma.project.update({
      where: { id },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.startDate !== undefined && { startDate: data.startDate }),
        ...(data.endDate !== undefined && { endDate: data.endDate }),
        lastModified: new Date(),
      },
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet:", error);
    throw new Error(`Impossible de mettre à jour le projet ${id}`);
  }
}

/**
 * Supprime un projet
 */
export async function deleteProject(id: string): Promise<void> {
  try {
    await prisma.project.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
    throw new Error(`Impossible de supprimer le projet ${id}`);
  }
}
