export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type HomeBlock = {
  __typename?: 'HomeBlock';
  id: Scalars['ID'];
  imagePath: Scalars['String'];
  navigationPath: Scalars['String'];
  rgbBackground: RgbBackground;
  rgbBackgroundId: Scalars['String'];
  title: Scalars['String'];
};

export type HomeBlockCountAggregate = {
  __typename?: 'HomeBlockCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imagePath: Scalars['Int'];
  navigationPath: Scalars['Int'];
  rgbBackgroundId: Scalars['Int'];
  title: Scalars['Int'];
};

export type HomeBlockCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath: Scalars['String'];
  navigationPath: Scalars['String'];
  rgbBackground: RgbBackgroundCreateNestedOneWithoutHomeBlockInput;
  title: Scalars['String'];
};

export type HomeBlockMaxAggregate = {
  __typename?: 'HomeBlockMaxAggregate';
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  navigationPath?: Maybe<Scalars['String']>;
  rgbBackgroundId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeBlockMinAggregate = {
  __typename?: 'HomeBlockMinAggregate';
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  navigationPath?: Maybe<Scalars['String']>;
  rgbBackgroundId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomeBlockUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  navigationPath?: InputMaybe<Scalars['String']>;
  rgbBackground?: InputMaybe<RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type HomeBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  rgbBackgroundId?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeBlock: HomeBlock;
  createUser: User;
  removeHomeBlock: HomeBlock;
  removeUser: User;
  updateHomeBlock: HomeBlock;
  updateUser: User;
};


export type MutationCreateHomeBlockArgs = {
  data: HomeBlockCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateHomeBlockArgs = {
  data: HomeBlockUpdateInput;
  where: HomeBlockWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  homeBlock: HomeBlock;
  homeBlocks: Array<HomeBlock>;
  user: User;
  users: Array<User>;
};


export type QueryHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type RgbBackground = {
  __typename?: 'RgbBackground';
  a?: Maybe<Scalars['Float']>;
  b: Scalars['Int'];
  g: Scalars['Int'];
  homeBlock?: Maybe<HomeBlock>;
  id: Scalars['ID'];
  r: Scalars['Int'];
};

export type RgbBackgroundAvgAggregate = {
  __typename?: 'RgbBackgroundAvgAggregate';
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
};

export type RgbBackgroundCountAggregate = {
  __typename?: 'RgbBackgroundCountAggregate';
  _all: Scalars['Int'];
  a: Scalars['Int'];
  b: Scalars['Int'];
  g: Scalars['Int'];
  id: Scalars['Int'];
  r: Scalars['Int'];
};

export type RgbBackgroundCreateNestedOneWithoutHomeBlockInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutHomeBlockInput>;
};

export type RgbBackgroundCreateOrConnectWithoutHomeBlockInput = {
  create: RgbBackgroundCreateWithoutHomeBlockInput;
  where: RgbBackgroundWhereUniqueInput;
};

export type RgbBackgroundCreateWithoutHomeBlockInput = {
  a?: InputMaybe<Scalars['Float']>;
  b: Scalars['Int'];
  g: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  r: Scalars['Int'];
};

export type RgbBackgroundMaxAggregate = {
  __typename?: 'RgbBackgroundMaxAggregate';
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbBackgroundMinAggregate = {
  __typename?: 'RgbBackgroundMinAggregate';
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbBackgroundSumAggregate = {
  __typename?: 'RgbBackgroundSumAggregate';
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutHomeBlockInput>;
  update?: InputMaybe<RgbBackgroundUpdateWithoutHomeBlockInput>;
  upsert?: InputMaybe<RgbBackgroundUpsertWithoutHomeBlockInput>;
};

export type RgbBackgroundUpdateWithoutHomeBlockInput = {
  a?: InputMaybe<Scalars['Float']>;
  b?: InputMaybe<Scalars['Int']>;
  g?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  r?: InputMaybe<Scalars['Int']>;
};

export type RgbBackgroundUpsertWithoutHomeBlockInput = {
  create: RgbBackgroundCreateWithoutHomeBlockInput;
  update: RgbBackgroundUpdateWithoutHomeBlockInput;
};

export type RgbBackgroundWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};
