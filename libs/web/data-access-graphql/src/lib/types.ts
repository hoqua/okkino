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

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type HomeBlock = {
  __typename?: 'HomeBlock';
  id: Scalars['ID'];
  image: Image;
  imageId: Scalars['String'];
  navigationPath: Scalars['String'];
};

export type HomeBlockCountAggregate = {
  __typename?: 'HomeBlockCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  navigationPath: Scalars['Int'];
};

export type HomeBlockCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  image: ImageCreateNestedOneWithoutHomeBlockInput;
  navigationPath: Scalars['String'];
};

export type HomeBlockCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<HomeBlockWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HomeBlockCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<HomeBlockCreateWithoutImageInput>;
};

export type HomeBlockCreateOrConnectWithoutImageInput = {
  create: HomeBlockCreateWithoutImageInput;
  where: HomeBlockWhereUniqueInput;
};

export type HomeBlockCreateWithoutImageInput = {
  id?: InputMaybe<Scalars['String']>;
  navigationPath: Scalars['String'];
};

export type HomeBlockMaxAggregate = {
  __typename?: 'HomeBlockMaxAggregate';
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  navigationPath?: Maybe<Scalars['String']>;
};

export type HomeBlockMinAggregate = {
  __typename?: 'HomeBlockMinAggregate';
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  navigationPath?: Maybe<Scalars['String']>;
};

export type HomeBlockUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageUpdateOneRequiredWithoutHomeBlockNestedInput>;
  navigationPath?: InputMaybe<Scalars['String']>;
};

export type HomeBlockUpdateOneWithoutImageNestedInput = {
  connect?: InputMaybe<HomeBlockWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HomeBlockCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<HomeBlockCreateWithoutImageInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<HomeBlockUpdateWithoutImageInput>;
  upsert?: InputMaybe<HomeBlockUpsertWithoutImageInput>;
};

export type HomeBlockUpdateWithoutImageInput = {
  id?: InputMaybe<Scalars['String']>;
  navigationPath?: InputMaybe<Scalars['String']>;
};

export type HomeBlockUpsertWithoutImageInput = {
  create: HomeBlockCreateWithoutImageInput;
  update: HomeBlockUpdateWithoutImageInput;
};

export type HomeBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  imagePath: Scalars['String'];
  rgbBackground: RgbColor;
  rgbBackgroundId: Scalars['String'];
  title: Scalars['String'];
};

export type ImageCountAggregate = {
  __typename?: 'ImageCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imagePath: Scalars['Int'];
  rgbBackgroundId: Scalars['Int'];
  title: Scalars['Int'];
};

export type ImageCreateManyProductInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath: Scalars['String'];
  rgbBackgroundId: Scalars['String'];
  title: Scalars['String'];
};

export type ImageCreateManyProductInputEnvelope = {
  data: Array<ImageCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ImageCreateManyRgbBackgroundInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath: Scalars['String'];
  productId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ImageCreateManyRgbBackgroundInputEnvelope = {
  data: Array<ImageCreateManyRgbBackgroundInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ImageCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutProductInput>>;
  createMany?: InputMaybe<ImageCreateManyProductInputEnvelope>;
};

export type ImageCreateNestedManyWithoutRgbBackgroundInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutRgbBackgroundInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutRgbBackgroundInput>>;
  createMany?: InputMaybe<ImageCreateManyRgbBackgroundInputEnvelope>;
};

export type ImageCreateNestedOneWithoutHomeBlockInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<ImageCreateWithoutHomeBlockInput>;
};

