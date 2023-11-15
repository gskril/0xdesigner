'use client'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { useEffect, useState } from 'react'
import { WagmiConfig } from 'wagmi'

import { chains, wagmiConfig } from '@/lib/web3'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
