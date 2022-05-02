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

export type Account = {
  __typename?: 'Account';
  collections: Array<Collection>;
  earned: Scalars['BigDecimal'];
  highestSale?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  listed: Scalars['BigInt'];
  marketTokens: Array<MarketToken>;
  purchases: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  spent: Scalars['BigDecimal'];
};


export type AccountCollectionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Collection_Filter>;
};


export type AccountMarketTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketToken_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  earned?: InputMaybe<Scalars['BigDecimal']>;
  earned_gt?: InputMaybe<Scalars['BigDecimal']>;
  earned_gte?: InputMaybe<Scalars['BigDecimal']>;
  earned_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  earned_lt?: InputMaybe<Scalars['BigDecimal']>;
  earned_lte?: InputMaybe<Scalars['BigDecimal']>;
  earned_not?: InputMaybe<Scalars['BigDecimal']>;
  earned_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highestSale?: InputMaybe<Scalars['BigInt']>;
  highestSale_gt?: InputMaybe<Scalars['BigInt']>;
  highestSale_gte?: InputMaybe<Scalars['BigInt']>;
  highestSale_in?: InputMaybe<Array<Scalars['BigInt']>>;
  highestSale_lt?: InputMaybe<Scalars['BigInt']>;
  highestSale_lte?: InputMaybe<Scalars['BigInt']>;
  highestSale_not?: InputMaybe<Scalars['BigInt']>;
  highestSale_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listed?: InputMaybe<Scalars['BigInt']>;
  listed_gt?: InputMaybe<Scalars['BigInt']>;
  listed_gte?: InputMaybe<Scalars['BigInt']>;
  listed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listed_lt?: InputMaybe<Scalars['BigInt']>;
  listed_lte?: InputMaybe<Scalars['BigInt']>;
  listed_not?: InputMaybe<Scalars['BigInt']>;
  listed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export enum Account_OrderBy {
  Collections = 'collections',
  Earned = 'earned',
  HighestSale = 'highestSale',
  Id = 'id',
  Listed = 'listed',
  MarketTokens = 'marketTokens',
  Purchases = 'purchases',
  Sales = 'sales',
  Spent = 'spent'
}

export type Activity = {
  __typename?: 'Activity';
  blockHash: Scalars['String'];
  buyer?: Maybe<Account>;
  collection?: Maybe<Collection>;
  contract: Contract;
  eventType: ActivityEventType;
  id: Scalars['ID'];
  owner: Account;
  price?: Maybe<Scalars['BigInt']>;
  timestamp: Scalars['BigInt'];
  token: SavedToken;
  txHash: Scalars['String'];
};

export enum ActivityEventType {
  AcceptOffer = 'AcceptOffer',
  Buy = 'Buy',
  List = 'List',
  MakeOffer = 'MakeOffer',
  RemoveOffer = 'RemoveOffer',
  Transferred = 'Transferred',
  Unlist = 'Unlist',
  UpdatePrice = 'UpdatePrice'
}

export type Activity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockHash?: InputMaybe<Scalars['String']>;
  blockHash_contains?: InputMaybe<Scalars['String']>;
  blockHash_contains_nocase?: InputMaybe<Scalars['String']>;
  blockHash_ends_with?: InputMaybe<Scalars['String']>;
  blockHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash_gt?: InputMaybe<Scalars['String']>;
  blockHash_gte?: InputMaybe<Scalars['String']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_lt?: InputMaybe<Scalars['String']>;
  blockHash_lte?: InputMaybe<Scalars['String']>;
  blockHash_not?: InputMaybe<Scalars['String']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']>;
  blockHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockHash_not_ends_with?: InputMaybe<Scalars['String']>;
  blockHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_not_starts_with?: InputMaybe<Scalars['String']>;
  blockHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash_starts_with?: InputMaybe<Scalars['String']>;
  blockHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyer?: InputMaybe<Scalars['String']>;
  buyer_contains?: InputMaybe<Scalars['String']>;
  buyer_contains_nocase?: InputMaybe<Scalars['String']>;
  buyer_ends_with?: InputMaybe<Scalars['String']>;
  buyer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_gt?: InputMaybe<Scalars['String']>;
  buyer_gte?: InputMaybe<Scalars['String']>;
  buyer_in?: InputMaybe<Array<Scalars['String']>>;
  buyer_lt?: InputMaybe<Scalars['String']>;
  buyer_lte?: InputMaybe<Scalars['String']>;
  buyer_not?: InputMaybe<Scalars['String']>;
  buyer_not_contains?: InputMaybe<Scalars['String']>;
  buyer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_ends_with?: InputMaybe<Scalars['String']>;
  buyer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_not_in?: InputMaybe<Array<Scalars['String']>>;
  buyer_not_starts_with?: InputMaybe<Scalars['String']>;
  buyer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  buyer_starts_with?: InputMaybe<Scalars['String']>;
  buyer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<Scalars['String']>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventType?: InputMaybe<ActivityEventType>;
  eventType_in?: InputMaybe<Array<ActivityEventType>>;
  eventType_not?: InputMaybe<ActivityEventType>;
  eventType_not_in?: InputMaybe<Array<ActivityEventType>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Activity_OrderBy {
  BlockHash = 'blockHash',
  Buyer = 'buyer',
  Collection = 'collection',
  Contract = 'contract',
  EventType = 'eventType',
  Id = 'id',
  Owner = 'owner',
  Price = 'price',
  Timestamp = 'timestamp',
  Token = 'token',
  TxHash = 'txHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Collection = {
  __typename?: 'Collection';
  activities: Array<Activity>;
  bannerImage?: Maybe<Scalars['String']>;
  collectionId: Scalars['String'];
  contractId: Scalars['String'];
  createdAt: Scalars['BigInt'];
  dailyStats: Array<DailyCollectionStat>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  marketTokens: Array<MarketToken>;
  media?: Maybe<CollectionMedia>;
  owner: Account;
  reference?: Maybe<Scalars['String']>;
  statistics: CollectionStatistic;
  title: Scalars['String'];
  traits: Array<CollectionTrait>;
};


export type CollectionActivitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Activity_Filter>;
};


export type CollectionDailyStatsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCollectionStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DailyCollectionStat_Filter>;
};


export type CollectionMarketTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketToken_Filter>;
};


export type CollectionTraitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionTrait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionTrait_Filter>;
};

