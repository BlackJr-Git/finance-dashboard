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

export const isActiveRoute = (pathname: string, route: string) => {
  const cleanPath = pathname.split("?")[0].replace(/\/$/, "");
  const cleanRoute = route.replace(/\/$/, "");
  return cleanPath.endsWith(cleanRoute);
};


export function getMenuList(pathname: string, projectId?: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/projects/${projectId}/dashboard`,
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
          active: pathname.includes("/dashboard")
        }
      ]
    },
    {
      groupLabel: "Contenus",
      menus: [
        {
          href: `/projects/${projectId}/budget-de-caisse`,
          label: "Budget de Caisse",
          icon: DollarSign,
          submenus: [],
          active: pathname.includes("/budget-de-caisse")
        },
        {
          href: `/projects/${projectId}/bilans`,
          label: "Bilans",
          icon: FileText,
          submenus: [],
          active: pathname.includes("/bilans")
        },
        {
          href: `/projects/${projectId}/investissements-financements`,
          label: "Investissements & Financements",
          icon: TrendingUp,
          submenus: [],
          active: isActiveRoute(pathname, "/investissements-financements")
        },
        {
          href: `/projects/${projectId}/compte-resultats`,
          label: "Compte des Résultats",
          icon: BarChart2,
          submenus: [],
          active: isActiveRoute(pathname, "/compte-resultats")
        },
        {
          href: `/projects/${projectId}/seuils-rentabilites`,
          label: "Seuils de Rentabilité",
          icon: Target,
          submenus: [],
          active: isActiveRoute(pathname, "/seuils-rentabilites")
        },
        {
          href: `/projects/${projectId}/besoins-fonds-roulement`,
          label: "Besoin en Fonds de Roulement",
          icon: Briefcase,
          submenus: [],
          active: isActiveRoute(pathname, "/besoins-fonds-roulement")
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
