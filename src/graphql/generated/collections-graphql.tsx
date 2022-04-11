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

export type Collection = {
  __typename?: 'Collection';
  bannerImage?: Maybe<Scalars['String']>;
  collectionId: Scalars['String'];
  contractId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  media?: Maybe<CollectionMedia>;
  ownerId: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  tokens: Array<Token>;
  traits: Array<CollectionTrait>;
};


export type CollectionTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
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

export type CollectionTrait = {
  __typename?: 'CollectionTrait';
  attribute: Scalars['String'];
  collection: Collection;
  id: Scalars['ID'];
  values: Array<Scalars['String']>;
};

export type CollectionTrait_Filter = {
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
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
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
};

export enum Collection_OrderBy {
  BannerImage = 'bannerImage',
  CollectionId = 'collectionId',
  ContractId = 'contractId',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Media = 'media',
  OwnerId = 'ownerId',
  Reference = 'reference',
  Title = 'title',
  Tokens = 'tokens',
  Traits = 'traits'
}

export type MjolNearStats = {
  __typename?: 'MjolNearStats';
  createdCollections: Scalars['BigInt'];
  id: Scalars['ID'];
  mintedTokens: Scalars['BigInt'];
};

export type MjolNearStats_Filter = {
  createdCollections?: InputMaybe<Scalars['BigInt']>;
  createdCollections_gt?: InputMaybe<Scalars['BigInt']>;
  createdCollections_gte?: InputMaybe<Scalars['BigInt']>;
  createdCollections_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdCollections_lt?: InputMaybe<Scalars['BigInt']>;
  createdCollections_lte?: InputMaybe<Scalars['BigInt']>;
  createdCollections_not?: InputMaybe<Scalars['BigInt']>;
  createdCollections_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mintedTokens?: InputMaybe<Scalars['BigInt']>;
  mintedTokens_gt?: InputMaybe<Scalars['BigInt']>;
  mintedTokens_gte?: InputMaybe<Scalars['BigInt']>;
  mintedTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokens_lt?: InputMaybe<Scalars['BigInt']>;
  mintedTokens_lte?: InputMaybe<Scalars['BigInt']>;
  mintedTokens_not?: InputMaybe<Scalars['BigInt']>;
  mintedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum MjolNearStats_OrderBy {
  CreatedCollections = 'createdCollections',
  Id = 'id',
  MintedTokens = 'mintedTokens'
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
  collection?: Maybe<Collection>;
  collectionMedia?: Maybe<CollectionMedia>;
  collectionMedias: Array<CollectionMedia>;
  collectionTrait?: Maybe<CollectionTrait>;
  collectionTraits: Array<CollectionTrait>;
  collections: Array<Collection>;
  collectionsSearch: Array<Collection>;
  mjolNearStats: Array<MjolNearStats>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
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


export type QueryMjolNearStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MjolNearStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MjolNearStats_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
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

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  collection?: Maybe<Collection>;
  collectionMedia?: Maybe<CollectionMedia>;
  collectionMedias: Array<CollectionMedia>;
  collectionTrait?: Maybe<CollectionTrait>;
  collectionTraits: Array<CollectionTrait>;
  collections: Array<Collection>;
  mjolNearStats: Array<MjolNearStats>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
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


export type SubscriptionMjolNearStatsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MjolNearStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MjolNearStats_Filter>;
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

export type Token = {
  __typename?: 'Token';
  collection?: Maybe<Collection>;
  contractId: Scalars['String'];
  copies?: Maybe<Scalars['BigInt']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  ownerId: Scalars['String'];
  reference: Scalars['String'];
  title: Scalars['String'];
  tokenId: Scalars['String'];
};

export type Token_Filter = {
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
  ownerId?: InputMaybe<Scalars['String']>;
  ownerId_contains?: InputMaybe<Scalars['String']>;
  ownerId_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_gt?: InputMaybe<Scalars['String']>;
  ownerId_gte?: InputMaybe<Scalars['String']>;
  ownerId_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_lt?: InputMaybe<Scalars['String']>;
  ownerId_lte?: InputMaybe<Scalars['String']>;
  ownerId_not?: InputMaybe<Scalars['String']>;
  ownerId_not_contains?: InputMaybe<Scalars['String']>;
  ownerId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with?: InputMaybe<Scalars['String']>;
  ownerId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_not_in?: InputMaybe<Array<Scalars['String']>>;
  ownerId_not_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ownerId_starts_with?: InputMaybe<Scalars['String']>;
  ownerId_starts_with_nocase?: InputMaybe<Scalars['String']>;
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

export enum Token_OrderBy {
  Collection = 'collection',
  ContractId = 'contractId',
  Copies = 'copies',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  OwnerId = 'ownerId',
  Reference = 'reference',
  Title = 'title',
  TokenId = 'tokenId'
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

export type CollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, contractId: string, collectionId: string, ownerId: string }> };

export type LoadCollectionByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LoadCollectionByIdQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string } | null };


export const CollectionsDocument = gql`
    query collections @api(name: collections) {
  collections(first: 5) {
    id
    contractId
    collectionId
    ownerId
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
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
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
export const LoadCollectionByIdDocument = gql`
    query loadCollectionById($id: ID!) @api(name: collections) {
  collection(id: $id) {
    id
  }
}
    `;

/**
 * __useLoadCollectionByIdQuery__
 *
 * To run a query within a React component, call `useLoadCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadCollectionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoadCollectionByIdQuery(baseOptions: Apollo.QueryHookOptions<LoadCollectionByIdQuery, LoadCollectionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoadCollectionByIdQuery, LoadCollectionByIdQueryVariables>(LoadCollectionByIdDocument, options);
      }
export function useLoadCollectionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoadCollectionByIdQuery, LoadCollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoadCollectionByIdQuery, LoadCollectionByIdQueryVariables>(LoadCollectionByIdDocument, options);
        }
export type LoadCollectionByIdQueryHookResult = ReturnType<typeof useLoadCollectionByIdQuery>;
export type LoadCollectionByIdLazyQueryHookResult = ReturnType<typeof useLoadCollectionByIdLazyQuery>;
export type LoadCollectionByIdQueryResult = Apollo.QueryResult<LoadCollectionByIdQuery, LoadCollectionByIdQueryVariables>;