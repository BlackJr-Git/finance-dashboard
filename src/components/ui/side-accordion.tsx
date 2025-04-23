"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SideAccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
  width?: string;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

export function SideAccordion({
  title,
  children,
  className,
  side = "right",
  width = "300px",
  defaultOpen = false,
  icon
}: SideAccordionProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-md shadow-md",
          side === "left" ? "ml-2" : "mr-2"
        )}
      >
        {side === "left" && isOpen && <ChevronLeft className="h-4 w-4" />}
        {side === "right" && !isOpen && <ChevronRight className="h-4 w-4" />}
        {icon && icon}
        <span>{title}</span>
        {side === "left" && !isOpen && <ChevronRight className="h-4 w-4" />}
        {side === "right" && isOpen && <ChevronLeft className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              width: 0,
              opacity: 0,
              [side === "left" ? "x" : "-x"]: "100%" 
            }}
            animate={{ 
              width,
              opacity: 1,
              x: 0 
            }}
            exit={{ 
              width: 0,
              opacity: 0,
              [side === "left" ? "x" : "-x"]: "100%" 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "absolute top-0 z-10 bg-card shadow-lg rounded-md overflow-hidden",
              side === "left" 
                ? "left-0 origin-left border-r" 
                : "right-0 origin-right border-l"
            )}
            style={{ 
              height: "auto",
              maxWidth: width
            }}
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
