import type { LinkProps } from "next/link";

export interface NavigationItem {
  href: LinkProps["href"];
  label: string;
}

export interface NavigationAction extends NavigationItem {
  ariaLabel?: string;
}

export const defaultNavigationItems: readonly NavigationItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export const defaultPrimaryAction: NavigationAction = {
  href: "/registro",
  label: "Comenzar",
};

export const defaultSecondaryAction: NavigationAction = {
  href: "/ingresar",
  label: "Iniciar sesión",
};
