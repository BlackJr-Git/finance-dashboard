// src/app/api/test-prisma/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/shared/prisma";
import { withAuth } from "@/lib/shared/withAuth";
import { NextRequest } from "next/server";


export const GET = withAuth(async (req: NextRequest, session) => {
  try {
    // Simple test query
    const result = await prisma.project.findMany({
      orderBy: {
        lastModified: "desc"
      },
      include: {
        forecasts: {
          select: {
            id: true,
            startYear: true
          }
        }
      }
    });
    return NextResponse.json({ message: "Prisma est fonctionnel", result });
  } catch (error) {
    console.error("Erreur Prisma:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
});
