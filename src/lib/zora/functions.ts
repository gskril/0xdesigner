import type { SortDirection, TokenSortKey } from '@zoralabs/zdk'

import { zdk } from './client'
import type { DiscoverTokensResponse, Nodes } from './types'

export async function getAllNfts(collectionAddress: string) {
  let offset = 0
  const limit = 50
  const allNfts: DiscoverTokensResponse['results'] = new Array()

  while (true) {
    const res = await fetch(
      `https://api.zora.co/discover/tokens/ETHEREUM-MAINNET/${collectionAddress}?offset=${offset}&limit=50&sort_key=CREATED&sort_direction=DESC`
    )

    const json = (await res.json()) as DiscoverTokensResponse
    allNfts.push(...json.results)

    if (!json.has_next_page) {
      break
    }

    offset += limit
  }

  return allNfts
}

export async function getAllNftsFromZdk(collectionAddresses: string[]) {
  const allNfts: Nodes = new Array()
  let cursor = null

  while (true) {
    const res = await zdk.tokens({
      where: { collectionAddresses },
      sort: {
        sortKey: 'TOKEN_ID' as TokenSortKey,
        sortDirection: 'DESC' as SortDirection,
      },
      pagination: {
        limit: 200,
        after: cursor,
      },
      includeFullDetails: true,
    })

    allNfts.push(...res.tokens.nodes)

    if (!res.tokens.pageInfo.hasNextPage) {
      break
    }

    cursor = res.tokens.pageInfo.endCursor
  }

  const sortedNfts = allNfts.sort((a, b) => {
    return Number(a.token.tokenId) < Number(b.token.tokenId) ? 1 : -1
  })

  return sortedNfts
}
