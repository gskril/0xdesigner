import {
  SortDirection,
  TokenSortKey,
  TokensQuery,
  ZDK,
  ZDKChain,
  ZDKNetwork,
} from '@zoralabs/zdk'

const networkInfo = {
  network: ZDKNetwork.Ethereum,
  chain: ZDKChain.Mainnet,
}

const args = {
  endPoint: 'https://api.zora.co/graphql',
  networks: [networkInfo],
  apiKey: process.env.API_KEY,
}

const zdk = new ZDK(args)

export type Tokens = TokensQuery['tokens']
export type Nodes = Tokens['nodes']

export async function getAllNfts(collectionAddresses: string[]) {
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
