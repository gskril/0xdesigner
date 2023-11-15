import Link from 'next/link'

import { Nodes } from '@/lib/zora'

export function Nft({ token: nft, index }: { token: Nodes[0]; index: number }) {
  return (
    <div
      key={nft.token.tokenId}
      className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:border-2 hover:border-blue-400"
    >
      <Link
        className="absolute inset-0 z-10"
        href={`https://zora.co/collect/eth:${nft.token.collectionAddress}/${nft.token.tokenId}`}
      >
        <span className="sr-only">View NFT</span>
      </Link>

      <div className="aspect-square">
        <img
          alt={nft.token.name || 'NFT'}
          className="h-full w-full object-cover"
          loading={index < 8 ? 'eager' : 'lazy'}
          src={(nft.token.image?.mediaEncoding as any)?.poster || ''} // the `poster` type isn't available in the zdk for some reason
        />
      </div>

      <div className="bg-white p-4 ">
        <h3 className="text-lg font-semibold md:text-xl">
          {nft.token.name || 'Unnamed NFT'}
        </h3>
        <p className="text-sm text-zinc-500">#{nft.token.tokenId}</p>
      </div>
    </div>
  )
}
