export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AlgoMitra",
  description: "AlgoMitra is a platform for learning algorithms and data structures.",
  navItems: [
    {
      label: "Home",
      href: "/home",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  links: {
    github: "https://github.com/codernotme/AlgoMitra",
    sponsor: "https://buymeacoffee.com/codernotme",
  },
};
