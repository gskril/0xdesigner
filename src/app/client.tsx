'use client'

import { useMemo, useState } from 'react'

import { Nft } from '@/components/Nft'
import { Select, SelectOption } from '@/components/Select'
import { Nodes } from '@/lib/zora'

// TODO: improve sorting and filtering
const sortOptions: SelectOption[] = [
  { value: 'recent', label: 'Recent' },
  // { value: 'lowest', label: 'Lowest Mint Price' },
  // { value: 'highest', label: 'Highest Mint Price' },
]

const filterOptions: SelectOption[] = [
  { value: 'all', label: 'All' },
  { value: 'available', label: 'Available' },
  // { value: 'free', label: 'Free Mints' },
]

export default function Client({ nfts }: { nfts: Nodes }) {
  const [sort, setSort] = useState('recent')
  const [filter, setFilter] = useState('all')

  const sortedNfts = useMemo(() => {
    if (filter === 'available') {
      return nfts.filter((nft) => !nft.token.mintInfo)
    }

    if (sort === 'recent') {
      return nfts
    }

    if (sort === 'lowest') {
      return nfts.sort((a, b) => {
        const aPrice = a.token.mintInfo?.price?.nativePrice.decimal || 0
        const bPrice = b.token.mintInfo?.price?.nativePrice.decimal || 0

        return aPrice - bPrice
      })
    }

    if (sort === 'highest') {
      return nfts.sort((a, b) => {
        const aPrice = a.token.mintInfo?.price?.nativePrice.decimal || 0
        const bPrice = b.token.mintInfo?.price?.nativePrice.decimal || 0

        return bPrice - aPrice
      })
    }

    return nfts
  }, [filter, sort])

  return (
    <main key="1" className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12 flex items-center justify-center space-x-2">
        <img
          alt="0xdesigner.eth avatar"
          className="rounded-full"
          height="32"
          src="https://pbs.twimg.com/profile_images/1713576030063972352/qEdjq6VQ_400x400.jpg"
          width="32"
        />
        <h2 className="text-lg text-gray-800 md:text-xl">0xdesigner.eth</h2>
      </section>

      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Design Everydays
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Design concepts that explore ways web3 can be more useful, exciting or
          easier to use.
        </p>
      </section>

      <section className="flex flex-col items-end gap-2 p-2 pr-4 md:flex-row md:justify-end md:gap-4 md:p-3 md:pr-6">
        <div className="flex gap-4">
          <Select
            id="sort"
            name="Sort By"
            options={sortOptions}
            onChange={(value) => setSort(value)}
          />

          <Select
            id="filter"
            name="Filter"
            options={filterOptions}
            onChange={(value) => setFilter(value)}
          />
        </div>

        <p className="text-sm text-gray-600">
          {sortedNfts.length} results found
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-4">
        {sortedNfts.map((nft, index) => (
          <Nft key={index} token={nft} index={index} />
        ))}
      </section>
    </main>
  )
}