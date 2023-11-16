import { ZDK, ZDKChain, ZDKNetwork } from '@zoralabs/zdk'

const networkInfo = {
  network: ZDKNetwork.Ethereum,
  chain: ZDKChain.Mainnet,
}

const args = {
  endPoint: 'https://api.zora.co/graphql',
  networks: [networkInfo],
  apiKey: process.env.API_KEY,
}

export const zdk = new ZDK(args)
