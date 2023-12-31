import type { Metadata } from 'next'

import Client from '@/app/client'
import { getAllNfts } from '@/lib/zora/functions'

export const metadata: Metadata = {
  title: 'Design Everydays by 0xdesigner.eth',
  description:
    'Design concepts that explore ways web3 can be more useful, exciting or easier to use.',
}

export default async function Page() {
  const contractAddress = '0x5908eb01497b5d8e53c339ea0186050d487c8d0c'
  const nfts = await getAllNfts(contractAddress)

  return <Client nfts={nfts} />
}