export type CollectionMedia = {
  __typename?: 'CollectionMedia';
  collection: Collection;
  discord?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CollectionMedia_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  collection?: InputMaybe<Scalars['String']>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  discord_contains?: InputMaybe<Scalars['String']>;
  discord_contains_nocase?: InputMaybe<Scalars['String']>;
  discord_ends_with?: InputMaybe<Scalars['String']>;
  discord_ends_with_nocase?: InputMaybe<Scalars['String']>;
  discord_gt?: InputMaybe<Scalars['String']>;
  discord_gte?: InputMaybe<Scalars['String']>;
  discord_in?: InputMaybe<Array<Scalars['String']>>;
  discord_lt?: InputMaybe<Scalars['String']>;
  discord_lte?: InputMaybe<Scalars['String']>;
  discord_not?: InputMaybe<Scalars['String']>;
  discord_not_contains?: InputMaybe<Scalars['String']>;
  discord_not_contains_nocase?: InputMaybe<Scalars['String']>;
  discord_not_ends_with?: InputMaybe<Scalars['String']>;
  discord_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  discord_not_in?: InputMaybe<Array<Scalars['String']>>;
  discord_not_starts_with?: InputMaybe<Scalars['String']>;
  discord_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  discord_starts_with?: InputMaybe<Scalars['String']>;
  discord_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  telegram?: InputMaybe<Scalars['String']>;
  telegram_contains?: InputMaybe<Scalars['String']>;
  telegram_contains_nocase?: InputMaybe<Scalars['String']>;
  telegram_ends_with?: InputMaybe<Scalars['String']>;
  telegram_ends_with_nocase?: InputMaybe<Scalars['String']>;
  telegram_gt?: InputMaybe<Scalars['String']>;
  telegram_gte?: InputMaybe<Scalars['String']>;
  telegram_in?: InputMaybe<Array<Scalars['String']>>;
  telegram_lt?: InputMaybe<Scalars['String']>;
  telegram_lte?: InputMaybe<Scalars['String']>;
  telegram_not?: InputMaybe<Scalars['String']>;
  telegram_not_contains?: InputMaybe<Scalars['String']>;
  telegram_not_contains_nocase?: InputMaybe<Scalars['String']>;
  telegram_not_ends_with?: InputMaybe<Scalars['String']>;
  telegram_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  telegram_not_in?: InputMaybe<Array<Scalars['String']>>;
  telegram_not_starts_with?: InputMaybe<Scalars['String']>;
  telegram_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  telegram_starts_with?: InputMaybe<Scalars['String']>;
  telegram_starts_with_nocase?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_contains_nocase?: InputMaybe<Scalars['String']>;
  twitter_ends_with?: InputMaybe<Scalars['String']>;
  twitter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  twitter_gt?: InputMaybe<Scalars['String']>;
  twitter_gte?: InputMaybe<Scalars['String']>;
  twitter_in?: InputMaybe<Array<Scalars['String']>>;
  twitter_lt?: InputMaybe<Scalars['String']>;
  twitter_lte?: InputMaybe<Scalars['String']>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  twitter_not_ends_with?: InputMaybe<Scalars['String']>;
  twitter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<Scalars['String']>>;
  twitter_not_starts_with?: InputMaybe<Scalars['String']>;
  twitter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  twitter_starts_with?: InputMaybe<Scalars['String']>;
  twitter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CollectionMedia_OrderBy {
  Collection = 'collection',
  Discord = 'discord',
  Id = 'id',
  Telegram = 'telegram',
  Twitter = 'twitter',
  Website = 'website'
}

export type CollectionStatistic = {
  __typename?: 'CollectionStatistic';
  average: Scalars['BigDecimal'];
  highestSale?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  listed: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type CollectionStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  average?: InputMaybe<Scalars['BigDecimal']>;
  average_gt?: InputMaybe<Scalars['BigDecimal']>;
  average_gte?: InputMaybe<Scalars['BigDecimal']>;
  average_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  average_lt?: InputMaybe<Scalars['BigDecimal']>;
  average_lte?: InputMaybe<Scalars['BigDecimal']>;
  average_not?: InputMaybe<Scalars['BigDecimal']>;
  average_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highestSale?: InputMaybe<Scalars['BigInt']>;
  highestSale_gt?: InputMaybe<Scalars['BigInt']>;
  highestSale_gte?: InputMaybe<Scalars['BigInt']>;
  highestSale_in?: InputMaybe<Array<Scalars['BigInt']>>;
  highestSale_lt?: InputMaybe<Scalars['BigInt']>;
  highestSale_lte?: InputMaybe<Scalars['BigInt']>;
  highestSale_not?: InputMaybe<Scalars['BigInt']>;
  highestSale_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listed?: InputMaybe<Scalars['BigInt']>;
  listed_gt?: InputMaybe<Scalars['BigInt']>;
  listed_gte?: InputMaybe<Scalars['BigInt']>;
  listed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listed_lt?: InputMaybe<Scalars['BigInt']>;
  listed_lte?: InputMaybe<Scalars['BigInt']>;
  listed_not?: InputMaybe<Scalars['BigInt']>;
  listed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum CollectionStatistic_OrderBy {
  Average = 'average',
  HighestSale = 'highestSale',
  Id = 'id',
  Listed = 'listed',
  Sales = 'sales',
  Volume = 'volume'
}

export type CollectionTrait = {
  __typename?: 'CollectionTrait';
  attribute: Scalars['String'];
  collection: Collection;
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
};

export type CollectionTrait_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  attribute?: InputMaybe<Scalars['String']>;
  attribute_contains?: InputMaybe<Scalars['String']>;
  attribute_contains_nocase?: InputMaybe<Scalars['String']>;
  attribute_ends_with?: InputMaybe<Scalars['String']>;
  attribute_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attribute_gt?: InputMaybe<Scalars['String']>;
  attribute_gte?: InputMaybe<Scalars['String']>;
  attribute_in?: InputMaybe<Array<Scalars['String']>>;
  attribute_lt?: InputMaybe<Scalars['String']>;
  attribute_lte?: InputMaybe<Scalars['String']>;
  attribute_not?: InputMaybe<Scalars['String']>;
  attribute_not_contains?: InputMaybe<Scalars['String']>;
  attribute_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attribute_not_ends_with?: InputMaybe<Scalars['String']>;
  attribute_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attribute_not_in?: InputMaybe<Array<Scalars['String']>>;
  attribute_not_starts_with?: InputMaybe<Scalars['String']>;
  attribute_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attribute_starts_with?: InputMaybe<Scalars['String']>;
  attribute_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  values?: InputMaybe<Array<Scalars['String']>>;
  values_contains?: InputMaybe<Array<Scalars['String']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  values_not?: InputMaybe<Array<Scalars['String']>>;
  values_not_contains?: InputMaybe<Array<Scalars['String']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum CollectionTrait_OrderBy {
  Attribute = 'attribute',
  Collection = 'collection',
  Id = 'id',
  Values = 'values'
}

export type Collection_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bannerImage?: InputMaybe<Scalars['String']>;
  bannerImage_contains?: InputMaybe<Scalars['String']>;
  bannerImage_contains_nocase?: InputMaybe<Scalars['String']>;
  bannerImage_ends_with?: InputMaybe<Scalars['String']>;
  bannerImage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bannerImage_gt?: InputMaybe<Scalars['String']>;
  bannerImage_gte?: InputMaybe<Scalars['String']>;
  bannerImage_in?: InputMaybe<Array<Scalars['String']>>;
  bannerImage_lt?: InputMaybe<Scalars['String']>;
  bannerImage_lte?: InputMaybe<Scalars['String']>;
  bannerImage_not?: InputMaybe<Scalars['String']>;
  bannerImage_not_contains?: InputMaybe<Scalars['String']>;
  bannerImage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bannerImage_not_ends_with?: InputMaybe<Scalars['String']>;
  bannerImage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bannerImage_not_in?: InputMaybe<Array<Scalars['String']>>;
  bannerImage_not_starts_with?: InputMaybe<Scalars['String']>;
  bannerImage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bannerImage_starts_with?: InputMaybe<Scalars['String']>;
  bannerImage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collectionId?: InputMaybe<Scalars['String']>;
  collectionId_contains?: InputMaybe<Scalars['String']>;
  collectionId_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionId_ends_with?: InputMaybe<Scalars['String']>;
  collectionId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionId_gt?: InputMaybe<Scalars['String']>;
  collectionId_gte?: InputMaybe<Scalars['String']>;
  collectionId_in?: InputMaybe<Array<Scalars['String']>>;
  collectionId_lt?: InputMaybe<Scalars['String']>;
  collectionId_lte?: InputMaybe<Scalars['String']>;
  collectionId_not?: InputMaybe<Scalars['String']>;
  collectionId_not_contains?: InputMaybe<Scalars['String']>;
  collectionId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionId_not_ends_with?: InputMaybe<Scalars['String']>;
  collectionId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionId_not_in?: InputMaybe<Array<Scalars['String']>>;
  collectionId_not_starts_with?: InputMaybe<Scalars['String']>;
  collectionId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collectionId_starts_with?: InputMaybe<Scalars['String']>;
  collectionId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractId?: InputMaybe<Scalars['String']>;
  contractId_contains?: InputMaybe<Scalars['String']>;
  contractId_contains_nocase?: InputMaybe<Scalars['String']>;
  contractId_ends_with?: InputMaybe<Scalars['String']>;
  contractId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractId_gt?: InputMaybe<Scalars['String']>;
  contractId_gte?: InputMaybe<Scalars['String']>;
  contractId_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_lt?: InputMaybe<Scalars['String']>;
  contractId_lte?: InputMaybe<Scalars['String']>;
  contractId_not?: InputMaybe<Scalars['String']>;
  contractId_not_contains?: InputMaybe<Scalars['String']>;
  contractId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractId_not_ends_with?: InputMaybe<Scalars['String']>;
  contractId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractId_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractId_not_starts_with?: InputMaybe<Scalars['String']>;
  contractId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractId_starts_with?: InputMaybe<Scalars['String']>;
  contractId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_contains_nocase?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_contains_nocase?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_contains?: InputMaybe<Scalars['String']>;
  reference_contains_nocase?: InputMaybe<Scalars['String']>;
  reference_ends_with?: InputMaybe<Scalars['String']>;
  reference_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reference_gt?: InputMaybe<Scalars['String']>;
  reference_gte?: InputMaybe<Scalars['String']>;
  reference_in?: InputMaybe<Array<Scalars['String']>>;
  reference_lt?: InputMaybe<Scalars['String']>;
  reference_lte?: InputMaybe<Scalars['String']>;
  reference_not?: InputMaybe<Scalars['String']>;
  reference_not_contains?: InputMaybe<Scalars['String']>;
  reference_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reference_not_ends_with?: InputMaybe<Scalars['String']>;
  reference_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reference_not_in?: InputMaybe<Array<Scalars['String']>>;
  reference_not_starts_with?: InputMaybe<Scalars['String']>;
  reference_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reference_starts_with?: InputMaybe<Scalars['String']>;
  reference_starts_with_nocase?: InputMaybe<Scalars['String']>;
  statistics?: InputMaybe<Scalars['String']>;
  statistics_contains?: InputMaybe<Scalars['String']>;
  statistics_contains_nocase?: InputMaybe<Scalars['String']>;
  statistics_ends_with?: InputMaybe<Scalars['String']>;
  statistics_ends_with_nocase?: InputMaybe<Scalars['String']>;
  statistics_gt?: InputMaybe<Scalars['String']>;
  statistics_gte?: InputMaybe<Scalars['String']>;
  statistics_in?: InputMaybe<Array<Scalars['String']>>;
  statistics_lt?: InputMaybe<Scalars['String']>;
  statistics_lte?: InputMaybe<Scalars['String']>;
  statistics_not?: InputMaybe<Scalars['String']>;
  statistics_not_contains?: InputMaybe<Scalars['String']>;
  statistics_not_contains_nocase?: InputMaybe<Scalars['String']>;
  statistics_not_ends_with?: InputMaybe<Scalars['String']>;
  statistics_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  statistics_not_in?: InputMaybe<Array<Scalars['String']>>;
  statistics_not_starts_with?: InputMaybe<Scalars['String']>;
  statistics_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  statistics_starts_with?: InputMaybe<Scalars['String']>;
  statistics_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Collection_OrderBy {
  Activities = 'activities',
  BannerImage = 'bannerImage',
  CollectionId = 'collectionId',
  ContractId = 'contractId',
  CreatedAt = 'createdAt',
  DailyStats = 'dailyStats',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  MarketTokens = 'marketTokens',
  Media = 'media',
  Owner = 'owner',
  Reference = 'reference',
  Statistics = 'statistics',
  Title = 'title',
  Traits = 'traits'
}

export type Contract = {
  __typename?: 'Contract';
  activities: Array<Activity>;
  average: Scalars['BigDecimal'];
  id: Scalars['ID'];
  isVerified: Scalars['Boolean'];
  listed: Scalars['BigInt'];
  marketTokens: Array<MarketToken>;
  name?: Maybe<Scalars['String']>;
  sales: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};


export type ContractActivitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Activity_Filter>;
};


export type ContractMarketTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketToken_Filter>;
};

