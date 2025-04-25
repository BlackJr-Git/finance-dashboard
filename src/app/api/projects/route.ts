import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/shared/authOptions";
import prisma from "@/lib/shared/prisma";

/**
 * GET /api/projects
 * Récupère tous les projets de l'utilisateur connecté
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Vérification de l'authentification
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour accéder à vos projets" },
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

    // Récupérer tous les projets de l'utilisateur
    const projects = await prisma.project.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        lastModified: "desc", // Triés par date de dernière modification
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

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des projets" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/projects
 * Crée un nouveau projet pour l'utilisateur connecté
 */
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Vérification de l'authentification
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour créer un projet" },
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

    // Création du projet
    const newProject = await prisma.project.create({
      data: {
        title,
        description: description || "",
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        userId: user.id,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du projet:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du projet" },
      { status: 500 }
    );
  }
}
