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

const API_ENDPOINT = 'https://api.zora.co/graphql'
const args = {
  endPoint: API_ENDPOINT,
  networks: [networkInfo],
  apiKey: process.env.API_KEY,
}

const zdk = new ZDK(args)

type Tokens = TokensQuery['tokens']

export async function getAllNfts(contractAddress: string) {
  const allNfts: Tokens['nodes'] = new Array()
  let cursor = null

  while (true) {
    const res = await zdk.tokens({
      where: {
        collectionAddresses: [contractAddress],
      },
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