export type Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  average?: InputMaybe<Scalars['BigDecimal']>;
  average_gt?: InputMaybe<Scalars['BigDecimal']>;
  average_gte?: InputMaybe<Scalars['BigDecimal']>;
  average_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  average_lt?: InputMaybe<Scalars['BigDecimal']>;
  average_lte?: InputMaybe<Scalars['BigDecimal']>;
  average_not?: InputMaybe<Scalars['BigDecimal']>;
  average_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  isVerified_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isVerified_not?: InputMaybe<Scalars['Boolean']>;
  isVerified_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  listed?: InputMaybe<Scalars['BigInt']>;
  listed_gt?: InputMaybe<Scalars['BigInt']>;
  listed_gte?: InputMaybe<Scalars['BigInt']>;
  listed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listed_lt?: InputMaybe<Scalars['BigInt']>;
  listed_lte?: InputMaybe<Scalars['BigInt']>;
  listed_not?: InputMaybe<Scalars['BigInt']>;
  listed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Contract_OrderBy {
  Activities = 'activities',
  Average = 'average',
  Id = 'id',
  IsVerified = 'isVerified',
  Listed = 'listed',
  MarketTokens = 'marketTokens',
  Name = 'name',
  Sales = 'sales',
  Volume = 'volume'
}

export type DailyAccountStat = {
  __typename?: 'DailyAccountStat';
  account: Account;
  earned: Scalars['BigDecimal'];
  id: Scalars['ID'];
  purchases: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  spent: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
};

export type DailyAccountStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum DailyAccountStat_OrderBy {
  Account = 'account',
  Earned = 'earned',
  Id = 'id',
  Purchases = 'purchases',
  Sales = 'sales',
  Spent = 'spent',
  Timestamp = 'timestamp'
}

export type DailyCollectionStat = {
  __typename?: 'DailyCollectionStat';
  average: Scalars['BigDecimal'];
  collection: Collection;
  floor: Scalars['BigInt'];
  id: Scalars['ID'];
  sales: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type DailyCollectionStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  average?: InputMaybe<Scalars['BigDecimal']>;
  average_gt?: InputMaybe<Scalars['BigDecimal']>;
  average_gte?: InputMaybe<Scalars['BigDecimal']>;
  average_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  average_lt?: InputMaybe<Scalars['BigDecimal']>;
  average_lte?: InputMaybe<Scalars['BigDecimal']>;
  average_not?: InputMaybe<Scalars['BigDecimal']>;
  average_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collection?: InputMaybe<Scalars['String']>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  floor?: InputMaybe<Scalars['BigInt']>;
  floor_gt?: InputMaybe<Scalars['BigInt']>;
  floor_gte?: InputMaybe<Scalars['BigInt']>;
  floor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  floor_lt?: InputMaybe<Scalars['BigInt']>;
  floor_lte?: InputMaybe<Scalars['BigInt']>;
  floor_not?: InputMaybe<Scalars['BigInt']>;
  floor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum DailyCollectionStat_OrderBy {
  Average = 'average',
  Collection = 'collection',
  Floor = 'floor',
  Id = 'id',
  Sales = 'sales',
  Timestamp = 'timestamp',
  Volume = 'volume'
}

export type DailyMarketStat = {
  __typename?: 'DailyMarketStat';
  average: Scalars['BigDecimal'];
  id: Scalars['ID'];
  sales: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type DailyMarketStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  average?: InputMaybe<Scalars['BigDecimal']>;
  average_gt?: InputMaybe<Scalars['BigDecimal']>;
  average_gte?: InputMaybe<Scalars['BigDecimal']>;
  average_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  average_lt?: InputMaybe<Scalars['BigDecimal']>;
  average_lte?: InputMaybe<Scalars['BigDecimal']>;
  average_not?: InputMaybe<Scalars['BigDecimal']>;
  average_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum DailyMarketStat_OrderBy {
  Average = 'average',
  Id = 'id',
  Sales = 'sales',
  Timestamp = 'timestamp',
  Volume = 'volume'
}

export type MarketToken = {
  __typename?: 'MarketToken';
  category?: Maybe<TokenCategory>;
  collection?: Maybe<Collection>;
  collectionTitle?: Maybe<Scalars['String']>;
  contract: Contract;
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  listingTimestamp: Scalars['BigInt'];
  media?: Maybe<Scalars['String']>;
  owner: Account;
  price: Scalars['BigInt'];
  reference?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tokenId: Scalars['String'];
  traits?: Maybe<Array<TokenTrait>>;
};


export type MarketTokenTraitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTrait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenTrait_Filter>;
};

export type MarketToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  category?: InputMaybe<TokenCategory>;
  category_in?: InputMaybe<Array<TokenCategory>>;
  category_not?: InputMaybe<TokenCategory>;
  category_not_in?: InputMaybe<Array<TokenCategory>>;
  collection?: InputMaybe<Scalars['String']>;
  collectionTitle?: InputMaybe<Scalars['String']>;
  collectionTitle_contains?: InputMaybe<Scalars['String']>;
  collectionTitle_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  collectionTitle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_gt?: InputMaybe<Scalars['String']>;
  collectionTitle_gte?: InputMaybe<Scalars['String']>;
  collectionTitle_in?: InputMaybe<Array<Scalars['String']>>;
  collectionTitle_lt?: InputMaybe<Scalars['String']>;
  collectionTitle_lte?: InputMaybe<Scalars['String']>;
  collectionTitle_not?: InputMaybe<Scalars['String']>;
  collectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  collectionTitle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  collectionTitle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  collectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  collectionTitle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  collectionTitle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<Scalars['String']>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listingTimestamp?: InputMaybe<Scalars['BigInt']>;
  listingTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  listingTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  listingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listingTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  listingTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  listingTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  listingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_contains_nocase?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_contains_nocase?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reference?: InputMaybe<Scalars['String']>;
  reference_contains?: InputMaybe<Scalars['String']>;
  reference_contains_nocase?: InputMaybe<Scalars['String']>;
  reference_ends_with?: InputMaybe<Scalars['String']>;
  reference_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reference_gt?: InputMaybe<Scalars['String']>;
  reference_gte?: InputMaybe<Scalars['String']>;
  reference_in?: InputMaybe<Array<Scalars['String']>>;
  reference_lt?: InputMaybe<Scalars['String']>;
  reference_lte?: InputMaybe<Scalars['String']>;
  reference_not?: InputMaybe<Scalars['String']>;
  reference_not_contains?: InputMaybe<Scalars['String']>;
  reference_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reference_not_ends_with?: InputMaybe<Scalars['String']>;
  reference_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reference_not_in?: InputMaybe<Array<Scalars['String']>>;
  reference_not_starts_with?: InputMaybe<Scalars['String']>;
  reference_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reference_starts_with?: InputMaybe<Scalars['String']>;
  reference_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum MarketToken_OrderBy {
  Category = 'category',
  Collection = 'collection',
  CollectionTitle = 'collectionTitle',
  Contract = 'contract',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  ListingTimestamp = 'listingTimestamp',
  Media = 'media',
  Owner = 'owner',
  Price = 'price',
  Reference = 'reference',
  Title = 'title',
  TokenId = 'tokenId',
  Traits = 'traits'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountSearch: Array<Account>;
  accounts: Array<Account>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  activitySearch: Array<Activity>;
  collection?: Maybe<Collection>;
  collectionMedia?: Maybe<CollectionMedia>;
  collectionMedias: Array<CollectionMedia>;
  collectionStatistic?: Maybe<CollectionStatistic>;
  collectionStatistics: Array<CollectionStatistic>;
  collectionTrait?: Maybe<CollectionTrait>;
  collectionTraits: Array<CollectionTrait>;
  collections: Array<Collection>;
  collectionsSearch: Array<Collection>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  dailyAccountStat?: Maybe<DailyAccountStat>;
  dailyAccountStats: Array<DailyAccountStat>;
  dailyCollectionStat?: Maybe<DailyCollectionStat>;
  dailyCollectionStats: Array<DailyCollectionStat>;
  dailyMarketStat?: Maybe<DailyMarketStat>;
  dailyMarketStats: Array<DailyMarketStat>;
  marketSearch: Array<MarketToken>;
  marketToken?: Maybe<MarketToken>;
  marketTokens: Array<MarketToken>;
  savedToken?: Maybe<SavedToken>;
  savedTokens: Array<SavedToken>;
  tokenTrait?: Maybe<TokenTrait>;
  tokenTraits: Array<TokenTrait>;
  totalMarketStat?: Maybe<TotalMarketStat>;
  totalMarketStats: Array<TotalMarketStat>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};


export type QueryActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryActivitySearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryCollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectionMediaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectionMediasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionMedia_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectionMedia_Filter>;
};