export type ImageCreateOrConnectWithoutHomeBlockInput = {
  create: ImageCreateWithoutHomeBlockInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutProductInput = {
  create: ImageCreateWithoutProductInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutRgbBackgroundInput = {
  create: ImageCreateWithoutRgbBackgroundInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutHomeBlockInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath: Scalars['String'];
  product?: InputMaybe<ProductCreateNestedOneWithoutImagesInput>;
  rgbBackground: RgbColorCreateNestedOneWithoutImageInput;
  title: Scalars['String'];
};

export type ImageCreateWithoutProductInput = {
  homeBlock?: InputMaybe<HomeBlockCreateNestedOneWithoutImageInput>;
  id?: InputMaybe<Scalars['String']>;
  imagePath: Scalars['String'];
  rgbBackground: RgbColorCreateNestedOneWithoutImageInput;
  title: Scalars['String'];
};

export type ImageCreateWithoutRgbBackgroundInput = {
  homeBlock?: InputMaybe<HomeBlockCreateNestedOneWithoutImageInput>;
  id?: InputMaybe<Scalars['String']>;
  imagePath: Scalars['String'];
  product?: InputMaybe<ProductCreateNestedOneWithoutImagesInput>;
  title: Scalars['String'];
};

export type ImageMaxAggregate = {
  __typename?: 'ImageMaxAggregate';
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  rgbBackgroundId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ImageMinAggregate = {
  __typename?: 'ImageMinAggregate';
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  rgbBackgroundId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ImageScalarWhereInput = {
  AND?: InputMaybe<Array<ImageScalarWhereInput>>;
  NOT?: InputMaybe<Array<ImageScalarWhereInput>>;
  OR?: InputMaybe<Array<ImageScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  imagePath?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  rgbBackgroundId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImageUpdateManyWithWhereWithoutProductInput = {
  data: ImageUpdateManyMutationInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithWhereWithoutRgbBackgroundInput = {
  data: ImageUpdateManyMutationInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutProductInput>>;
  createMany?: InputMaybe<ImageCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
  update?: InputMaybe<Array<ImageUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ImageUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ImageUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ImageUpdateManyWithoutRgbBackgroundNestedInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutRgbBackgroundInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutRgbBackgroundInput>>;
  createMany?: InputMaybe<ImageCreateManyRgbBackgroundInputEnvelope>;
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
  update?: InputMaybe<Array<ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput>>;
  updateMany?: InputMaybe<Array<ImageUpdateManyWithWhereWithoutRgbBackgroundInput>>;
  upsert?: InputMaybe<Array<ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput>>;
};

export type ImageUpdateOneRequiredWithoutHomeBlockNestedInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<ImageCreateWithoutHomeBlockInput>;
  update?: InputMaybe<ImageUpdateWithoutHomeBlockInput>;
  upsert?: InputMaybe<ImageUpsertWithoutHomeBlockInput>;
};

export type ImageUpdateWithWhereUniqueWithoutProductInput = {
  data: ImageUpdateWithoutProductInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput = {
  data: ImageUpdateWithoutRgbBackgroundInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithoutHomeBlockInput = {
  id?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneWithoutImagesNestedInput>;
  rgbBackground?: InputMaybe<RgbColorUpdateOneRequiredWithoutImageNestedInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImageUpdateWithoutProductInput = {
  homeBlock?: InputMaybe<HomeBlockUpdateOneWithoutImageNestedInput>;
  id?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  rgbBackground?: InputMaybe<RgbColorUpdateOneRequiredWithoutImageNestedInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImageUpdateWithoutRgbBackgroundInput = {
  homeBlock?: InputMaybe<HomeBlockUpdateOneWithoutImageNestedInput>;
  id?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneWithoutImagesNestedInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImageUpsertWithWhereUniqueWithoutProductInput = {
  create: ImageCreateWithoutProductInput;
  update: ImageUpdateWithoutProductInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput = {
  create: ImageCreateWithoutRgbBackgroundInput;
  update: ImageUpdateWithoutRgbBackgroundInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithoutHomeBlockInput = {
  create: ImageCreateWithoutHomeBlockInput;
  update: ImageUpdateWithoutHomeBlockInput;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeBlock: HomeBlock;
  createProduct: Product;
  removeHomeBlock: HomeBlock;
  removeProduct: Product;
  updateHomeBlock: HomeBlock;
  updateProduct: Product;
};


export type MutationCreateHomeBlockArgs = {
  data: HomeBlockCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationRemoveHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type MutationRemoveProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationUpdateHomeBlockArgs = {
  data: HomeBlockUpdateInput;
  where: HomeBlockWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  availableColors?: Maybe<Array<RgbColor>>;
  description: Scalars['String'];
  /**
   * @Validator.@IsInt()
   * @Validator.@Min(1)
   * @Validator.@Max(100_000)
   */
  discountPrice?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  name: Scalars['String'];
  /**
   * @Validator.@IsInt()
   * @Validator.@Min(1)
   * @Validator.@Max(100_000)
   */
  price: Scalars['Int'];
  productCategories?: Maybe<Array<ProductCategory>>;
  productLengths?: Maybe<Array<ProductLength>>;
  productSizes?: Maybe<Array<ProductSize>>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  discountPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  _count: ProductCategoryCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProductCategoryCount = {
  __typename?: 'ProductCategoryCount';
  products: Scalars['Int'];
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ProductCategoryCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCategoryCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<ProductCategoryCreateWithoutProductsInput>>;
};

export type ProductCategoryCreateOrConnectWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput;
  where: ProductCategoryWhereUniqueInput;
};

export type ProductCategoryCreateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<ProductCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ProductCategoryUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductCategoryUpdateManyWithWhereWithoutProductsInput = {
  data: ProductCategoryUpdateManyMutationInput;
  where: ProductCategoryScalarWhereInput;
};

export type ProductCategoryUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCategoryCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<ProductCategoryCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductCategoryUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: InputMaybe<Array<ProductCategoryUpdateManyWithWhereWithoutProductsInput>>;
  upsert?: InputMaybe<Array<ProductCategoryUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type ProductCategoryUpdateWithWhereUniqueWithoutProductsInput = {
  data: ProductCategoryUpdateWithoutProductsInput;
  where: ProductCategoryWhereUniqueInput;
};

export type ProductCategoryUpdateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductCategoryUpsertWithWhereUniqueWithoutProductsInput = {
  create: ProductCategoryCreateWithoutProductsInput;
  update: ProductCategoryUpdateWithoutProductsInput;
  where: ProductCategoryWhereUniqueInput;
};

export type ProductCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  availableColors: Scalars['Int'];
  images: Scalars['Int'];
  productCategories: Scalars['Int'];
  productLengths: Scalars['Int'];
  productSizes: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  discountPrice: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
};

export type ProductCreateInput = {
  availableColors?: InputMaybe<RgbColorCreateNestedManyWithoutProductsInput>;
  description: Scalars['String'];
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageCreateNestedManyWithoutProductInput>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategories?: InputMaybe<ProductCategoryCreateNestedManyWithoutProductsInput>;
  productLengths?: InputMaybe<ProductLengthCreateNestedManyWithoutProductsInput>;
  productSizes?: InputMaybe<ProductSizeCreateNestedManyWithoutProductsInput>;
};

export type ProductCreateNestedManyWithoutAvailableColorsInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutAvailableColorsInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutAvailableColorsInput>>;
};

export type ProductCreateNestedOneWithoutImagesInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<ProductCreateWithoutImagesInput>;
};

export type ProductCreateOrConnectWithoutAvailableColorsInput = {
  create: ProductCreateWithoutAvailableColorsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutImagesInput = {
  create: ProductCreateWithoutImagesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutAvailableColorsInput = {
  description: Scalars['String'];
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageCreateNestedManyWithoutProductInput>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategories?: InputMaybe<ProductCategoryCreateNestedManyWithoutProductsInput>;
  productLengths?: InputMaybe<ProductLengthCreateNestedManyWithoutProductsInput>;
  productSizes?: InputMaybe<ProductSizeCreateNestedManyWithoutProductsInput>;
};

export type ProductCreateWithoutImagesInput = {
  availableColors?: InputMaybe<RgbColorCreateNestedManyWithoutProductsInput>;
  description: Scalars['String'];
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  productCategories?: InputMaybe<ProductCategoryCreateNestedManyWithoutProductsInput>;
  productLengths?: InputMaybe<ProductLengthCreateNestedManyWithoutProductsInput>;
  productSizes?: InputMaybe<ProductSizeCreateNestedManyWithoutProductsInput>;
};

export type ProductLength = {
  __typename?: 'ProductLength';
  _count: ProductLengthCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProductLengthCount = {
  __typename?: 'ProductLengthCount';
  products: Scalars['Int'];
};

export type ProductLengthCountAggregate = {
  __typename?: 'ProductLengthCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ProductLengthCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<ProductLengthWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductLengthCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<ProductLengthCreateWithoutProductsInput>>;
};

export type ProductLengthCreateOrConnectWithoutProductsInput = {
  create: ProductLengthCreateWithoutProductsInput;
  where: ProductLengthWhereUniqueInput;
};

export type ProductLengthCreateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductLengthMaxAggregate = {
  __typename?: 'ProductLengthMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductLengthMinAggregate = {
  __typename?: 'ProductLengthMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductLengthScalarWhereInput = {
  AND?: InputMaybe<Array<ProductLengthScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductLengthScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductLengthScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ProductLengthUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductLengthUpdateManyWithWhereWithoutProductsInput = {
  data: ProductLengthUpdateManyMutationInput;
  where: ProductLengthScalarWhereInput;
};

export type ProductLengthUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<ProductLengthWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductLengthCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<ProductLengthCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<ProductLengthWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductLengthScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductLengthWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductLengthWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductLengthUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: InputMaybe<Array<ProductLengthUpdateManyWithWhereWithoutProductsInput>>;
  upsert?: InputMaybe<Array<ProductLengthUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type ProductLengthUpdateWithWhereUniqueWithoutProductsInput = {
  data: ProductLengthUpdateWithoutProductsInput;
  where: ProductLengthWhereUniqueInput;
};

export type ProductLengthUpdateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductLengthUpsertWithWhereUniqueWithoutProductsInput = {
  create: ProductLengthCreateWithoutProductsInput;
  update: ProductLengthUpdateWithoutProductsInput;
  where: ProductLengthWhereUniqueInput;
};

export type ProductLengthWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  description?: Maybe<Scalars['String']>;
  discountPrice?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  description?: Maybe<Scalars['String']>;
  discountPrice?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  discountPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
};

export type ProductSize = {
  __typename?: 'ProductSize';
  _count: ProductSizeCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProductSizeCount = {
  __typename?: 'ProductSizeCount';
  products: Scalars['Int'];
};

export type ProductSizeCountAggregate = {
  __typename?: 'ProductSizeCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ProductSizeCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<ProductSizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductSizeCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<ProductSizeCreateWithoutProductsInput>>;
};

export type ProductSizeCreateOrConnectWithoutProductsInput = {
  create: ProductSizeCreateWithoutProductsInput;
  where: ProductSizeWhereUniqueInput;
};

export type ProductSizeCreateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductSizeMaxAggregate = {
  __typename?: 'ProductSizeMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductSizeMinAggregate = {
  __typename?: 'ProductSizeMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductSizeScalarWhereInput = {
  AND?: InputMaybe<Array<ProductSizeScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductSizeScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductSizeScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ProductSizeUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductSizeUpdateManyWithWhereWithoutProductsInput = {
  data: ProductSizeUpdateManyMutationInput;
  where: ProductSizeScalarWhereInput;
};

export type ProductSizeUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<ProductSizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductSizeCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<ProductSizeCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<ProductSizeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductSizeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductSizeWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductSizeWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductSizeUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: InputMaybe<Array<ProductSizeUpdateManyWithWhereWithoutProductsInput>>;
  upsert?: InputMaybe<Array<ProductSizeUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type ProductSizeUpdateWithWhereUniqueWithoutProductsInput = {
  data: ProductSizeUpdateWithoutProductsInput;
  where: ProductSizeWhereUniqueInput;
};

export type ProductSizeUpdateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductSizeUpsertWithWhereUniqueWithoutProductsInput = {
  create: ProductSizeCreateWithoutProductsInput;
  update: ProductSizeUpdateWithoutProductsInput;
  where: ProductSizeWhereUniqueInput;
};

export type ProductSizeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  discountPrice?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductUpdateInput = {
  availableColors?: InputMaybe<RgbColorUpdateManyWithoutProductsNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productCategories?: InputMaybe<ProductCategoryUpdateManyWithoutProductsNestedInput>;
  productLengths?: InputMaybe<ProductLengthUpdateManyWithoutProductsNestedInput>;
  productSizes?: InputMaybe<ProductSizeUpdateManyWithoutProductsNestedInput>;
};

export type ProductUpdateManyMutationInput = {
  description?: InputMaybe<Scalars['String']>;
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type ProductUpdateManyWithWhereWithoutAvailableColorsInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutAvailableColorsNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutAvailableColorsInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutAvailableColorsInput>>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutAvailableColorsInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutAvailableColorsInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutAvailableColorsInput>>;
};

export type ProductUpdateOneWithoutImagesNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<ProductCreateWithoutImagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProductUpdateWithoutImagesInput>;
  upsert?: InputMaybe<ProductUpsertWithoutImagesInput>;
};

export type ProductUpdateWithWhereUniqueWithoutAvailableColorsInput = {
  data: ProductUpdateWithoutAvailableColorsInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutAvailableColorsInput = {
  description?: InputMaybe<Scalars['String']>;
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productCategories?: InputMaybe<ProductCategoryUpdateManyWithoutProductsNestedInput>;
  productLengths?: InputMaybe<ProductLengthUpdateManyWithoutProductsNestedInput>;
  productSizes?: InputMaybe<ProductSizeUpdateManyWithoutProductsNestedInput>;
};

export type ProductUpdateWithoutImagesInput = {
  availableColors?: InputMaybe<RgbColorUpdateManyWithoutProductsNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  discountPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  productCategories?: InputMaybe<ProductCategoryUpdateManyWithoutProductsNestedInput>;
  productLengths?: InputMaybe<ProductLengthUpdateManyWithoutProductsNestedInput>;
  productSizes?: InputMaybe<ProductSizeUpdateManyWithoutProductsNestedInput>;
};

export type ProductUpsertWithWhereUniqueWithoutAvailableColorsInput = {
  create: ProductCreateWithoutAvailableColorsInput;
  update: ProductUpdateWithoutAvailableColorsInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutImagesInput = {
  create: ProductCreateWithoutImagesInput;
  update: ProductUpdateWithoutImagesInput;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  homeBlock: HomeBlock;
  homeBlocks: Array<HomeBlock>;
  product: Product;
  productCategories: Array<ProductCategory>;
  productLengths: Array<ProductLength>;
  products: Array<Product>;
};


export type QueryHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  productCategory?: InputMaybe<Scalars['String']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RgbColor = {
  __typename?: 'RgbColor';
  _count: RgbColorCount;
  b: Scalars['Int'];
  g: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  r: Scalars['Int'];
};

export type RgbColorAvgAggregate = {
  __typename?: 'RgbColorAvgAggregate';
  b?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
};

export type RgbColorCount = {
  __typename?: 'RgbColorCount';
  Image: Scalars['Int'];
  products: Scalars['Int'];
};

export type RgbColorCountAggregate = {
  __typename?: 'RgbColorCountAggregate';
  _all: Scalars['Int'];
  b: Scalars['Int'];
  g: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  r: Scalars['Int'];
};

export type RgbColorCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RgbColorCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<RgbColorCreateWithoutProductsInput>>;
};

export type RgbColorCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<RgbColorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbColorCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<RgbColorCreateWithoutImageInput>;
};

export type RgbColorCreateOrConnectWithoutImageInput = {
  create: RgbColorCreateWithoutImageInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorCreateOrConnectWithoutProductsInput = {
  create: RgbColorCreateWithoutProductsInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorCreateWithoutImageInput = {
  a?: InputMaybe<Scalars['Float']>;
  b: Scalars['Int'];
  g: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutAvailableColorsInput>;
  r: Scalars['Int'];
};

export type RgbColorCreateWithoutProductsInput = {
  Image?: InputMaybe<ImageCreateNestedManyWithoutRgbBackgroundInput>;
  a?: InputMaybe<Scalars['Float']>;
  b: Scalars['Int'];
  g: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  r: Scalars['Int'];
};

export type RgbColorMaxAggregate = {
  __typename?: 'RgbColorMaxAggregate';
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbColorMinAggregate = {
  __typename?: 'RgbColorMinAggregate';
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbColorScalarWhereInput = {
  AND?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  NOT?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  OR?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<IntFilter>;
  g?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  r?: InputMaybe<IntFilter>;
};

export type RgbColorSumAggregate = {
  __typename?: 'RgbColorSumAggregate';
  b?: Maybe<Scalars['Int']>;
  g?: Maybe<Scalars['Int']>;
  r?: Maybe<Scalars['Int']>;
};

export type RgbColorUpdateManyMutationInput = {
  a?: InputMaybe<Scalars['Float']>;
  b?: InputMaybe<Scalars['Int']>;
  g?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  r?: InputMaybe<Scalars['Int']>;
};

export type RgbColorUpdateManyWithWhereWithoutProductsInput = {
  data: RgbColorUpdateManyMutationInput;
  where: RgbColorScalarWhereInput;
};

export type RgbColorUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RgbColorCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<RgbColorCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  set?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  update?: InputMaybe<Array<RgbColorUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: InputMaybe<Array<RgbColorUpdateManyWithWhereWithoutProductsInput>>;
  upsert?: InputMaybe<Array<RgbColorUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type RgbColorUpdateOneRequiredWithoutImageNestedInput = {
  connect?: InputMaybe<RgbColorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbColorCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<RgbColorCreateWithoutImageInput>;
  update?: InputMaybe<RgbColorUpdateWithoutImageInput>;
  upsert?: InputMaybe<RgbColorUpsertWithoutImageInput>;
};

export type RgbColorUpdateWithWhereUniqueWithoutProductsInput = {
  data: RgbColorUpdateWithoutProductsInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorUpdateWithoutImageInput = {
  a?: InputMaybe<Scalars['Float']>;
  b?: InputMaybe<Scalars['Int']>;
  g?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductUpdateManyWithoutAvailableColorsNestedInput>;
  r?: InputMaybe<Scalars['Int']>;
};

export type RgbColorUpdateWithoutProductsInput = {
  Image?: InputMaybe<ImageUpdateManyWithoutRgbBackgroundNestedInput>;
  a?: InputMaybe<Scalars['Float']>;
  b?: InputMaybe<Scalars['Int']>;
  g?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  r?: InputMaybe<Scalars['Int']>;
};

export type RgbColorUpsertWithWhereUniqueWithoutProductsInput = {
  create: RgbColorCreateWithoutProductsInput;
  update: RgbColorUpdateWithoutProductsInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorUpsertWithoutImageInput = {
  create: RgbColorCreateWithoutImageInput;
  update: RgbColorUpdateWithoutImageInput;
};

export type RgbColorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};
