import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Définir les chemins qui nécessitent une authentification
const PROTECTED_API_PATHS = [
  '/api/projects',
  // Ajoutez d'autres chemins protégés ici
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Vérifier si le chemin requiert une authentification
  const isProtectedApiPath = PROTECTED_API_PATHS.some(prefix => 
    path.startsWith(prefix)
  );
  
  if (isProtectedApiPath) {
    // Vérifier l'authentification
    const token = await getToken({ 
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });
    
    if (!token) {
      // Rediriger vers l'API avec une réponse 401
      return NextResponse.json(
        { error: "Authentification requise" },
        { status: 401 }
      );
    }
  }
  
  return NextResponse.next();
}

// Spécifier les chemins sur lesquels le middleware sera exécuté
export const config = {
  matcher: [
    // Protéger les routes API spécifiées
    '/api/projects/:path*',
    // Ajoutez d'autres routes à protéger ici
  ],
};