export type QueryCollectionStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectionStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectionStatistic_Filter>;
};


export type QueryCollectionTraitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectionTraitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionTrait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectionTrait_Filter>;
};


export type QueryCollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collection_Filter>;
};


export type QueryCollectionsSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type QueryDailyAccountStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDailyAccountStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyAccountStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyAccountStat_Filter>;
};


export type QueryDailyCollectionStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDailyCollectionStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCollectionStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyCollectionStat_Filter>;
};


export type QueryDailyMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDailyMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyMarketStat_Filter>;
};


export type QueryMarketSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryMarketTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketToken_Filter>;
};


export type QuerySavedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySavedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SavedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SavedToken_Filter>;
};


export type QueryTokenTraitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenTraitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTrait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenTrait_Filter>;
};


export type QueryTotalMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTotalMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TotalMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalMarketStat_Filter>;
};

export type SavedToken = {
  __typename?: 'SavedToken';
  collection?: Maybe<Collection>;
  collectionTitle?: Maybe<Scalars['String']>;
  contract: Contract;
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type SavedToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  collection?: InputMaybe<Scalars['String']>;
  collectionTitle?: InputMaybe<Scalars['String']>;
  collectionTitle_contains?: InputMaybe<Scalars['String']>;
  collectionTitle_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  collectionTitle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_gt?: InputMaybe<Scalars['String']>;
  collectionTitle_gte?: InputMaybe<Scalars['String']>;
  collectionTitle_in?: InputMaybe<Array<Scalars['String']>>;
  collectionTitle_lt?: InputMaybe<Scalars['String']>;
  collectionTitle_lte?: InputMaybe<Scalars['String']>;
  collectionTitle_not?: InputMaybe<Scalars['String']>;
  collectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  collectionTitle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  collectionTitle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_not_in?: InputMaybe<Array<Scalars['String']>>;
  collectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  collectionTitle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  collectionTitle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<Scalars['String']>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  media?: InputMaybe<Scalars['String']>;
  media_contains?: InputMaybe<Scalars['String']>;
  media_contains_nocase?: InputMaybe<Scalars['String']>;
  media_ends_with?: InputMaybe<Scalars['String']>;
  media_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_gt?: InputMaybe<Scalars['String']>;
  media_gte?: InputMaybe<Scalars['String']>;
  media_in?: InputMaybe<Array<Scalars['String']>>;
  media_lt?: InputMaybe<Scalars['String']>;
  media_lte?: InputMaybe<Scalars['String']>;
  media_not?: InputMaybe<Scalars['String']>;
  media_not_contains?: InputMaybe<Scalars['String']>;
  media_not_contains_nocase?: InputMaybe<Scalars['String']>;
  media_not_ends_with?: InputMaybe<Scalars['String']>;
  media_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  media_not_in?: InputMaybe<Array<Scalars['String']>>;
  media_not_starts_with?: InputMaybe<Scalars['String']>;
  media_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  media_starts_with?: InputMaybe<Scalars['String']>;
  media_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_contains?: InputMaybe<Scalars['String']>;
  reference_contains_nocase?: InputMaybe<Scalars['String']>;
  reference_ends_with?: InputMaybe<Scalars['String']>;
  reference_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reference_gt?: InputMaybe<Scalars['String']>;
  reference_gte?: InputMaybe<Scalars['String']>;
  reference_in?: InputMaybe<Array<Scalars['String']>>;
  reference_lt?: InputMaybe<Scalars['String']>;
  reference_lte?: InputMaybe<Scalars['String']>;
  reference_not?: InputMaybe<Scalars['String']>;
  reference_not_contains?: InputMaybe<Scalars['String']>;
  reference_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reference_not_ends_with?: InputMaybe<Scalars['String']>;
  reference_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reference_not_in?: InputMaybe<Array<Scalars['String']>>;
  reference_not_starts_with?: InputMaybe<Scalars['String']>;
  reference_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reference_starts_with?: InputMaybe<Scalars['String']>;
  reference_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_contains?: InputMaybe<Scalars['String']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_not?: InputMaybe<Scalars['String']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SavedToken_OrderBy {
  Collection = 'collection',
  CollectionTitle = 'collectionTitle',
  Contract = 'contract',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  Media = 'media',
  Reference = 'reference',
  Title = 'title',
  TokenId = 'tokenId'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  collection?: Maybe<Collection>;
  collectionMedia?: Maybe<CollectionMedia>;
  collectionMedias: Array<CollectionMedia>;
  collectionStatistic?: Maybe<CollectionStatistic>;
  collectionStatistics: Array<CollectionStatistic>;
  collectionTrait?: Maybe<CollectionTrait>;
  collectionTraits: Array<CollectionTrait>;
  collections: Array<Collection>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  dailyAccountStat?: Maybe<DailyAccountStat>;
  dailyAccountStats: Array<DailyAccountStat>;
  dailyCollectionStat?: Maybe<DailyCollectionStat>;
  dailyCollectionStats: Array<DailyCollectionStat>;
  dailyMarketStat?: Maybe<DailyMarketStat>;
  dailyMarketStats: Array<DailyMarketStat>;
  marketToken?: Maybe<MarketToken>;
  marketTokens: Array<MarketToken>;
  savedToken?: Maybe<SavedToken>;
  savedTokens: Array<SavedToken>;
  tokenTrait?: Maybe<TokenTrait>;
  tokenTraits: Array<TokenTrait>;
  totalMarketStat?: Maybe<TotalMarketStat>;
  totalMarketStats: Array<TotalMarketStat>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};


export type SubscriptionActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionMediaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionMediasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionMedia_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectionMedia_Filter>;
};


