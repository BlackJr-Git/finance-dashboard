import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/shared/authOptions";
import prisma from "@/lib/shared/prisma";

interface Params {
  params: {
    id: string;
  };
}

/**
 * GET /api/projects/[id]
 * Récupère un projet spécifique par son ID
 */
export async function GET(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = params;

    // Vérification de l'authentification
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour accéder à ce projet" },
        { status: 401 }
      );
    }

    // Récupérer l'utilisateur depuis son email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    // Récupérer le projet avec ses prévisions
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        forecasts: {
          include: {
            forecastArticles: true,
            forecastBudgets: {
              include: {
                entries: true
              }
            }
          }
        }
      }
    });

    // Vérifier si le projet existe
    if (!project) {
      return NextResponse.json(
        { error: "Projet non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier si l'utilisateur est propriétaire du projet
    if (project.userId !== user.id) {
      return NextResponse.json(
        { error: "Vous n'êtes pas autorisé à accéder à ce projet" },
        { status: 403 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Erreur lors de la récupération du projet:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération du projet" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/projects/[id]
 * Modifie un projet existant
 */
export async function PUT(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = params;

    // Vérification de l'authentification
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour modifier ce projet" },
        { status: 401 }
      );
    }

    // Récupérer l'utilisateur depuis son email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier si le projet existe et appartient à l'utilisateur
    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return NextResponse.json(
        { error: "Projet non trouvé" },
        { status: 404 }
      );
    }

    if (existingProject.userId !== user.id) {
      return NextResponse.json(
        { error: "Vous n'êtes pas autorisé à modifier ce projet" },
        { status: 403 }
      );
    }

    // Récupérer les données du corps de la requête
    const body = await request.json();
    const { title, description, startDate, endDate } = body;

    // Validation des données
    if (!title) {
      return NextResponse.json(
        { error: "Le titre du projet est requis" },
        { status: 400 }
      );
    }

    // Mise à jour du projet
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title,
        description: description || "",
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        lastModified: new Date(),
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Erreur lors de la modification du projet:", error);
    return NextResponse.json(
      { error: "Erreur lors de la modification du projet" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/projects/[id]
 * Supprime un projet existant
 */
export async function DELETE(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = params;

    // Vérification de l'authentification
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour supprimer ce projet" },
        { status: 401 }
      );
    }

    // Récupérer l'utilisateur depuis son email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier si le projet existe et appartient à l'utilisateur
    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return NextResponse.json(
        { error: "Projet non trouvé" },
        { status: 404 }
      );
    }

    if (existingProject.userId !== user.id) {
      return NextResponse.json(
        { error: "Vous n'êtes pas autorisé à supprimer ce projet" },
        { status: 403 }
      );
    }

    // Suppression du projet (et de toutes les relations grâce à onDelete: Cascade)
    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Projet supprimé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression du projet" },
      { status: 500 }
    );
  }
}
