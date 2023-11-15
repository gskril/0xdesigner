/**
 * v0 by Vercel.
 * @see https://v0.dev/t/shYsWljB1Lm
 */
import Link from 'next/link'

import { parseIpfsUri } from '@/lib/utils'
import { getAllNfts } from '@/lib/zora'

export default async function Page() {
  const nfts = await getAllNfts('0x5908eb01497b5d8e53c339ea0186050d487c8d0c')

  return (
    <main key="1" className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12 flex items-center justify-center space-x-2">
        <img
          alt="0xdesigner.eth avatar"
          className="rounded-full"
          height="32"
          src="https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg"
          style={{
            aspectRatio: '32/32',
            objectFit: 'cover',
          }}
          width="32"
        />
        <h2 className="text-lg text-gray-800 md:text-xl">0xdesigner.eth</h2>
      </section>

      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Design Everydays
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Design concepts that explore ways web3 can be more useful, exciting or
          easier to use.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-4">
        {nfts.map((nft, index) => {
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
                  src={
                    nft.token.image?.url
                      ? parseIpfsUri(nft.token.image.url)
                      : ''
                  }
                />
              </div>

              <div className="bg-white p-4 ">
                <h3 className="text-lg font-semibold md:text-xl">
                  {nft.token.name || 'Unnamed NFT'}
                </h3>
                <p className="text-sm text-zinc-500"># {nft.token.tokenId}</p>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
