import Link from 'next/link'

import type { Token } from '@/lib/zora/types'

export function Nft({ token: nft, index }: { token: Token; index: number }) {
  return (
    <div
      key={nft.token_id}
      className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:border-2 hover:border-blue-400"
    >
      <Link
        className="absolute inset-0 z-10"
        href={
          nft.mintable.is_active
            ? `https://zora.co/collect/eth:${nft.collection_address}/${nft.token_id}`
            : `https://opensea.io/assets/ethereum/${nft.collection_address}/${nft.token_id}`
        }
      >
        <span className="sr-only">View NFT</span>
      </Link>

      <div className="aspect-square">
        <img
          alt={nft.mintable.token_name}
          className="h-full w-full bg-gray-100 object-cover"
          loading={index < 8 ? 'eager' : 'lazy'}
          src={nft.media?.image_preview.encoded_preview}
        />
      </div>

      <div className="bg-white p-4 ">
        <h3 className="text-lg font-semibold md:text-xl">
          {nft.mintable.token_name}
        </h3>
        <p className="text-sm text-zinc-500">
          {nft.mintable.is_active
            ? `Mint for ${nft.mintable.cost.native_price.decimal} ${nft.mintable.cost.native_price.currency.name}`
            : 'View on OpenSea'}
        </p>
      </div>
    </div>
  )
}
