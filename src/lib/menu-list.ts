import {
  Tag,
  User,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  FileText,
  BarChart2,
  Briefcase,
  Target,
  TrendingUp,
  DollarSign
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
  icon?: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
          active: pathname === "/dashboard"
        }
      ]
    },
    {
      groupLabel: "Contenus",
      menus: [
        {
          href: "/budget-de-caisse",
          label: "Budget de Caisse",
          icon: DollarSign,
          submenus: [],
          active: pathname.startsWith("/budget-de-caisse")
        },
        {
          href: "/bilans",
          label: "Bilans",
          icon: FileText,
          submenus: [],
          active: pathname === "/bilans"
        },
        {
          href: "/investissements-financements",
          label: "Investissements & Financements",
          icon: TrendingUp,
          submenus: [],
          active: pathname === "/investissements-financements"
        },
        {
          href: "/compte-resultats",
          label: "Compte des Résultats",
          icon: BarChart2,
          submenus: [],
          active: pathname === "/compte-resultats"
        },
        {
          href: "/seuils-rentabilites",
          label: "Seuils de Rentabilité",
          icon: Target,
          submenus: [],
          active: pathname === "/seuils-rentabilites"
        },
        {
          href: "/besoins-fonds-roulement",
          label: "Besoin en Fonds de Roulement",
          icon: Briefcase,
          submenus: [],
          active: pathname === "/besoins-fonds-roulement"
        }
      ]
    },
    {
      groupLabel: "Paramètres",
      menus: [
        // {
        //   href: "/users",
        //   label: "Utilisateurs",
        //   icon: Users
        // },
        {
          href: "/account",
          label: "Compte",
          icon: User
        }
      ]
    }
  ];
}