export type SubscriptionCollectionStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectionStatistic_Filter>;
};


export type SubscriptionCollectionTraitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectionTraitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectionTrait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectionTrait_Filter>;
};


export type SubscriptionCollectionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collection_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collection_Filter>;
};


export type SubscriptionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type SubscriptionDailyAccountStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDailyAccountStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyAccountStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyAccountStat_Filter>;
};


export type SubscriptionDailyCollectionStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDailyCollectionStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyCollectionStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyCollectionStat_Filter>;
};


export type SubscriptionDailyMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDailyMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DailyMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyMarketStat_Filter>;
};


export type SubscriptionMarketTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketToken_Filter>;
};


export type SubscriptionSavedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSavedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SavedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SavedToken_Filter>;
};


export type SubscriptionTokenTraitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenTraitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTrait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenTrait_Filter>;
};


export type SubscriptionTotalMarketStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTotalMarketStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TotalMarketStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalMarketStat_Filter>;
};

export enum TokenCategory {
  Art = 'Art',
  Games = 'Games',
  /** 3D */
  Pfp = 'PFP',
  Photography = 'Photography',
  Video = 'Video'
}

export type TokenTrait = {
  __typename?: 'TokenTrait';
  attribute: Scalars['String'];
  id: Scalars['ID'];
  token: MarketToken;
  value: Scalars['String'];
};

export type TokenTrait_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  attribute?: InputMaybe<Scalars['String']>;
  attribute_contains?: InputMaybe<Scalars['String']>;
  attribute_contains_nocase?: InputMaybe<Scalars['String']>;
  attribute_ends_with?: InputMaybe<Scalars['String']>;
  attribute_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attribute_gt?: InputMaybe<Scalars['String']>;
  attribute_gte?: InputMaybe<Scalars['String']>;
  attribute_in?: InputMaybe<Array<Scalars['String']>>;
  attribute_lt?: InputMaybe<Scalars['String']>;
  attribute_lte?: InputMaybe<Scalars['String']>;
  attribute_not?: InputMaybe<Scalars['String']>;
  attribute_not_contains?: InputMaybe<Scalars['String']>;
  attribute_not_contains_nocase?: InputMaybe<Scalars['String']>;
  attribute_not_ends_with?: InputMaybe<Scalars['String']>;
  attribute_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  attribute_not_in?: InputMaybe<Array<Scalars['String']>>;
  attribute_not_starts_with?: InputMaybe<Scalars['String']>;
  attribute_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  attribute_starts_with?: InputMaybe<Scalars['String']>;
  attribute_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TokenTrait_OrderBy {
  Attribute = 'attribute',
  Id = 'id',
  Token = 'token',
  Value = 'value'
}

export type TotalMarketStat = {
  __typename?: 'TotalMarketStat';
  average: Scalars['BigDecimal'];
  id: Scalars['ID'];
  listed: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type TotalMarketStat_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  average?: InputMaybe<Scalars['BigDecimal']>;
  average_gt?: InputMaybe<Scalars['BigDecimal']>;
  average_gte?: InputMaybe<Scalars['BigDecimal']>;
  average_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  average_lt?: InputMaybe<Scalars['BigDecimal']>;
  average_lte?: InputMaybe<Scalars['BigDecimal']>;
  average_not?: InputMaybe<Scalars['BigDecimal']>;
  average_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  listed?: InputMaybe<Scalars['BigInt']>;
  listed_gt?: InputMaybe<Scalars['BigInt']>;
  listed_gte?: InputMaybe<Scalars['BigInt']>;
  listed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  listed_lt?: InputMaybe<Scalars['BigInt']>;
  listed_lte?: InputMaybe<Scalars['BigInt']>;
  listed_not?: InputMaybe<Scalars['BigInt']>;
  listed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales?: InputMaybe<Scalars['BigInt']>;
  sales_gt?: InputMaybe<Scalars['BigInt']>;
  sales_gte?: InputMaybe<Scalars['BigInt']>;
  sales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales_lt?: InputMaybe<Scalars['BigInt']>;
  sales_lte?: InputMaybe<Scalars['BigInt']>;
  sales_not?: InputMaybe<Scalars['BigInt']>;
  sales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TotalMarketStat_OrderBy {
  Average = 'average',
  Id = 'id',
  Listed = 'listed',
  Sales = 'sales',
  Volume = 'volume'
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

export type CollectionQueryVariables = Exact<{
  collectionId: Scalars['String'];
}>;


export type CollectionQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, collectionId: string, contractId: string, title: string, description: string, image: string, bannerImage?: string | null, reference?: string | null, owner: { __typename?: 'Account', id: string }, media?: { __typename?: 'CollectionMedia', website?: string | null, telegram?: string | null, twitter?: string | null, discord?: string | null } | null, statistics: { __typename?: 'CollectionStatistic', id: string, volume: any, sales: any, average: any, listed: any, highestSale?: any | null }, floor: Array<{ __typename?: 'MarketToken', id: string, price: any }> }> };

export type CollectionsTextSearchQueryVariables = Exact<{
  text: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type CollectionsTextSearchQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, collectionId: string, title: string, description: string, image: string, owner: { __typename?: 'Account', id: string } }> };

export type CollectionsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type CollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, collectionId: string, title: string, description: string, image: string, owner: { __typename?: 'Account', id: string } }> };

export type FindCollectionByContractQueryVariables = Exact<{
  contractId: Scalars['String'];
  collectionId?: InputMaybe<Scalars['String']>;
}>;


export type FindCollectionByContractQuery = { __typename?: 'Query', whitelisted: Array<{ __typename?: 'Collection', id: string, collectionId: string, image: string, title: string }>, mjolnear: Array<{ __typename?: 'Collection', id: string, collectionId: string, image: string, title: string }> };

export type IsCollectionExistsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type IsCollectionExistsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string }> };

export type UserCollectionsQueryVariables = Exact<{
  owner: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type UserCollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, collectionId: string, title: string, description: string, image: string, owner: { __typename?: 'Account', id: string } }> };

export type CollectionActivityQueryVariables = Exact<{
  id: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: Activity_OrderBy;
  orderDirection: OrderDirection;
  events: Array<ActivityEventType> | ActivityEventType;
}>;


export type CollectionActivityQuery = { __typename?: 'Query', activities: Array<{ __typename?: 'Activity', id: string, price?: any | null, txHash: string, blockHash: string, eventType: ActivityEventType, timestamp: any, token: { __typename?: 'SavedToken', id: string, tokenId: string, title: string, media?: string | null }, contract: { __typename?: 'Contract', id: string }, owner: { __typename?: 'Account', id: string }, buyer?: { __typename?: 'Account', id: string } | null }> };

export type TokenActivityQueryVariables = Exact<{
  tokenUID: Scalars['String'];
}>;


export type TokenActivityQuery = { __typename?: 'Query', tokenActivity: Array<{ __typename?: 'Activity', id: string, price?: any | null, txHash: string, eventType: ActivityEventType, timestamp: any, owner: { __typename?: 'Account', id: string }, buyer?: { __typename?: 'Account', id: string } | null }> };

export type BuyerAccountActivityQueryVariables = Exact<{
  accountId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: Activity_OrderBy;
  orderDirection: OrderDirection;
}>;


export type BuyerAccountActivityQuery = { __typename?: 'Query', activities: Array<{ __typename?: 'Activity', id: string, eventType: ActivityEventType, timestamp: any, price?: any | null, txHash: string, token: { __typename?: 'SavedToken', id: string, tokenId: string, title: string, media?: string | null }, contract: { __typename?: 'Contract', id: string }, owner: { __typename?: 'Account', id: string }, buyer?: { __typename?: 'Account', id: string } | null }> };

export type OwnerAccountActivityQueryVariables = Exact<{
  accountId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  eventType: ActivityEventType;
  orderBy: Activity_OrderBy;
  orderDirection: OrderDirection;
}>;


export type OwnerAccountActivityQuery = { __typename?: 'Query', activities: Array<{ __typename?: 'Activity', id: string, eventType: ActivityEventType, timestamp: any, price?: any | null, txHash: string, token: { __typename?: 'SavedToken', id: string, tokenId: string, title: string, media?: string | null }, contract: { __typename?: 'Contract', id: string }, owner: { __typename?: 'Account', id: string }, buyer?: { __typename?: 'Account', id: string } | null }> };

export type CollectionMarketTokensQueryVariables = Exact<{
  collection: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
  priceFrom: Scalars['BigInt'];
  priceTo: Scalars['BigInt'];
}>;


