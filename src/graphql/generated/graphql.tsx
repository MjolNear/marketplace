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
  earned: Scalars['BigDecimal'];
  id: Scalars['ID'];
  marketTokens: Array<MarketToken>;
  purchases: Scalars['BigInt'];
  sales: Scalars['BigInt'];
  spent: Scalars['BigDecimal'];
};


export type AccountMarketTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MarketToken_Filter>;
};

export type Account_Filter = {
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

export enum Account_OrderBy {
  Earned = 'earned',
  Id = 'id',
  MarketTokens = 'marketTokens',
  Purchases = 'purchases',
  Sales = 'sales',
  Spent = 'spent'
}

export type Activity = {
  __typename?: 'Activity';
  blockHash: Scalars['String'];
  buyer?: Maybe<Account>;
  collectionId?: Maybe<Scalars['String']>;
  contractId: Scalars['String'];
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
  CollectionId = 'collectionId',
  ContractId = 'contractId',
  EventType = 'eventType',
  Id = 'id',
  Owner = 'owner',
  Price = 'price',
  Timestamp = 'timestamp',
  Token = 'token',
  TxHash = 'txHash'
}

/** The block at which the query should be executed. */
export type Block_Height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type DailyCollectionStat = {
  __typename?: 'DailyCollectionStat';
  avg: Scalars['BigDecimal'];
  collectionId?: Maybe<Scalars['String']>;
  contractId: Scalars['String'];
  floor: Scalars['BigInt'];
  id: Scalars['ID'];
  sales: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type DailyCollectionStat_Filter = {
  avg?: InputMaybe<Scalars['BigDecimal']>;
  avg_gt?: InputMaybe<Scalars['BigDecimal']>;
  avg_gte?: InputMaybe<Scalars['BigDecimal']>;
  avg_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  avg_lt?: InputMaybe<Scalars['BigDecimal']>;
  avg_lte?: InputMaybe<Scalars['BigDecimal']>;
  avg_not?: InputMaybe<Scalars['BigDecimal']>;
  avg_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  Avg = 'avg',
  CollectionId = 'collectionId',
  ContractId = 'contractId',
  Floor = 'floor',
  Id = 'id',
  Sales = 'sales',
  Timestamp = 'timestamp',
  Volume = 'volume'
}

export type DailyMarketStat = {
  __typename?: 'DailyMarketStat';
  id: Scalars['ID'];
  sales: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type DailyMarketStat_Filter = {
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
  Id = 'id',
  Sales = 'sales',
  Timestamp = 'timestamp',
  Volume = 'volume'
}

export type MarketToken = {
  __typename?: 'MarketToken';
  collectionId?: Maybe<Scalars['String']>;
  collectionName?: Maybe<Scalars['String']>;
  contractId: Scalars['String'];
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipfsReference?: Maybe<Scalars['String']>;
  listingTimestamp: Scalars['BigInt'];
  media?: Maybe<Scalars['String']>;
  mintSiteLink?: Maybe<Scalars['String']>;
  mintSiteName?: Maybe<Scalars['String']>;
  owner: Account;
  price: Scalars['BigInt'];
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type MarketToken_Filter = {
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
  collectionName?: InputMaybe<Scalars['String']>;
  collectionName_contains?: InputMaybe<Scalars['String']>;
  collectionName_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionName_ends_with?: InputMaybe<Scalars['String']>;
  collectionName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionName_gt?: InputMaybe<Scalars['String']>;
  collectionName_gte?: InputMaybe<Scalars['String']>;
  collectionName_in?: InputMaybe<Array<Scalars['String']>>;
  collectionName_lt?: InputMaybe<Scalars['String']>;
  collectionName_lte?: InputMaybe<Scalars['String']>;
  collectionName_not?: InputMaybe<Scalars['String']>;
  collectionName_not_contains?: InputMaybe<Scalars['String']>;
  collectionName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionName_not_ends_with?: InputMaybe<Scalars['String']>;
  collectionName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionName_not_in?: InputMaybe<Array<Scalars['String']>>;
  collectionName_not_starts_with?: InputMaybe<Scalars['String']>;
  collectionName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collectionName_starts_with?: InputMaybe<Scalars['String']>;
  collectionName_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  ipfsReference?: InputMaybe<Scalars['String']>;
  ipfsReference_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_gt?: InputMaybe<Scalars['String']>;
  ipfsReference_gte?: InputMaybe<Scalars['String']>;
  ipfsReference_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_lt?: InputMaybe<Scalars['String']>;
  ipfsReference_lte?: InputMaybe<Scalars['String']>;
  ipfsReference_not?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  mintSiteLink?: InputMaybe<Scalars['String']>;
  mintSiteLink_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_gt?: InputMaybe<Scalars['String']>;
  mintSiteLink_gte?: InputMaybe<Scalars['String']>;
  mintSiteLink_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_lt?: InputMaybe<Scalars['String']>;
  mintSiteLink_lte?: InputMaybe<Scalars['String']>;
  mintSiteLink_not?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName?: InputMaybe<Scalars['String']>;
  mintSiteName_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_gt?: InputMaybe<Scalars['String']>;
  mintSiteName_gte?: InputMaybe<Scalars['String']>;
  mintSiteName_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_lt?: InputMaybe<Scalars['String']>;
  mintSiteName_lte?: InputMaybe<Scalars['String']>;
  mintSiteName_not?: InputMaybe<Scalars['String']>;
  mintSiteName_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  CollectionId = 'collectionId',
  CollectionName = 'collectionName',
  ContractId = 'contractId',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  IpfsReference = 'ipfsReference',
  ListingTimestamp = 'listingTimestamp',
  Media = 'media',
  MintSiteLink = 'mintSiteLink',
  MintSiteName = 'mintSiteName',
  Owner = 'owner',
  Price = 'price',
  Title = 'title',
  TokenId = 'tokenId'
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
  dailyCollectionStat?: Maybe<DailyCollectionStat>;
  dailyCollectionStats: Array<DailyCollectionStat>;
  dailyMarketStat?: Maybe<DailyMarketStat>;
  dailyMarketStats: Array<DailyMarketStat>;
  marketSearch: Array<MarketToken>;
  marketToken?: Maybe<MarketToken>;
  marketTokens: Array<MarketToken>;
  savedToken?: Maybe<SavedToken>;
  savedTokens: Array<SavedToken>;
  totalCollectionStat?: Maybe<TotalCollectionStat>;
  totalCollectionStats: Array<TotalCollectionStat>;
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


export type QueryTotalCollectionStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTotalCollectionStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TotalCollectionStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalCollectionStat_Filter>;
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
  collectionId?: Maybe<Scalars['String']>;
  collectionName?: Maybe<Scalars['String']>;
  contractId: Scalars['String'];
  copies?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipfsReference?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  mintSiteLink?: Maybe<Scalars['String']>;
  mintSiteName?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type SavedToken_Filter = {
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
  collectionName?: InputMaybe<Scalars['String']>;
  collectionName_contains?: InputMaybe<Scalars['String']>;
  collectionName_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionName_ends_with?: InputMaybe<Scalars['String']>;
  collectionName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionName_gt?: InputMaybe<Scalars['String']>;
  collectionName_gte?: InputMaybe<Scalars['String']>;
  collectionName_in?: InputMaybe<Array<Scalars['String']>>;
  collectionName_lt?: InputMaybe<Scalars['String']>;
  collectionName_lte?: InputMaybe<Scalars['String']>;
  collectionName_not?: InputMaybe<Scalars['String']>;
  collectionName_not_contains?: InputMaybe<Scalars['String']>;
  collectionName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collectionName_not_ends_with?: InputMaybe<Scalars['String']>;
  collectionName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collectionName_not_in?: InputMaybe<Array<Scalars['String']>>;
  collectionName_not_starts_with?: InputMaybe<Scalars['String']>;
  collectionName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collectionName_starts_with?: InputMaybe<Scalars['String']>;
  collectionName_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  ipfsReference?: InputMaybe<Scalars['String']>;
  ipfsReference_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_gt?: InputMaybe<Scalars['String']>;
  ipfsReference_gte?: InputMaybe<Scalars['String']>;
  ipfsReference_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_lt?: InputMaybe<Scalars['String']>;
  ipfsReference_lte?: InputMaybe<Scalars['String']>;
  ipfsReference_not?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains?: InputMaybe<Scalars['String']>;
  ipfsReference_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsReference_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with?: InputMaybe<Scalars['String']>;
  ipfsReference_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  mintSiteLink?: InputMaybe<Scalars['String']>;
  mintSiteLink_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_gt?: InputMaybe<Scalars['String']>;
  mintSiteLink_gte?: InputMaybe<Scalars['String']>;
  mintSiteLink_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_lt?: InputMaybe<Scalars['String']>;
  mintSiteLink_lte?: InputMaybe<Scalars['String']>;
  mintSiteLink_not?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteLink_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteLink_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteLink_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName?: InputMaybe<Scalars['String']>;
  mintSiteName_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_gt?: InputMaybe<Scalars['String']>;
  mintSiteName_gte?: InputMaybe<Scalars['String']>;
  mintSiteName_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_lt?: InputMaybe<Scalars['String']>;
  mintSiteName_lte?: InputMaybe<Scalars['String']>;
  mintSiteName_not?: InputMaybe<Scalars['String']>;
  mintSiteName_not_contains?: InputMaybe<Scalars['String']>;
  mintSiteName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_not_ends_with?: InputMaybe<Scalars['String']>;
  mintSiteName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintSiteName_not_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintSiteName_starts_with?: InputMaybe<Scalars['String']>;
  mintSiteName_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
  CollectionId = 'collectionId',
  CollectionName = 'collectionName',
  ContractId = 'contractId',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  IpfsReference = 'ipfsReference',
  Media = 'media',
  MintSiteLink = 'mintSiteLink',
  MintSiteName = 'mintSiteName',
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
  dailyCollectionStat?: Maybe<DailyCollectionStat>;
  dailyCollectionStats: Array<DailyCollectionStat>;
  dailyMarketStat?: Maybe<DailyMarketStat>;
  dailyMarketStats: Array<DailyMarketStat>;
  marketToken?: Maybe<MarketToken>;
  marketTokens: Array<MarketToken>;
  savedToken?: Maybe<SavedToken>;
  savedTokens: Array<SavedToken>;
  totalCollectionStat?: Maybe<TotalCollectionStat>;
  totalCollectionStats: Array<TotalCollectionStat>;
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


export type SubscriptionTotalCollectionStatArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTotalCollectionStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TotalCollectionStat_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalCollectionStat_Filter>;
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

export type TotalCollectionStat = {
  __typename?: 'TotalCollectionStat';
  avg: Scalars['BigDecimal'];
  collectionId?: Maybe<Scalars['String']>;
  contractId: Scalars['String'];
  id: Scalars['ID'];
  sales: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type TotalCollectionStat_Filter = {
  avg?: InputMaybe<Scalars['BigDecimal']>;
  avg_gt?: InputMaybe<Scalars['BigDecimal']>;
  avg_gte?: InputMaybe<Scalars['BigDecimal']>;
  avg_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  avg_lt?: InputMaybe<Scalars['BigDecimal']>;
  avg_lte?: InputMaybe<Scalars['BigDecimal']>;
  avg_not?: InputMaybe<Scalars['BigDecimal']>;
  avg_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TotalCollectionStat_OrderBy {
  Avg = 'avg',
  CollectionId = 'collectionId',
  ContractId = 'contractId',
  Id = 'id',
  Sales = 'sales',
  Volume = 'volume'
}

export type TotalMarketStat = {
  __typename?: 'TotalMarketStat';
  id: Scalars['ID'];
  sales: Scalars['BigInt'];
  volume: Scalars['BigInt'];
};

export type TotalMarketStat_Filter = {
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
  Id = 'id',
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

export type CollectionMarketTokensQueryVariables = Exact<{
  contractId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
  priceFrom: Scalars['BigInt'];
  priceTo: Scalars['BigInt'];
}>;


export type CollectionMarketTokensQuery = { __typename?: 'Query', collectionMarketTokens: Array<{ __typename?: 'MarketToken', tokenId: string, contractId: string, collectionId?: string | null, collectionName?: string | null, title: string, media?: string | null, mintSiteName?: string | null, mintSiteLink?: string | null, price: any }> };

export type CollectionTotalStatsQueryVariables = Exact<{
  contractId: Scalars['ID'];
  _contractId: Scalars['String'];
}>;


export type CollectionTotalStatsQuery = { __typename?: 'Query', stats?: { __typename?: 'TotalCollectionStat', volume: any, sales: any, avg: any } | null, floar: Array<{ __typename?: 'MarketToken', price: any }> };

export type LastMarketTokensQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
}>;


export type LastMarketTokensQuery = { __typename?: 'Query', marketTokens: Array<{ __typename?: 'MarketToken', tokenId: string, contractId: string, title: string, description?: string | null, media?: string | null, copies?: any | null, ipfsReference?: string | null, price: any }> };

export type MarketStatisticsQueryVariables = Exact<{
  fromTimestamp: Scalars['BigInt'];
}>;


export type MarketStatisticsQuery = { __typename?: 'Query', dailyMarketStats: Array<{ __typename?: 'DailyMarketStat', volume: any, sales: any, timestamp: any }> };

export type MarketTokensQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  orderBy: MarketToken_OrderBy;
  orderDirection: OrderDirection;
  priceFrom: Scalars['BigInt'];
  priceTo: Scalars['BigInt'];
}>;


export type MarketTokensQuery = { __typename?: 'Query', marketTokens: Array<{ __typename?: 'MarketToken', tokenId: string, contractId: string, collectionId?: string | null, collectionName?: string | null, title: string, media?: string | null, mintSiteName?: string | null, mintSiteLink?: string | null, price: any }> };

export type MarketTokensSearchQueryVariables = Exact<{
  text: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type MarketTokensSearchQuery = { __typename?: 'Query', searchedMarketTokens: Array<{ __typename?: 'MarketToken', tokenId: string, contractId: string, collectionId?: string | null, collectionName?: string | null, title: string, media?: string | null, mintSiteName?: string | null, mintSiteLink?: string | null, price: any }> };

export type TokenActivityQueryVariables = Exact<{
  tokenUID: Scalars['String'];
}>;


export type TokenActivityQuery = { __typename?: 'Query', tokenActivity: Array<{ __typename?: 'Activity', price?: any | null, txHash: string, eventType: ActivityEventType, timestamp: any, owner: { __typename?: 'Account', id: string }, buyer?: { __typename?: 'Account', id: string } | null }> };


export const CollectionMarketTokensDocument = gql`
    query collectionMarketTokens($contractId: String!, $limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt!, $priceTo: BigInt!) {
  collectionMarketTokens: marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {contractId: $contractId, price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    tokenId
    contractId
    collectionId
    collectionName
    title
    media
    mintSiteName
    mintSiteLink
    price
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
 *      contractId: // value for 'contractId'
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
    query collectionTotalStats($contractId: ID!, $_contractId: String!) {
  stats: totalCollectionStat(id: $contractId) {
    volume
    sales
    avg
  }
  floar: marketTokens(
    where: {contractId: $_contractId}
    orderBy: price
    orderDirection: asc
    first: 1
  ) {
    price
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
 *      contractId: // value for 'contractId'
 *      _contractId: // value for '_contractId'
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
export const LastMarketTokensDocument = gql`
    query lastMarketTokens($limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!) {
  marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
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
 * __useLastMarketTokensQuery__
 *
 * To run a query within a React component, call `useLastMarketTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastMarketTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastMarketTokensQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *   },
 * });
 */
export function useLastMarketTokensQuery(baseOptions: Apollo.QueryHookOptions<LastMarketTokensQuery, LastMarketTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastMarketTokensQuery, LastMarketTokensQueryVariables>(LastMarketTokensDocument, options);
      }
export function useLastMarketTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastMarketTokensQuery, LastMarketTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastMarketTokensQuery, LastMarketTokensQueryVariables>(LastMarketTokensDocument, options);
        }
export type LastMarketTokensQueryHookResult = ReturnType<typeof useLastMarketTokensQuery>;
export type LastMarketTokensLazyQueryHookResult = ReturnType<typeof useLastMarketTokensLazyQuery>;
export type LastMarketTokensQueryResult = Apollo.QueryResult<LastMarketTokensQuery, LastMarketTokensQueryVariables>;
export const MarketStatisticsDocument = gql`
    query marketStatistics($fromTimestamp: BigInt!) {
  dailyMarketStats(where: {timestamp_gte: $fromTimestamp}, orderBy: timestamp) {
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
export const MarketTokensDocument = gql`
    query marketTokens($limit: Int!, $offset: Int!, $orderBy: MarketToken_orderBy!, $orderDirection: OrderDirection!, $priceFrom: BigInt!, $priceTo: BigInt!) {
  marketTokens(
    first: $limit
    skip: $offset
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: {price_gte: $priceFrom, price_lte: $priceTo}
  ) {
    tokenId
    contractId
    collectionId
    collectionName
    title
    media
    mintSiteName
    mintSiteLink
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
export const MarketTokensSearchDocument = gql`
    query marketTokensSearch($text: String!, $limit: Int!, $offset: Int!) {
  searchedMarketTokens: marketSearch(text: $text, first: $limit, skip: $offset) {
    tokenId
    contractId
    collectionId
    collectionName
    title
    media
    mintSiteName
    mintSiteLink
    price
  }
}
    `;

/**
 * __useMarketTokensSearchQuery__
 *
 * To run a query within a React component, call `useMarketTokensSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketTokensSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketTokensSearchQuery({
 *   variables: {
 *      text: // value for 'text'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useMarketTokensSearchQuery(baseOptions: Apollo.QueryHookOptions<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>(MarketTokensSearchDocument, options);
      }
export function useMarketTokensSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>(MarketTokensSearchDocument, options);
        }
export type MarketTokensSearchQueryHookResult = ReturnType<typeof useMarketTokensSearchQuery>;
export type MarketTokensSearchLazyQueryHookResult = ReturnType<typeof useMarketTokensSearchLazyQuery>;
export type MarketTokensSearchQueryResult = Apollo.QueryResult<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>;
export const TokenActivityDocument = gql`
    query tokenActivity($tokenUID: String!) {
  tokenActivity: activities(
    where: {token: $tokenUID}
    orderBy: timestamp
    orderDirection: desc
  ) {
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