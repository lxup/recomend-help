import React from 'react'
import { DocsThemeConfig, LocaleSwitch, ThemeSwitch } from 'nextra-theme-docs'
import Image from 'next/image'
import { siteConfig } from './config/site'
import { useRouter } from 'next/router'
import Link from 'next/link'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: `%s – ${siteConfig.name}`,
        description: siteConfig.description
      }
    }
    else {
      return {
        titleTemplate: siteConfig.name,
        description: siteConfig.description
      }
    }
  },
  head:() => {
    const { asPath, defaultLocale, locale } = useRouter();
    const url =
      siteConfig.url +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    return (
      <>
        <link rel="icon" type="image/png" href="/icons/192x192.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* OPEN GRAPH */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description}  />
        {/* <meta property="og:image" content="https://html.sammy-codes.com/images/large-profile.jpg" /> */}
        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.links.twitter} />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        {/* <meta name="twitter:image" content="https://html.sammy-codes.com/images/large-profile.jpg" /> */}
      </>
    )
  },
  feedback: {
    labels: 'Yoo',
    content: null
  },
  editLink: {
    component: ({children, filePath}) => (
      <Link href={siteConfig.links.github_repo + filePath}>
        {children}
      </Link>
    )
  },
  // project: {
  //   link: siteConfig.links.github
  // },
  logo: 
      <Image
        src={siteConfig.logo.href}
        alt={siteConfig.logo.alt}
        width={150}
        height={150}
        priority
      />,
  sidebar: {
    toggleButton: false
  },
  navbar: {
    extraContent:
      <>
        <ThemeSwitch lite/>
        <LocaleSwitch lite />
      </>,
  },
  chat: {
    link: siteConfig.links.discord,
  },
  footer: {
    component: <></>
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'fr', text: 'Français' },
  ],
  search: {
    placeholder: () => {
      const { locale } = useRouter()
      if (locale === 'fr') {
        return 'Rechercher dans la docs...'
      } else {
        return 'Search inside docs...'
      }
    }
  }
}

export default config
