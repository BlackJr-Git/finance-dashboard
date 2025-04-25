import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Étendre le type Session pour inclure les propriétés personnalisées
   */
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
    error?: string;
    user: {
      id?: string;
    } & DefaultSession["user"];
  }

  /**
   * Le type JWT est utilisé lors de la gestion des tokens
   */
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
    error?: string;
  }
}
