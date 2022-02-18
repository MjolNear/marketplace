import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  token?: Maybe<Token>;
  tokenSearch: Array<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  userSearch: Array<User>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Token = {
  __typename?: 'Token';
  contractId: Scalars['String'];
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipfsReference?: Maybe<Scalars['String']>;
  listingTime: Scalars['BigInt'];
  media?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
  price: Scalars['BigInt'];
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type Token_Filter = {
  contractId?: InputMaybe<Scalars['String']>;
  contractId_contains?: InputMaybe<Scalars['String']>;
  contractId_ends_with?: InputMaybe<Scalars['String']>;
  contractId_gt?: InputMaybe<Scalars['String']>;
  contractId_gte?: InputMaybe<Scalars['String']>;
  contractId_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_lt?: InputMaybe<Scalars['String']>;
  contractId_lte?: InputMaybe<Scalars['String']>;
  contractId_not?: InputMaybe<Scalars['String']>;
  contractId_not_contains?: InputMaybe<Scalars['String']>;
  contractId_not_ends_with?: InputMaybe<Scalars['String']>;
  contractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_not_starts_with?: InputMaybe<Scalars['String']>;
  contractId_starts_with?: InputMaybe<Scalars['String']>;
  copies?: InputMaybe<Scalars['BigInt']>;
  copies_gt?: InputMaybe<Scalars['BigInt']>;
  copies_gte?: InputMaybe<Scalars['BigInt']>;
  copies_in?: InputMaybe<Array<Scalars['BigInt']>>;
  copies_lt?: InputMaybe<Scalars['BigInt']>;
  copies_lte?: InputMaybe<Scalars['BigInt']>;
  copies_not?: InputMaybe<Scalars['BigInt']>;
  copies_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfsReference?: InputMaybe<Scalars['String']>;
  ipfsReference_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_gt?: InputMaybe<Scalars['String']>;
  ipfsReference_gte?: InputMaybe<Scalars['String']>;
  ipfsReference_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_lt?: InputMaybe<Scalars['String']>;
  ipfsReference_lte?: InputMaybe<Scalars['String']>;
  ipfsReference_not?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with?: InputMaybe<Scalars['String']>;
  listingTime?: InputMaybe<Scalars['BigInt']>;
  listingTime_gt?: InputMaybe<Scalars['BigInt']>;
  listingTime_gte?: InputMaybe<Scalars['BigInt']>;
  listingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listingTime_lt?: InputMaybe<Scalars['BigInt']>;
  listingTime_lte?: InputMaybe<Scalars['BigInt']>;
  listingTime_not?: InputMaybe<Scalars['BigInt']>;
  listingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  ContractId = 'contractId',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  IpfsReference = 'ipfsReference',
  ListingTime = 'listingTime',
  Media = 'media',
  OwnerId = 'ownerId',
  Price = 'price',
  Title = 'title',
  TokenId = 'tokenId'
}

export type User = {
  __typename?: 'User';
  earned: Scalars['BigDecimal'];
  id: Scalars['ID'];
  purchases: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  spent: Scalars['BigDecimal'];
};

export type User_Filter = {
  earned?: InputMaybe<Scalars['BigDecimal']>;
  earned_gt?: InputMaybe<Scalars['BigDecimal']>;
  earned_gte?: InputMaybe<Scalars['BigDecimal']>;
  earned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  earned_lt?: InputMaybe<Scalars['BigDecimal']>;
  earned_lte?: InputMaybe<Scalars['BigDecimal']>;
  earned_not?: InputMaybe<Scalars['BigDecimal']>;
  earned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  purchases?: InputMaybe<Scalars['BigInt']>;
  purchases_gt?: InputMaybe<Scalars['BigInt']>;
  purchases_gte?: InputMaybe<Scalars['BigInt']>;
  purchases_in?: InputMaybe<Array<Scalars['BigInt']>>;
  purchases_lt?: InputMaybe<Scalars['BigInt']>;
  purchases_lte?: InputMaybe<Scalars['BigInt']>;
  purchases_not?: InputMaybe<Scalars['BigInt']>;
  purchases_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spent?: InputMaybe<Scalars['BigDecimal']>;
  spent_gt?: InputMaybe<Scalars['BigDecimal']>;
  spent_gte?: InputMaybe<Scalars['BigDecimal']>;
  spent_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  spent_lt?: InputMaybe<Scalars['BigDecimal']>;
  spent_lte?: InputMaybe<Scalars['BigDecimal']>;
  spent_not?: InputMaybe<Scalars['BigDecimal']>;
  spent_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum User_OrderBy {
  Earned = 'earned',
  Id = 'id',
  Purchases = 'purchases',
  Sales = 'sales',
  Spent = 'spent'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type MarketTokensQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: Token_OrderBy;
  orderDirection: OrderDirection;
  priceFrom?: InputMaybe<Scalars['BigInt']>;
  priceTo?: InputMaybe<Scalars['BigInt']>;
}>;


export type MarketTokensQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', ownerId: string, tokenId: string, contractId: string, title: string, description?: string | null, media?: string | null, copies?: any | null, ipfsReference?: string | null, price: any }> };

export type TokenPriceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TokenPriceQuery = { __typename?: 'Query', token?: { __typename?: 'Token', price: any } | null };

export type TextSearchTokensQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type TextSearchTokensQuery = { __typename?: 'Query', tokenSearch: Array<{ __typename?: 'Token', ownerId: string, tokenId: string, contractId: string, title: string, description?: string | null, media?: string | null, copies?: any | null, ipfsReference?: string | null, price: any }> };


export const MarketTokensDocument = gql`
    query marketTokens($limit: Int!, $offset: Int!, $orderBy: Token_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt, $priceTo: BigInt) {
  tokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    ownerId
    tokenId
    contractId
    title
    description
    media
    copies
    ipfsReference
    price
  }
}
    `;

/**
 * __useMarketTokensQuery__
 *
 * To run a query within a React component, call `useMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketTokensQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      priceFrom: // value for 'priceFrom'
 *      priceTo: // value for 'priceTo'
 *   },
 * });
 */
export function useMarketTokensQuery(baseOptions: Apollo.QueryHookOptions<MarketTokensQuery, MarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketTokensQuery, MarketTokensQueryVariables>(MarketTokensDocument, options);
      }
export function useMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketTokensQuery, MarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketTokensQuery, MarketTokensQueryVariables>(MarketTokensDocument, options);
        }
export type MarketTokensQueryHookResult = ReturnType<typeof useMarketTokensQuery>;
export type MarketTokensLazyQueryHookResult = ReturnType<typeof useMarketTokensLazyQuery>;
export type MarketTokensQueryResult = Apollo.QueryResult<MarketTokensQuery, MarketTokensQueryVariables>;
export const TokenPriceDocument = gql`
    query tokenPrice($id: ID!) {
  token(id: $id) {
    price
  }
}
    `;

/**
 * __useTokenPriceQuery__
 *
 * To run a query within a React component, call `useTokenPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTokenPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenPriceQuery, TokenPriceQueryVariables>(TokenPriceDocument, options);
      }
export function useTokenPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenPriceQuery, TokenPriceQueryVariables>(TokenPriceDocument, options);
        }
export type TokenPriceQueryHookResult = ReturnType<typeof useTokenPriceQuery>;
export type TokenPriceLazyQueryHookResult = ReturnType<typeof useTokenPriceLazyQuery>;
export type TokenPriceQueryResult = Apollo.QueryResult<TokenPriceQuery, TokenPriceQueryVariables>;
export const TextSearchTokensDocument = gql`
    query textSearchTokens($text: String!) {
  tokenSearch(text: $text) {
    ownerId
    tokenId
    contractId
    title
    description
    media
    copies
    ipfsReference
    price
  }
}
    `;

/**
 * __useTextSearchTokensQuery__
 *
 * To run a query within a React component, call `useTextSearchTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTextSearchTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTextSearchTokensQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useTextSearchTokensQuery(baseOptions: Apollo.QueryHookOptions<TextSearchTokensQuery, TextSearchTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TextSearchTokensQuery, TextSearchTokensQueryVariables>(TextSearchTokensDocument, options);
      }
export function useTextSearchTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TextSearchTokensQuery, TextSearchTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TextSearchTokensQuery, TextSearchTokensQueryVariables>(TextSearchTokensDocument, options);
        }
export type TextSearchTokensQueryHookResult = ReturnType<typeof useTextSearchTokensQuery>;
export type TextSearchTokensLazyQueryHookResult = ReturnType<typeof useTextSearchTokensLazyQuery>;
export type TextSearchTokensQueryResult = Apollo.QueryResult<TextSearchTokensQuery, TextSearchTokensQueryVariables>;