export type CollectionMarketTokensQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'MarketToken', id: string, tokenId: string, title: string, media?: string | null, price: any, contract: { __typename?: 'Contract', id: string, name?: string | null, isVerified: boolean } }> };

export type CollectionTotalStatsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CollectionTotalStatsQuery = { __typename?: 'Query', stats?: { __typename?: 'CollectionStatistic', id: string, volume: any, sales: any, average: any, listed: any, highestSale?: any | null } | null, floor?: { __typename?: 'Collection', marketTokens: Array<{ __typename?: 'MarketToken', id: string, price: any }> } | null };

export type ContractsQueryVariables = Exact<{
  contracts?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type ContractsQuery = { __typename?: 'Query', contracts: Array<{ __typename?: 'Contract', id: string, name?: string | null, isVerified: boolean }> };

export type AccountMarketTokensQueryVariables = Exact<{
  accountId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
  priceFrom: Scalars['BigInt'];
  priceTo: Scalars['BigInt'];
}>;


export type AccountMarketTokensQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'MarketToken', id: string, tokenId: string, title: string, media?: string | null, price: any, contract: { __typename?: 'Contract', id: string, name?: string | null, isVerified: boolean } }> };

export type MarketStatisticsQueryVariables = Exact<{
  fromTimestamp: Scalars['BigInt'];
}>;


export type MarketStatisticsQuery = { __typename?: 'Query', dailyMarketStats: Array<{ __typename?: 'DailyMarketStat', id: string, volume: any, sales: any, timestamp: any }> };

export type NewMarketTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type NewMarketTokensQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'MarketToken', id: string, tokenId: string, title: string, description?: string | null, media?: string | null, price: any, contract: { __typename?: 'Contract', id: string, name?: string | null, isVerified: boolean } }> };

export type TokensFilterQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
  priceFrom: Scalars['BigInt'];
  priceTo: Scalars['BigInt'];
}>;


export type TokensFilterQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'MarketToken', id: string, tokenId: string, title: string, media?: string | null, price: any, contract: { __typename?: 'Contract', id: string, name?: string | null, isVerified: boolean } }> };

export type TokensTextSearchQueryVariables = Exact<{
  text: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type TokensTextSearchQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'MarketToken', id: string, tokenId: string, title: string, media?: string | null, price: any, contract: { __typename?: 'Contract', id: string, name?: string | null, isVerified: boolean } }> };

export type DailyCollectionStatsQueryVariables = Exact<{
  collection: Scalars['String'];
}>;


export type DailyCollectionStatsQuery = { __typename?: 'Query', dailyCollectionStats: Array<{ __typename?: 'DailyCollectionStat', id: string, timestamp: any, sales: any, average: any, floor: any, volume: any }> };


export const CollectionDocument = gql`
    query collection($collectionId: String!) {
  collections(first: 1, where: {collectionId: $collectionId}) {
    id
    owner {
      id
    }
    collectionId
    contractId
    title
    description
    image
    bannerImage
    reference
    media {
      website
      telegram
      twitter
      discord
    }
    statistics {
      id
      volume
      sales
      average
      listed
      highestSale
    }
    floor: marketTokens(orderBy: price, orderDirection: asc, first: 1) {
      id
      price
    }
  }
}
    `;

/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options);
      }
export function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options);
        }
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;
export const CollectionsTextSearchDocument = gql`
    query collectionsTextSearch($text: String!, $limit: Int!, $offset: Int!) {
  collections: collectionsSearch(text: $text, first: $limit, skip: $offset) {
    id
    owner {
      id
    }
    collectionId
    title
    description
    image
  }
}
    `;

/**
 * __useCollectionsTextSearchQuery__
 *
 * To run a query within a React component, call `useCollectionsTextSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsTextSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsTextSearchQuery({
 *   variables: {
 *      text: // value for 'text'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useCollectionsTextSearchQuery(baseOptions: Apollo.QueryHookOptions<CollectionsTextSearchQuery, CollectionsTextSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsTextSearchQuery, CollectionsTextSearchQueryVariables>(CollectionsTextSearchDocument, options);
      }
export function useCollectionsTextSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsTextSearchQuery, CollectionsTextSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsTextSearchQuery, CollectionsTextSearchQueryVariables>(CollectionsTextSearchDocument, options);
        }
export type CollectionsTextSearchQueryHookResult = ReturnType<typeof useCollectionsTextSearchQuery>;
export type CollectionsTextSearchLazyQueryHookResult = ReturnType<typeof useCollectionsTextSearchLazyQuery>;
export type CollectionsTextSearchQueryResult = Apollo.QueryResult<CollectionsTextSearchQuery, CollectionsTextSearchQueryVariables>;
export const CollectionsDocument = gql`
    query collections($limit: Int!, $offset: Int!) {
  collections(
    first: $limit
    skip: $offset
    orderBy: createdAt
    orderDirection: desc
  ) {
    id
    owner {
      id
    }
    collectionId
    title
    description
    image
  }
}
    `;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
export const FindCollectionByContractDocument = gql`
    query findCollectionByContract($contractId: String!, $collectionId: String) {
  whitelisted: collections(first: 1, where: {contractId: $contractId}) {
    id
    collectionId
    image
    title
  }
  mjolnear: collections(
    first: 1
    where: {contractId: $contractId, collectionId: $collectionId}
  ) {
    id
    collectionId
    image
    title
  }
}
    `;

/**
 * __useFindCollectionByContractQuery__
 *
 * To run a query within a React component, call `useFindCollectionByContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCollectionByContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCollectionByContractQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useFindCollectionByContractQuery(baseOptions: Apollo.QueryHookOptions<FindCollectionByContractQuery, FindCollectionByContractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCollectionByContractQuery, FindCollectionByContractQueryVariables>(FindCollectionByContractDocument, options);
      }
export function useFindCollectionByContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCollectionByContractQuery, FindCollectionByContractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCollectionByContractQuery, FindCollectionByContractQueryVariables>(FindCollectionByContractDocument, options);
        }
export type FindCollectionByContractQueryHookResult = ReturnType<typeof useFindCollectionByContractQuery>;
export type FindCollectionByContractLazyQueryHookResult = ReturnType<typeof useFindCollectionByContractLazyQuery>;
export type FindCollectionByContractQueryResult = Apollo.QueryResult<FindCollectionByContractQuery, FindCollectionByContractQueryVariables>;
export const IsCollectionExistsDocument = gql`
    query isCollectionExists($id: String!) {
  collections(where: {collectionId: $id}) {
    id
  }
}
    `;

/**
 * __useIsCollectionExistsQuery__
 *
 * To run a query within a React component, call `useIsCollectionExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsCollectionExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsCollectionExistsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIsCollectionExistsQuery(baseOptions: Apollo.QueryHookOptions<IsCollectionExistsQuery, IsCollectionExistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsCollectionExistsQuery, IsCollectionExistsQueryVariables>(IsCollectionExistsDocument, options);
      }
export function useIsCollectionExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsCollectionExistsQuery, IsCollectionExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsCollectionExistsQuery, IsCollectionExistsQueryVariables>(IsCollectionExistsDocument, options);
        }
export type IsCollectionExistsQueryHookResult = ReturnType<typeof useIsCollectionExistsQuery>;
export type IsCollectionExistsLazyQueryHookResult = ReturnType<typeof useIsCollectionExistsLazyQuery>;
export type IsCollectionExistsQueryResult = Apollo.QueryResult<IsCollectionExistsQuery, IsCollectionExistsQueryVariables>;
export const UserCollectionsDocument = gql`
    query userCollections($owner: String!, $limit: Int!, $offset: Int!) {
  collections(first: $limit, skip: $offset, where: {owner: $owner}) {
    id
    owner {
      id
    }
    collectionId
    title
    description
    image
  }
}
    `;

/**
 * __useUserCollectionsQuery__
 *
 * To run a query within a React component, call `useUserCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCollectionsQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUserCollectionsQuery(baseOptions: Apollo.QueryHookOptions<UserCollectionsQuery, UserCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCollectionsQuery, UserCollectionsQueryVariables>(UserCollectionsDocument, options);
      }
export function useUserCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCollectionsQuery, UserCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCollectionsQuery, UserCollectionsQueryVariables>(UserCollectionsDocument, options);
        }
export type UserCollectionsQueryHookResult = ReturnType<typeof useUserCollectionsQuery>;
export type UserCollectionsLazyQueryHookResult = ReturnType<typeof useUserCollectionsLazyQuery>;
export type UserCollectionsQueryResult = Apollo.QueryResult<UserCollectionsQuery, UserCollectionsQueryVariables>;
export const CollectionActivityDocument = gql`
    query collectionActivity($id: String!, $limit: Int!, $offset: Int!, $orderBy: Activity_orderBy!, $orderDirection: OrderDirection!, $events: [ActivityEventType!]!) {
  activities(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {collection: $id, eventType_in: $events}
  ) {
    id
    price
    txHash
    blockHash
    eventType
    timestamp
    token {
      id
      tokenId
      title
      media
    }
    contract {
      id
    }
    owner {
      id
    }
    buyer {
      id
    }
  }
}
    `;

/**
 * __useCollectionActivityQuery__
 *
 * To run a query within a React component, call `useCollectionActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      events: // value for 'events'
 *   },
 * });
 */
