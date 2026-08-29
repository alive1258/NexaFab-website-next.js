export interface MenuItem {
  display: string;
  href: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "Solutions", href: "/solutions" },
  { display: "Industries", href: "/industries" },
  { display: "Technology", href: "/technology" },
  { display: "About", href: "/about" },
];
