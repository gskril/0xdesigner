// import type { TokensQuery } from '@zoralabs/zdk'

// export type Tokens = TokensQuery['tokens']
// export type Nodes = Tokens['nodes']

export type DiscoverTokensResponse = {
  results: Array<{
    chain_name: string
    collection_address: string
    token_id: string
    token_standard: string
    owner: any
    metadata: any
    mintable: {
      chain_name: string
      mintable_type: string
      token_standard: string
      contract_address: string
      creator_address: string
      token_creator: string
      collection: {
        address: string
        name: string
        symbol: string
        token_standard: string
        description: string
        image: string
      }
      token_id: string
      token_name: string
      mint_context: {
        mint_context_type: string
        renderer_contract: any
        permissions: Array<{
          user: string
          token_id: number
          is_admin: boolean
          is_minter: boolean
          is_sales_manager: boolean
          is_metadata_manager: boolean
          is_funds_manager: boolean
        }>
        sale_strategies: Array<{
          sale_strategies_type: string
          fixed_price: {
            token_id: number
            sale_start: string
            sale_end: string
            max_tokens_per_address: string
            price_per_token: string
            funds_recipient: string
          }
          presale: {
            token_id: any
            presale_start: any
            presale_end: any
            merkle_root: any
            funds_recipient: any
          }
          redeem_minter: boolean
        }>
        royalties: Array<{
          token_id: number
          user: string
          royalty_bps: string
          royaltyRecipient: string
          royalty_mint_schedule: number
        }>
        contract_version: string
        created_at_block: number
        uri: string
        b2r_redeemable: any
      }
      is_active: boolean
      cost: {
        native_price: {
          currency: {
            name: string
            address: string
            decimals: number
          }
          raw: string
          decimal: number
        }
        block_number: number
        eth_price: {
          currency: {
            name: string
            address: string
            decimals: number
          }
          raw: string
          decimal: number
        }
        usdc_price: {
          currency: {
            name: string
            address: string
            decimals: number
          }
          raw: string
          decimal: number
        }
      }
      total_mint_volume: {
        native_price: {
          currency: {
            name: string
            address: string
            decimals: number
          }
          raw: string
          decimal: number
        }
        block_number: number
        eth_price: {
          currency: {
            name: string
            address: string
            decimals: number
          }
          raw: string
          decimal: number
        }
        usdc_price: {
          currency: {
            name: string
            address: string
            decimals: number
          }
          raw: string
          decimal: number
        }
      }
      total_supply: number
      total_minted: number
      wallet_max: any
      start_datetime: string
      end_datetime: any
      collector_summary: {
        num_unique_collectors: number
        collector_previews: Array<{
          address: string
          ens_name: string
        }>
      }
      metadata: {
        name: string
        description: string
        attributes: Array<any>
      }
      status: any
      uuid: string
    }
    media?: {
      image_preview: {
        raw: string
        mime_type: string
        encoded_large: string
        encoded_preview: string
        encoded_thumbnail: string
      }
      image_carousel: Array<{
        raw: string
        mime_type: string
        encoded_large: string
        encoded_preview: string
        encoded_thumbnail: string
      }>
      content_preview: any
      content_carousel: any
      mime_type: string
    }
  }>
  limit: number
  offset: number
  has_next_page: boolean
  api_version: number
}

export type Tokens = DiscoverTokensResponse['results']
export type Token = Tokens[0]
