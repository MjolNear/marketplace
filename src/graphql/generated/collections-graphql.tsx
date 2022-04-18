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
  bannerImage?: Maybe<Scalars['String']>;
  collectionId: Scalars['String'];
  contractId: Scalars['String'];
  createdAt: Scalars['BigInt'];
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
  CreatedAt = 'createdAt',
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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

export type CollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CollectionQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, ownerId: string, contractId: string, title: string, description: string, image: string, bannerImage?: string | null, media?: { __typename?: 'CollectionMedia', website?: string | null, telegram?: string | null, twitter?: string | null, discord?: string | null } | null } | null };

export type CollectionsTextSearchQueryVariables = Exact<{
  text: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type CollectionsTextSearchQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, ownerId: string, collectionId: string, title: string, description: string, image: string }> };

export type CollectionsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type CollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, ownerId: string, collectionId: string, title: string, description: string, image: string }> };

export type FindCollectionByContractQueryVariables = Exact<{
  contractId: Scalars['String'];
  collectionId?: InputMaybe<Scalars['String']>;
}>;


export type FindCollectionByContractQuery = { __typename?: 'Query', whitelisted: Array<{ __typename?: 'Collection', id: string, collectionId: string, image: string, title: string }>, mjolnear: Array<{ __typename?: 'Collection', id: string, collectionId: string, image: string, title: string }> };

export type IsCollectionExistsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IsCollectionExistsQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string } | null };

export type UserCollectionsQueryVariables = Exact<{
  ownerId: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type UserCollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, ownerId: string, collectionId: string, title: string, description: string, image: string }> };


export const CollectionDocument = gql`
    query collection($id: ID!) @api(name: collections) {
  collection(id: $id) {
    id
    ownerId
    contractId
    title
    description
    image
    bannerImage
    media {
      website
      telegram
      twitter
      discord
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
 *      id: // value for 'id'
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
    query collectionsTextSearch($text: String!, $limit: Int!, $offset: Int!) @api(name: collections) {
  collections: collectionsSearch(text: $text, first: $limit, skip: $offset) {
    id
    ownerId
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
    query collections($limit: Int!, $offset: Int!) @api(name: collections) {
  collections(
    first: $limit
    skip: $offset
    orderBy: createdAt
    orderDirection: desc
  ) {
    id
    ownerId
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
    query findCollectionByContract($contractId: String!, $collectionId: String) @api(name: collections) {
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
    query isCollectionExists($id: ID!) @api(name: collections) {
  collection(id: $id) {
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
    query userCollections($ownerId: String!, $limit: Int!, $offset: Int!) @api(name: collections) {
  collections(first: $limit, skip: $offset, where: {ownerId: $ownerId}) {
    id
    ownerId
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
 *      ownerId: // value for 'ownerId'
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