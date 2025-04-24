"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

export interface ModifyEntryModalProps {
  open: boolean;
  defaultValues?: number[]; // length 12
  onClose: () => void;
  onSave: (values: number[]) => void;
  label?: string;
}

export const ModifyEntryModal: React.FC<ModifyEntryModalProps> = ({ open, defaultValues, onClose, onSave, label }) => {
  const [values, setValues] = useState<number[]>(defaultValues || Array(12).fill(0));

  React.useEffect(() => {
    setValues(defaultValues || Array(12).fill(0));
  }, [defaultValues, open]);

  const handleChange = (idx: number, val: string) => {
    const next = [...values];
    next[idx] = parseFloat(val) || 0;
    setValues(next);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier les montants {label ? `pour "${label}"` : ""}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
          {MONTHS.map((month, idx) => (
            <div key={month} className="flex flex-col relative">
              <label className="text-sm font-medium mb-1 flex items-center">
                {month}
                {idx === 0 && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="ml-2 h-6 w-6 p-0"
                    title="Reporter sur tous les mois"
                    type="button"
                    onClick={() => setValues(v => Array(12).fill(v[0]))}
                  >
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </Button>
                )}
              </label>
              <input
                type="number"
                className="input input-bordered rounded px-2 py-1 border"
                value={values[idx]}
                onChange={e => handleChange(idx, e.target.value)}
                min={0}
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} type="button">Annuler</Button>
          <Button onClick={() => onSave(values)} type="button">Enregistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
