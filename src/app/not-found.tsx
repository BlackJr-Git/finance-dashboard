'use client';

import Link from 'next/link';
import { LucideFileWarning, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-4">
            {/* <LucideFileWarning className="h-16 w-16 text-primary" /> */}
            <TriangleAlert className="h-16 w-16 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-3">Page introuvable</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link href="/projects">
              Retour au tableau de bord
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              Voir mes projets
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-16 text-sm text-muted-foreground">
        <p>Code erreur: 404 | Page introuvable</p>
      </div>
    </div>
  );
}
