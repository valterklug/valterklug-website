import './globals.css'

export const metadata = {
  metadataBase: new URL('https://valterklug.com'),
  title: {
    template: '%s — Valter Klug',
    default: 'Valter Klug — Fractional CMO & Brand Expansion Strategist',
  },
  description:
    'Valter Klug — Fractional CMO, International Brand Expansion Strategist, and AI-powered market intelligence. Miami-based. Global experience.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.brevo.com/js/sdk-loader.js" async />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.Brevo=window.Brevo||[];Brevo.push(["init",{client_key:"slzobd6uybewbi95frfp5pd6"}]);`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
