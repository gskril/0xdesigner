import type { DiscoverTokensResponse } from './types'

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
