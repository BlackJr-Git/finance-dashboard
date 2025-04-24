import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface DetailsListItem {
  title: string;
  amount: string;
  description: string;
  href?: string;
  active?: boolean;
}

interface DetailsListProps {
  items: DetailsListItem[];
  amountClassName?: string; // Allows larger or smaller font for amount
  gridCols?: number; // Number of columns for grid layout
}

export const DetailsList: React.FC<DetailsListProps> = ({ items, amountClassName, gridCols }) => {
  const gridClass = gridCols ? `grid grid-cols-${gridCols} gap-3` : "space-y-4";
  return (
    <div className={gridClass}>
      {items.map((item, idx) => (
        <Link
          key={item.title + idx}
          href={item.href || "#"}
          className={`block p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors group ${item.active ? "bg-primary/5" : ""}`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h4 className={`font-medium ${item.active ? "text-primary" : "group-hover:text-primary"} transition-colors`}>
                {item.title}
              </h4>
              <p className={`font-bold mt-1 ${amountClassName || "text-2xl"}`}>{item.amount}</p>
            </div>
            <ChevronRight className={`h-5 w-5 text-primary ${item.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`} />
          </div>
          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
        </Link>
      ))}
    </div>
  );
};
