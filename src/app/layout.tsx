import '@rainbow-me/rainbowkit/styles.css'
import type { Metadata } from 'next'

import { ClientProviders } from '@/lib/providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Design Everydays by 0xdesigner.eth',
  description:
    'Design concepts that explore ways web3 can be more useful, exciting or easier to use.',
}

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
