import '@rainbow-me/rainbowkit/styles.css'

import '@/app/globals.css'
import { ClientProviders } from '@/lib/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
