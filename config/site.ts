export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Recomend / Help',
  description: 'Recomend customer support',
  url: 'https://help.recomend.app',
  mainNav: [
    {
      title: 'Accueil',
      href: '/',
    },
  ],
  logo: {
    href: '/recomend_logo.svg',
    alt: 'Recomend Logo',
  },
  icon: {
    href: '/recomend_icon.svg',
    alt: 'Recomend Logo',
  },
  links: {
    discord: 'https://discord.gg/P775UzDJvA',
    twitter: '@recomend_app',
    github: 'https://github.com/lxup/recomend-help/',
    github_repo: 'https://github.com/lxup/recomend-help/tree/main/'
  },
  colors: [
    "#eb4034",
    "#34cfeb",
    "#ebc034",
    "#ad00ab",
    
  ]
};