export function useCollectionActivityQuery(baseOptions: Apollo.QueryHookOptions<CollectionActivityQuery, CollectionActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionActivityQuery, CollectionActivityQueryVariables>(CollectionActivityDocument, options);
      }
export function useCollectionActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionActivityQuery, CollectionActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionActivityQuery, CollectionActivityQueryVariables>(CollectionActivityDocument, options);
        }
export type CollectionActivityQueryHookResult = ReturnType<typeof useCollectionActivityQuery>;
export type CollectionActivityLazyQueryHookResult = ReturnType<typeof useCollectionActivityLazyQuery>;
export type CollectionActivityQueryResult = Apollo.QueryResult<CollectionActivityQuery, CollectionActivityQueryVariables>;
export const TokenActivityDocument = gql`
    query tokenActivity($tokenUID: String!) {
  tokenActivity: activities(
    where: {token: $tokenUID}
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    price
    txHash
    eventType
    timestamp
    owner {
      id
    }
    buyer {
      id
    }
  }
}
    `;

/**
 * __useTokenActivityQuery__
 *
 * To run a query within a React component, call `useTokenActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenActivityQuery({
 *   variables: {
 *      tokenUID: // value for 'tokenUID'
 *   },
 * });
 */
export function useTokenActivityQuery(baseOptions: Apollo.QueryHookOptions<TokenActivityQuery, TokenActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenActivityQuery, TokenActivityQueryVariables>(TokenActivityDocument, options);
      }
export function useTokenActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenActivityQuery, TokenActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenActivityQuery, TokenActivityQueryVariables>(TokenActivityDocument, options);
        }
export type TokenActivityQueryHookResult = ReturnType<typeof useTokenActivityQuery>;
export type TokenActivityLazyQueryHookResult = ReturnType<typeof useTokenActivityLazyQuery>;
export type TokenActivityQueryResult = Apollo.QueryResult<TokenActivityQuery, TokenActivityQueryVariables>;
export const BuyerAccountActivityDocument = gql`
    query buyerAccountActivity($accountId: String!, $limit: Int!, $offset: Int!, $orderBy: Activity_orderBy!, $orderDirection: OrderDirection!) {
  activities(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {buyer: $accountId}
  ) {
    id
    eventType
    timestamp
    price
    txHash
    token {
      id
      tokenId
      title
      media
    }
    contract {
      id
    }
    owner {
      id
    }
    buyer {
      id
    }
  }
}
    `;

/**
 * __useBuyerAccountActivityQuery__
 *
 * To run a query within a React component, call `useBuyerAccountActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuyerAccountActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuyerAccountActivityQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useBuyerAccountActivityQuery(baseOptions: Apollo.QueryHookOptions<BuyerAccountActivityQuery, BuyerAccountActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BuyerAccountActivityQuery, BuyerAccountActivityQueryVariables>(BuyerAccountActivityDocument, options);
      }
export function useBuyerAccountActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BuyerAccountActivityQuery, BuyerAccountActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BuyerAccountActivityQuery, BuyerAccountActivityQueryVariables>(BuyerAccountActivityDocument, options);
        }
export type BuyerAccountActivityQueryHookResult = ReturnType<typeof useBuyerAccountActivityQuery>;
export type BuyerAccountActivityLazyQueryHookResult = ReturnType<typeof useBuyerAccountActivityLazyQuery>;
export type BuyerAccountActivityQueryResult = Apollo.QueryResult<BuyerAccountActivityQuery, BuyerAccountActivityQueryVariables>;
export const OwnerAccountActivityDocument = gql`
    query ownerAccountActivity($accountId: String!, $limit: Int!, $offset: Int!, $eventType: ActivityEventType!, $orderBy: Activity_orderBy!, $orderDirection: OrderDirection!) {
  activities(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {eventType: $eventType, owner: $accountId}
  ) {
    id
    eventType
    timestamp
    price
    txHash
    token {
      id
      tokenId
      title
      media
    }
    contract {
      id
    }
    owner {
      id
    }
    buyer {
      id
    }
  }
}
    `;

/**
 * __useOwnerAccountActivityQuery__
 *
 * To run a query within a React component, call `useOwnerAccountActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnerAccountActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnerAccountActivityQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      eventType: // value for 'eventType'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useOwnerAccountActivityQuery(baseOptions: Apollo.QueryHookOptions<OwnerAccountActivityQuery, OwnerAccountActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OwnerAccountActivityQuery, OwnerAccountActivityQueryVariables>(OwnerAccountActivityDocument, options);
      }
export function useOwnerAccountActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnerAccountActivityQuery, OwnerAccountActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OwnerAccountActivityQuery, OwnerAccountActivityQueryVariables>(OwnerAccountActivityDocument, options);
        }
export type OwnerAccountActivityQueryHookResult = ReturnType<typeof useOwnerAccountActivityQuery>;
export type OwnerAccountActivityLazyQueryHookResult = ReturnType<typeof useOwnerAccountActivityLazyQuery>;
export type OwnerAccountActivityQueryResult = Apollo.QueryResult<OwnerAccountActivityQuery, OwnerAccountActivityQueryVariables>;
export const CollectionMarketTokensDocument = gql`
    query collectionMarketTokens($collection: String!, $limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt!, $priceTo: BigInt!) {
  tokens: marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {collection: $collection, price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    id
    tokenId
    title
    media
    price
    contract {
      id
      name
      isVerified
    }
  }
}
    `;

/**
 * __useCollectionMarketTokensQuery__
 *
 * To run a query within a React component, call `useCollectionMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionMarketTokensQuery({
 *   variables: {
 *      collection: // value for 'collection'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      priceFrom: // value for 'priceFrom'
 *      priceTo: // value for 'priceTo'
 *   },
 * });
 */
export function useCollectionMarketTokensQuery(baseOptions: Apollo.QueryHookOptions<CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>(CollectionMarketTokensDocument, options);
      }
export function useCollectionMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>(CollectionMarketTokensDocument, options);
        }
export type CollectionMarketTokensQueryHookResult = ReturnType<typeof useCollectionMarketTokensQuery>;
export type CollectionMarketTokensLazyQueryHookResult = ReturnType<typeof useCollectionMarketTokensLazyQuery>;
export type CollectionMarketTokensQueryResult = Apollo.QueryResult<CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>;
export const CollectionTotalStatsDocument = gql`
    query collectionTotalStats($id: ID!) {
  stats: collectionStatistic(id: $id) {
    id
    volume
    sales
    average
    listed
    highestSale
  }
  floor: collection(id: $id) {
    marketTokens(orderBy: price, orderDirection: asc, first: 1) {
      id
      price
    }
  }
}
    `;

