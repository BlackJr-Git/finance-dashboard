import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/shared/authOptions";
import { NextRequest } from "next/server";
import type { Session } from "next-auth";

/**
 * Middleware d'authentification pour les routes API
 * 
 * @param handler - La fonction de traitement de la requête API à protéger
 * @returns Une fonction qui vérifie l'authentification avant d'exécuter le handler
 */
export function withAuth<T>(
  handler: (req: NextRequest, session: Session) => Promise<T>
) {
  return async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    // Vérification de l'authentification
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour accéder à cette ressource" },
        { status: 401 }
      );
    }

    // Appel du handler avec la session
    return handler(req, session);
  };
}

/**
 * Vérifie si l'utilisateur est authentifié sans bloquer l'exécution
 * @returns la session si authentifié, null sinon
 */
export async function getAuthSession() {
  return await getServerSession(authOptions);
}

/**
 * Vérifie si l'utilisateur est authentifié et renvoie une erreur si ce n'est pas le cas
 * @returns Session utilisateur ou erreur 401
 */
export async function requireAuth() {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user?.email) {
    return {
      error: NextResponse.json(
        { error: "Vous devez être connecté pour accéder à cette ressource" },
        { status: 401 }
      ),
      session: null
    };
  }
  
  return { error: null, session };
}
