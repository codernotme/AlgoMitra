export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AlgoMitra",
  description: "AlgoMitra is a platform for learning algorithms and data structures.",
  navItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Create Algorithm",
      href: "/create",
    },
    {
      label: "Learn",
      href: "/learn",
    },
    {
      label: "Practice",
      href: "/practice",
    }
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
      label: "My Algorithms",
      href: "/my-algorithms",
    },
    {
      label: "Progress Tracking",
      href: "/progress",
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