/**
 * __useCollectionTotalStatsQuery__
 *
 * To run a query within a React component, call `useCollectionTotalStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionTotalStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionTotalStatsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionTotalStatsQuery(baseOptions: Apollo.QueryHookOptions<CollectionTotalStatsQuery, CollectionTotalStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionTotalStatsQuery, CollectionTotalStatsQueryVariables>(CollectionTotalStatsDocument, options);
      }
export function useCollectionTotalStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionTotalStatsQuery, CollectionTotalStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionTotalStatsQuery, CollectionTotalStatsQueryVariables>(CollectionTotalStatsDocument, options);
        }
export type CollectionTotalStatsQueryHookResult = ReturnType<typeof useCollectionTotalStatsQuery>;
export type CollectionTotalStatsLazyQueryHookResult = ReturnType<typeof useCollectionTotalStatsLazyQuery>;
export type CollectionTotalStatsQueryResult = Apollo.QueryResult<CollectionTotalStatsQuery, CollectionTotalStatsQueryVariables>;
export const ContractsDocument = gql`
    query contracts($contracts: [ID!]) {
  contracts(where: {id_in: $contracts}) {
    id
    name
    isVerified
  }
}
    `;

/**
 * __useContractsQuery__
 *
 * To run a query within a React component, call `useContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContractsQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export function useContractsQuery(baseOptions?: Apollo.QueryHookOptions<ContractsQuery, ContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContractsQuery, ContractsQueryVariables>(ContractsDocument, options);
      }
export function useContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContractsQuery, ContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContractsQuery, ContractsQueryVariables>(ContractsDocument, options);
        }
export type ContractsQueryHookResult = ReturnType<typeof useContractsQuery>;
export type ContractsLazyQueryHookResult = ReturnType<typeof useContractsLazyQuery>;
export type ContractsQueryResult = Apollo.QueryResult<ContractsQuery, ContractsQueryVariables>;
export const AccountMarketTokensDocument = gql`
    query accountMarketTokens($accountId: String!, $limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt!, $priceTo: BigInt!) {
  tokens: marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {owner: $accountId, price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    id
    tokenId
    title
    media
    price
    contract {
      id
      name
      isVerified
    }
  }
}
    `;

/**
 * __useAccountMarketTokensQuery__
 *
 * To run a query within a React component, call `useAccountMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountMarketTokensQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      priceFrom: // value for 'priceFrom'
 *      priceTo: // value for 'priceTo'
 *   },
 * });
 */
export function useAccountMarketTokensQuery(baseOptions: Apollo.QueryHookOptions<AccountMarketTokensQuery, AccountMarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountMarketTokensQuery, AccountMarketTokensQueryVariables>(AccountMarketTokensDocument, options);
      }
export function useAccountMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountMarketTokensQuery, AccountMarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountMarketTokensQuery, AccountMarketTokensQueryVariables>(AccountMarketTokensDocument, options);
        }
export type AccountMarketTokensQueryHookResult = ReturnType<typeof useAccountMarketTokensQuery>;
export type AccountMarketTokensLazyQueryHookResult = ReturnType<typeof useAccountMarketTokensLazyQuery>;
export type AccountMarketTokensQueryResult = Apollo.QueryResult<AccountMarketTokensQuery, AccountMarketTokensQueryVariables>;
export const MarketStatisticsDocument = gql`
    query marketStatistics($fromTimestamp: BigInt!) {
  dailyMarketStats(where: {timestamp_gte: $fromTimestamp}, orderBy: timestamp) {
    id
    volume
    sales
    timestamp
  }
}
    `;

/**
 * __useMarketStatisticsQuery__
 *
 * To run a query within a React component, call `useMarketStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketStatisticsQuery({
 *   variables: {
 *      fromTimestamp: // value for 'fromTimestamp'
 *   },
 * });
 */
export function useMarketStatisticsQuery(baseOptions: Apollo.QueryHookOptions<MarketStatisticsQuery, MarketStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketStatisticsQuery, MarketStatisticsQueryVariables>(MarketStatisticsDocument, options);
      }
export function useMarketStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketStatisticsQuery, MarketStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketStatisticsQuery, MarketStatisticsQueryVariables>(MarketStatisticsDocument, options);
        }
export type MarketStatisticsQueryHookResult = ReturnType<typeof useMarketStatisticsQuery>;
export type MarketStatisticsLazyQueryHookResult = ReturnType<typeof useMarketStatisticsLazyQuery>;
export type MarketStatisticsQueryResult = Apollo.QueryResult<MarketStatisticsQuery, MarketStatisticsQueryVariables>;
export const NewMarketTokensDocument = gql`
    query newMarketTokens {
  tokens: marketTokens(
    first: 12
    skip: 0
    orderBy: listingTimestamp
    orderDirection: desc
  ) {
    id
    tokenId
    title
    description
    media
    price
    contract {
      id
      name
      isVerified
    }
  }
}
    `;

/**
 * __useNewMarketTokensQuery__
 *
 * To run a query within a React component, call `useNewMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMarketTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewMarketTokensQuery(baseOptions?: Apollo.QueryHookOptions<NewMarketTokensQuery, NewMarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewMarketTokensQuery, NewMarketTokensQueryVariables>(NewMarketTokensDocument, options);
      }
export function useNewMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewMarketTokensQuery, NewMarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewMarketTokensQuery, NewMarketTokensQueryVariables>(NewMarketTokensDocument, options);
        }
export type NewMarketTokensQueryHookResult = ReturnType<typeof useNewMarketTokensQuery>;
export type NewMarketTokensLazyQueryHookResult = ReturnType<typeof useNewMarketTokensLazyQuery>;
export type NewMarketTokensQueryResult = Apollo.QueryResult<NewMarketTokensQuery, NewMarketTokensQueryVariables>;
export const TokensFilterDocument = gql`
    query tokensFilter($limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt!, $priceTo: BigInt!) {
  tokens: marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    id
    tokenId
    title
    media
    price
    contract {
      id
      name
      isVerified
    }
  }
}
    `;

/**
 * __useTokensFilterQuery__
 *
 * To run a query within a React component, call `useTokensFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensFilterQuery({
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
export function useTokensFilterQuery(baseOptions: Apollo.QueryHookOptions<TokensFilterQuery, TokensFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokensFilterQuery, TokensFilterQueryVariables>(TokensFilterDocument, options);
      }
export function useTokensFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokensFilterQuery, TokensFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokensFilterQuery, TokensFilterQueryVariables>(TokensFilterDocument, options);
        }
export type TokensFilterQueryHookResult = ReturnType<typeof useTokensFilterQuery>;
export type TokensFilterLazyQueryHookResult = ReturnType<typeof useTokensFilterLazyQuery>;
export type TokensFilterQueryResult = Apollo.QueryResult<TokensFilterQuery, TokensFilterQueryVariables>;
export const TokensTextSearchDocument = gql`
    query tokensTextSearch($text: String!, $limit: Int!, $offset: Int!) {
  tokens: marketSearch(text: $text, first: $limit, skip: $offset) {
    id
    tokenId
    title
    media
    price
    contract {
      id
      name
      isVerified
    }
  }
}
    `;

/**
 * __useTokensTextSearchQuery__
 *
 * To run a query within a React component, call `useTokensTextSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensTextSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensTextSearchQuery({
 *   variables: {
 *      text: // value for 'text'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTokensTextSearchQuery(baseOptions: Apollo.QueryHookOptions<TokensTextSearchQuery, TokensTextSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokensTextSearchQuery, TokensTextSearchQueryVariables>(TokensTextSearchDocument, options);
      }
export function useTokensTextSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokensTextSearchQuery, TokensTextSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokensTextSearchQuery, TokensTextSearchQueryVariables>(TokensTextSearchDocument, options);
        }
export type TokensTextSearchQueryHookResult = ReturnType<typeof useTokensTextSearchQuery>;
export type TokensTextSearchLazyQueryHookResult = ReturnType<typeof useTokensTextSearchLazyQuery>;
export type TokensTextSearchQueryResult = Apollo.QueryResult<TokensTextSearchQuery, TokensTextSearchQueryVariables>;
export const DailyCollectionStatsDocument = gql`
    query dailyCollectionStats($collection: String!) {
  dailyCollectionStats(where: {collection: $collection}) {
    id
    timestamp
    sales
    average
    floor
    volume
  }
}
    `;

/**
 * __useDailyCollectionStatsQuery__
 *
 * To run a query within a React component, call `useDailyCollectionStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDailyCollectionStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDailyCollectionStatsQuery({
 *   variables: {
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useDailyCollectionStatsQuery(baseOptions: Apollo.QueryHookOptions<DailyCollectionStatsQuery, DailyCollectionStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DailyCollectionStatsQuery, DailyCollectionStatsQueryVariables>(DailyCollectionStatsDocument, options);
      }
export function useDailyCollectionStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DailyCollectionStatsQuery, DailyCollectionStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DailyCollectionStatsQuery, DailyCollectionStatsQueryVariables>(DailyCollectionStatsDocument, options);
        }
export type DailyCollectionStatsQueryHookResult = ReturnType<typeof useDailyCollectionStatsQuery>;
export type DailyCollectionStatsLazyQueryHookResult = ReturnType<typeof useDailyCollectionStatsLazyQuery>;
export type DailyCollectionStatsQueryResult = Apollo.QueryResult<DailyCollectionStatsQuery, DailyCollectionStatsQueryVariables>;