import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum RgbColorScalarFieldEnum {
    id = "id",
    name = "name",
    r = "r",
    g = "g",
    b = "b",
    a = "a"
}

export enum ProductSizeScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum ProductLengthScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    discountPrice = "discountPrice"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum ImageScalarFieldEnum {
    id = "id",
    title = "title",
    imagePath = "imagePath",
    rgbBackgroundId = "rgbBackgroundId",
    productId = "productId"
}

export enum HomeBlockScalarFieldEnum {
    id = "id",
    navigationPath = "navigationPath",
    imageId = "imageId"
}

registerEnumType(HomeBlockScalarFieldEnum, { name: 'HomeBlockScalarFieldEnum', description: undefined })
registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })
registerEnumType(ProductLengthScalarFieldEnum, { name: 'ProductLengthScalarFieldEnum', description: undefined })
registerEnumType(ProductSizeScalarFieldEnum, { name: 'ProductSizeScalarFieldEnum', description: undefined })
registerEnumType(RgbColorScalarFieldEnum, { name: 'RgbColorScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateHomeBlock {
    @Field(() => HomeBlockCountAggregate, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregate>;
    @Field(() => HomeBlockMinAggregate, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregate>;
    @Field(() => HomeBlockMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregate>;
}

@ArgsType()
export class CreateManyHomeBlockArgs {
    @Field(() => [HomeBlockCreateManyInput], {nullable:false})
    @Type(() => HomeBlockCreateManyInput)
    @ValidateNested()
    data!: Array<HomeBlockCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneHomeBlockArgs {
    @Field(() => HomeBlockCreateInput, {nullable:false})
    @Type(() => HomeBlockCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof HomeBlockCreateInput>;
}

@ArgsType()
export class DeleteManyHomeBlockArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
}

@ArgsType()
export class DeleteOneHomeBlockArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@ArgsType()
export class FindFirstHomeBlockOrThrowArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeBlockScalarFieldEnum>;
}

@ArgsType()
export class FindFirstHomeBlockArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeBlockScalarFieldEnum>;
}

@ArgsType()
export class FindManyHomeBlockArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeBlockScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueHomeBlockOrThrowArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueHomeBlockArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@ArgsType()
export class HomeBlockAggregateArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => HomeBlockCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregateInput>;
    @Field(() => HomeBlockMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregateInput>;
    @Field(() => HomeBlockMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregateInput>;
}

@InputType()
export class HomeBlockCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    imageId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class HomeBlockCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    navigationPath!: number;
    @Field(() => Int, {nullable:false})
    imageId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class HomeBlockCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    imageId!: string;
}

@InputType()
export class HomeBlockCreateNestedOneWithoutImageInput {
    @Field(() => HomeBlockCreateWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutImageInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutImageInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutImageInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutImageInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@InputType()
export class HomeBlockCreateOrConnectWithoutImageInput {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockCreateWithoutImageInput, {nullable:false})
    @Type(() => HomeBlockCreateWithoutImageInput)
    create!: InstanceType<typeof HomeBlockCreateWithoutImageInput>;
}

@InputType()
export class HomeBlockCreateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
}

@InputType()
export class HomeBlockCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => ImageCreateNestedOneWithoutHomeBlockInput, {nullable:false})
    image!: InstanceType<typeof ImageCreateNestedOneWithoutHomeBlockInput>;
}

@ArgsType()
export class HomeBlockGroupByArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithAggregationInput>;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeBlockScalarFieldEnum>;
    @Field(() => HomeBlockScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => HomeBlockCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregateInput>;
    @Field(() => HomeBlockMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregateInput>;
    @Field(() => HomeBlockMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregateInput>;
}

@ObjectType()
export class HomeBlockGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    imageId!: string;
    @Field(() => HomeBlockCountAggregate, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregate>;
    @Field(() => HomeBlockMinAggregate, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregate>;
    @Field(() => HomeBlockMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregate>;
}

@InputType()
export class HomeBlockMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    imageId?: true;
}

@ObjectType()
export class HomeBlockMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    imageId?: string;
}

@InputType()
export class HomeBlockMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    imageId?: true;
}

@ObjectType()
export class HomeBlockMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    imageId?: string;
}

@InputType()
export class HomeBlockMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;
    @Field(() => HomeBlockCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountOrderByAggregateInput>;
    @Field(() => HomeBlockMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxOrderByAggregateInput>;
    @Field(() => HomeBlockMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinOrderByAggregateInput>;
}

@InputType()
export class HomeBlockOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;
    @Field(() => ImageOrderByWithRelationInput, {nullable:true})
    image?: InstanceType<typeof ImageOrderByWithRelationInput>;
}

@InputType()
export class HomeBlockRelationFilter {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    is?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    isNot?: InstanceType<typeof HomeBlockWhereInput>;
}

@InputType()
export class HomeBlockScalarWhereWithAggregatesInput {
    @Field(() => [HomeBlockScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => [HomeBlockScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => [HomeBlockScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class HomeBlockUncheckedCreateNestedOneWithoutImageInput {
    @Field(() => HomeBlockCreateWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutImageInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutImageInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutImageInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutImageInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@InputType()
export class HomeBlockUncheckedCreateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
}

@InputType()
export class HomeBlockUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    imageId!: string;
}

@InputType()
export class HomeBlockUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    imageId?: string;
}

@InputType()
export class HomeBlockUncheckedUpdateOneWithoutImageNestedInput {
    @Field(() => HomeBlockCreateWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutImageInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutImageInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutImageInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutImageInput>;
    @Field(() => HomeBlockUpsertWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockUpsertWithoutImageInput)
    upsert?: InstanceType<typeof HomeBlockUpsertWithoutImageInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockUpdateWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockUpdateWithoutImageInput)
    update?: InstanceType<typeof HomeBlockUpdateWithoutImageInput>;
}

@InputType()
export class HomeBlockUncheckedUpdateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    imageId?: string;
}

@InputType()
export class HomeBlockUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUpdateOneWithoutImageNestedInput {
    @Field(() => HomeBlockCreateWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutImageInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutImageInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutImageInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutImageInput>;
    @Field(() => HomeBlockUpsertWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockUpsertWithoutImageInput)
    upsert?: InstanceType<typeof HomeBlockUpsertWithoutImageInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockUpdateWithoutImageInput, {nullable:true})
    @Type(() => HomeBlockUpdateWithoutImageInput)
    update?: InstanceType<typeof HomeBlockUpdateWithoutImageInput>;
}

@InputType()
export class HomeBlockUpdateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => ImageUpdateOneRequiredWithoutHomeBlockNestedInput, {nullable:true})
    image?: InstanceType<typeof ImageUpdateOneRequiredWithoutHomeBlockNestedInput>;
}

@InputType()
export class HomeBlockUpsertWithoutImageInput {
    @Field(() => HomeBlockUpdateWithoutImageInput, {nullable:false})
    @Type(() => HomeBlockUpdateWithoutImageInput)
    update!: InstanceType<typeof HomeBlockUpdateWithoutImageInput>;
    @Field(() => HomeBlockCreateWithoutImageInput, {nullable:false})
    @Type(() => HomeBlockCreateWithoutImageInput)
    create!: InstanceType<typeof HomeBlockCreateWithoutImageInput>;
}

@InputType()
export class HomeBlockWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    imageId?: string;
}

@InputType()
export class HomeBlockWhereInput {
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    AND?: Array<HomeBlockWhereInput>;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    OR?: Array<HomeBlockWhereInput>;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    NOT?: Array<HomeBlockWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    imageId?: InstanceType<typeof StringFilter>;
    @Field(() => ImageRelationFilter, {nullable:true})
    image?: InstanceType<typeof ImageRelationFilter>;
}

@ObjectType()
export class HomeBlock {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    imageId!: string;
    @Field(() => Image, {nullable:false})
    image?: InstanceType<typeof Image>;
}

@ArgsType()
export class UpdateManyHomeBlockArgs {
    @Field(() => HomeBlockUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeBlockUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof HomeBlockUpdateManyMutationInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
}

@ArgsType()
export class UpdateOneHomeBlockArgs {
    @Field(() => HomeBlockUpdateInput, {nullable:false})
    @Type(() => HomeBlockUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof HomeBlockUpdateInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneHomeBlockArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockCreateInput, {nullable:false})
    @Type(() => HomeBlockCreateInput)
    create!: InstanceType<typeof HomeBlockCreateInput>;
    @Field(() => HomeBlockUpdateInput, {nullable:false})
    @Type(() => HomeBlockUpdateInput)
    update!: InstanceType<typeof HomeBlockUpdateInput>;
}

@ObjectType()
export class AggregateImage {
    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregate>;
    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregate>;
    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregate>;
}

@ArgsType()
export class CreateManyImageArgs {
    @Field(() => [ImageCreateManyInput], {nullable:false})
    @Type(() => ImageCreateManyInput)
    @ValidateNested()
    data!: Array<ImageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneImageArgs {
    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ImageCreateInput>;
}

@ArgsType()
export class DeleteManyImageArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
}

@ArgsType()
export class DeleteOneImageArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ImageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstImageOrThrowArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}

@ArgsType()
export class FindFirstImageArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}

@ArgsType()
export class FindManyImageArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueImageOrThrowArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ImageWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueImageArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ImageWhereUniqueInput>;
}

@ArgsType()
export class ImageAggregateArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithRelationInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ImageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregateInput>;
    @Field(() => ImageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregateInput>;
    @Field(() => ImageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregateInput>;
}

@InputType()
export class ImageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ImageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    imagePath!: number;
    @Field(() => Int, {nullable:false})
    rgbBackgroundId!: number;
    @HideField()
    productId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ImageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class ImageCreateManyProductInputEnvelope {
    @Field(() => [ImageCreateManyProductInput], {nullable:false})
    @Type(() => ImageCreateManyProductInput)
    data!: Array<ImageCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ImageCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class ImageCreateManyRgbBackgroundInputEnvelope {
    @Field(() => [ImageCreateManyRgbBackgroundInput], {nullable:false})
    @Type(() => ImageCreateManyRgbBackgroundInput)
    data!: Array<ImageCreateManyRgbBackgroundInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ImageCreateManyRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageCreateNestedManyWithoutProductInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}

@InputType()
export class ImageCreateNestedManyWithoutRgbBackgroundInput {
    @Field(() => [ImageCreateWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateWithoutRgbBackgroundInput)
    create?: Array<ImageCreateWithoutRgbBackgroundInput>;
    @Field(() => [ImageCreateOrConnectWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => ImageCreateManyRgbBackgroundInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyRgbBackgroundInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyRgbBackgroundInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}

@InputType()
export class ImageCreateNestedOneWithoutHomeBlockInput {
    @Field(() => ImageCreateWithoutHomeBlockInput, {nullable:true})
    @Type(() => ImageCreateWithoutHomeBlockInput)
    create?: InstanceType<typeof ImageCreateWithoutHomeBlockInput>;
    @Field(() => ImageCreateOrConnectWithoutHomeBlockInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutHomeBlockInput)
    connectOrCreate?: InstanceType<typeof ImageCreateOrConnectWithoutHomeBlockInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: InstanceType<typeof ImageWhereUniqueInput>;
}

@InputType()
export class ImageCreateOrConnectWithoutHomeBlockInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageCreateWithoutHomeBlockInput, {nullable:false})
    @Type(() => ImageCreateWithoutHomeBlockInput)
    create!: InstanceType<typeof ImageCreateWithoutHomeBlockInput>;
}

@InputType()
export class ImageCreateOrConnectWithoutProductInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageCreateWithoutProductInput, {nullable:false})
    @Type(() => ImageCreateWithoutProductInput)
    create!: InstanceType<typeof ImageCreateWithoutProductInput>;
}

@InputType()
export class ImageCreateOrConnectWithoutRgbBackgroundInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => ImageCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof ImageCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class ImageCreateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => RgbColorCreateNestedOneWithoutImageInput, {nullable:false})
    rgbBackground!: InstanceType<typeof RgbColorCreateNestedOneWithoutImageInput>;
    @Field(() => ProductCreateNestedOneWithoutImagesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutImagesInput>;
}

@InputType()
export class ImageCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => RgbColorCreateNestedOneWithoutImageInput, {nullable:false})
    rgbBackground!: InstanceType<typeof RgbColorCreateNestedOneWithoutImageInput>;
    @Field(() => HomeBlockCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockCreateNestedOneWithoutImageInput>;
}

@InputType()
export class ImageCreateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => HomeBlockCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockCreateNestedOneWithoutImageInput>;
    @Field(() => ProductCreateNestedOneWithoutImagesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutImagesInput>;
}

@InputType()
export class ImageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => RgbColorCreateNestedOneWithoutImageInput, {nullable:false})
    rgbBackground!: InstanceType<typeof RgbColorCreateNestedOneWithoutImageInput>;
    @Field(() => HomeBlockCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockCreateNestedOneWithoutImageInput>;
    @Field(() => ProductCreateNestedOneWithoutImagesInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutImagesInput>;
}

@ArgsType()
export class ImageGroupByArgs {
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
    @Field(() => [ImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImageOrderByWithAggregationInput>;
    @Field(() => [ImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImageScalarFieldEnum>;
    @Field(() => ImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ImageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ImageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregateInput>;
    @Field(() => ImageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregateInput>;
    @Field(() => ImageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregateInput>;
}

@ObjectType()
export class ImageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @HideField()
    productId?: string;
    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ImageCountAggregate>;
    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ImageMinAggregate>;
    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ImageMaxAggregate>;
}

@InputType()
export class ImageListRelationFilter {
    @Field(() => ImageWhereInput, {nullable:true})
    every?: InstanceType<typeof ImageWhereInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    some?: InstanceType<typeof ImageWhereInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    none?: InstanceType<typeof ImageWhereInput>;
}

@InputType()
export class ImageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class ImageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @HideField()
    productId?: string;
}

@InputType()
export class ImageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class ImageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class ImageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @HideField()
    productId?: string;
}

@InputType()
export class ImageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class ImageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ImageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    productId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ImageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImageCountOrderByAggregateInput>;
    @Field(() => ImageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImageMaxOrderByAggregateInput>;
    @Field(() => ImageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImageMinOrderByAggregateInput>;
}

@InputType()
export class ImageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    productId?: InstanceType<typeof SortOrderInput>;
    @Field(() => RgbColorOrderByWithRelationInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorOrderByWithRelationInput>;
    @Field(() => HomeBlockOrderByWithRelationInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockOrderByWithRelationInput>;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
}

@InputType()
export class ImageRelationFilter {
    @Field(() => ImageWhereInput, {nullable:true})
    is?: InstanceType<typeof ImageWhereInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ImageWhereInput>;
}

@InputType()
export class ImageScalarWhereWithAggregatesInput {
    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImageScalarWhereWithAggregatesInput>;
    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImageScalarWhereWithAggregatesInput>;
    @Field(() => [ImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ImageScalarWhereInput {
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    AND?: Array<ImageScalarWhereInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    OR?: Array<ImageScalarWhereInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    NOT?: Array<ImageScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ImageUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}

@InputType()
export class ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput {
    @Field(() => [ImageCreateWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateWithoutRgbBackgroundInput)
    create?: Array<ImageCreateWithoutRgbBackgroundInput>;
    @Field(() => [ImageCreateOrConnectWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => ImageCreateManyRgbBackgroundInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyRgbBackgroundInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyRgbBackgroundInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
}

@InputType()
export class ImageUncheckedCreateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutImageInput>;
}

@InputType()
export class ImageUncheckedCreateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutImageInput>;
}

@InputType()
export class ImageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutImageInput>;
}

@InputType()
export class ImageUncheckedUpdateManyWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageUncheckedUpdateManyWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class ImageUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => [ImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}

@InputType()
export class ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput {
    @Field(() => [ImageCreateWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateWithoutRgbBackgroundInput)
    create?: Array<ImageCreateWithoutRgbBackgroundInput>;
    @Field(() => [ImageCreateOrConnectWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => [ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput>;
    @Field(() => ImageCreateManyRgbBackgroundInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyRgbBackgroundInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyRgbBackgroundInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput>;
    @Field(() => [ImageUpdateManyWithWhereWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutRgbBackgroundInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutRgbBackgroundInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}

@InputType()
export class ImageUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageUncheckedUpdateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageUncheckedUpdateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @Field(() => HomeBlockUncheckedUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutImageNestedInput>;
}

@InputType()
export class ImageUncheckedUpdateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => HomeBlockUncheckedUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutImageNestedInput>;
}

@InputType()
export class ImageUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => HomeBlockUncheckedUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutImageNestedInput>;
}

@InputType()
export class ImageUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
}

@InputType()
export class ImageUpdateManyWithWhereWithoutProductInput {
    @Field(() => ImageScalarWhereInput, {nullable:false})
    @Type(() => ImageScalarWhereInput)
    where!: InstanceType<typeof ImageScalarWhereInput>;
    @Field(() => ImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ImageUpdateManyMutationInput)
    data!: InstanceType<typeof ImageUpdateManyMutationInput>;
}

@InputType()
export class ImageUpdateManyWithWhereWithoutRgbBackgroundInput {
    @Field(() => ImageScalarWhereInput, {nullable:false})
    @Type(() => ImageScalarWhereInput)
    where!: InstanceType<typeof ImageScalarWhereInput>;
    @Field(() => ImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ImageUpdateManyMutationInput)
    data!: InstanceType<typeof ImageUpdateManyMutationInput>;
}

@InputType()
export class ImageUpdateManyWithoutProductNestedInput {
    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;
    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;
    @Field(() => [ImageUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyProductInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [ImageUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}

@InputType()
export class ImageUpdateManyWithoutRgbBackgroundNestedInput {
    @Field(() => [ImageCreateWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateWithoutRgbBackgroundInput)
    create?: Array<ImageCreateWithoutRgbBackgroundInput>;
    @Field(() => [ImageCreateOrConnectWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => [ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput)
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput>;
    @Field(() => ImageCreateManyRgbBackgroundInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyRgbBackgroundInputEnvelope)
    createMany?: InstanceType<typeof ImageCreateManyRgbBackgroundInputEnvelope>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    set?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    disconnect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    delete?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<ImageWhereUniqueInput>;
    @Field(() => [ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput)
    update?: Array<ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput>;
    @Field(() => [ImageUpdateManyWithWhereWithoutRgbBackgroundInput], {nullable:true})
    @Type(() => ImageUpdateManyWithWhereWithoutRgbBackgroundInput)
    updateMany?: Array<ImageUpdateManyWithWhereWithoutRgbBackgroundInput>;
    @Field(() => [ImageScalarWhereInput], {nullable:true})
    @Type(() => ImageScalarWhereInput)
    deleteMany?: Array<ImageScalarWhereInput>;
}

@InputType()
export class ImageUpdateOneRequiredWithoutHomeBlockNestedInput {
    @Field(() => ImageCreateWithoutHomeBlockInput, {nullable:true})
    @Type(() => ImageCreateWithoutHomeBlockInput)
    create?: InstanceType<typeof ImageCreateWithoutHomeBlockInput>;
    @Field(() => ImageCreateOrConnectWithoutHomeBlockInput, {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutHomeBlockInput)
    connectOrCreate?: InstanceType<typeof ImageCreateOrConnectWithoutHomeBlockInput>;
    @Field(() => ImageUpsertWithoutHomeBlockInput, {nullable:true})
    @Type(() => ImageUpsertWithoutHomeBlockInput)
    upsert?: InstanceType<typeof ImageUpsertWithoutHomeBlockInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageUpdateWithoutHomeBlockInput, {nullable:true})
    @Type(() => ImageUpdateWithoutHomeBlockInput)
    update?: InstanceType<typeof ImageUpdateWithoutHomeBlockInput>;
}

@InputType()
export class ImageUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageUpdateWithoutProductInput, {nullable:false})
    @Type(() => ImageUpdateWithoutProductInput)
    data!: InstanceType<typeof ImageUpdateWithoutProductInput>;
}

@InputType()
export class ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageUpdateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => ImageUpdateWithoutRgbBackgroundInput)
    data!: InstanceType<typeof ImageUpdateWithoutRgbBackgroundInput>;
}

@InputType()
export class ImageUpdateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => RgbColorUpdateOneRequiredWithoutImageNestedInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorUpdateOneRequiredWithoutImageNestedInput>;
    @Field(() => ProductUpdateOneWithoutImagesNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutImagesNestedInput>;
}

@InputType()
export class ImageUpdateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => RgbColorUpdateOneRequiredWithoutImageNestedInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorUpdateOneRequiredWithoutImageNestedInput>;
    @Field(() => HomeBlockUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUpdateOneWithoutImageNestedInput>;
}

@InputType()
export class ImageUpdateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => HomeBlockUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUpdateOneWithoutImageNestedInput>;
    @Field(() => ProductUpdateOneWithoutImagesNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutImagesNestedInput>;
}

@InputType()
export class ImageUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => RgbColorUpdateOneRequiredWithoutImageNestedInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorUpdateOneRequiredWithoutImageNestedInput>;
    @Field(() => HomeBlockUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUpdateOneWithoutImageNestedInput>;
    @Field(() => ProductUpdateOneWithoutImagesNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutImagesNestedInput>;
}

@InputType()
export class ImageUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageUpdateWithoutProductInput, {nullable:false})
    @Type(() => ImageUpdateWithoutProductInput)
    update!: InstanceType<typeof ImageUpdateWithoutProductInput>;
    @Field(() => ImageCreateWithoutProductInput, {nullable:false})
    @Type(() => ImageCreateWithoutProductInput)
    create!: InstanceType<typeof ImageCreateWithoutProductInput>;
}

@InputType()
export class ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageUpdateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => ImageUpdateWithoutRgbBackgroundInput)
    update!: InstanceType<typeof ImageUpdateWithoutRgbBackgroundInput>;
    @Field(() => ImageCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => ImageCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof ImageCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class ImageUpsertWithoutHomeBlockInput {
    @Field(() => ImageUpdateWithoutHomeBlockInput, {nullable:false})
    @Type(() => ImageUpdateWithoutHomeBlockInput)
    update!: InstanceType<typeof ImageUpdateWithoutHomeBlockInput>;
    @Field(() => ImageCreateWithoutHomeBlockInput, {nullable:false})
    @Type(() => ImageCreateWithoutHomeBlockInput)
    create!: InstanceType<typeof ImageCreateWithoutHomeBlockInput>;
}

@InputType()
export class ImageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class ImageWhereInput {
    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;
    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;
    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => RgbColorRelationFilter, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorRelationFilter>;
    @Field(() => HomeBlockRelationFilter, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
}

@ObjectType()
export class Image {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @HideField()
    productId!: string | null;
    @Field(() => RgbColor, {nullable:false})
    rgbBackground?: InstanceType<typeof RgbColor>;
    @HideField()
    homeBlock?: InstanceType<typeof HomeBlock> | null;
    @HideField()
    product?: InstanceType<typeof Product> | null;
}

@ArgsType()
export class UpdateManyImageArgs {
    @Field(() => ImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ImageUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ImageUpdateManyMutationInput>;
    @Field(() => ImageWhereInput, {nullable:true})
    @Type(() => ImageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ImageWhereInput>;
}

@ArgsType()
export class UpdateOneImageArgs {
    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ImageUpdateInput>;
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ImageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneImageArgs {
    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ImageWhereUniqueInput>;
    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    create!: InstanceType<typeof ImageCreateInput>;
    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    update!: InstanceType<typeof ImageUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateProduct {
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@ArgsType()
export class CreateManyProductArgs {
    @Field(() => [ProductCreateManyInput], {nullable:false})
    @Type(() => ProductCreateManyInput)
    @ValidateNested()
    data!: Array<ProductCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductCreateInput>;
}

@ArgsType()
export class DeleteManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProductOrThrowArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductOrThrowArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@InputType()
export class ProductAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductAvgAggregate {
    @Field(() => Float, {nullable:true})
    price?: number;
    @Field(() => Float, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@ArgsType()
export class ProductCategoryAggregateArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregateInput>;
    @Field(() => ProductCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregateInput>;
    @Field(() => ProductCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregateInput>;
}

@ObjectType()
export class ProductCategoryCount {
    @Field(() => Int, {nullable:false})
    products?: number;
}

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    discountPrice!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@ObjectType()
export class ProductCount {
    @Field(() => Int, {nullable:false})
    images?: number;
    @Field(() => Int, {nullable:false})
    availableColors?: number;
    @Field(() => Int, {nullable:false})
    productCategories?: number;
    @Field(() => Int, {nullable:false})
    productSizes?: number;
    @Field(() => Int, {nullable:false})
    productLengths?: number;
}

@InputType()
export class ProductCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductCreateNestedManyWithoutAvailableColorsInput {
    @Field(() => [ProductCreateWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create?: Array<ProductCreateWithoutAvailableColorsInput>;
    @Field(() => [ProductCreateOrConnectWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAvailableColorsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAvailableColorsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutProductCategoriesInput {
    @Field(() => [ProductCreateWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductCategoriesInput)
    create?: Array<ProductCreateWithoutProductCategoriesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductCategoriesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductCategoriesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutProductLengthsInput {
    @Field(() => [ProductCreateWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductLengthsInput)
    create?: Array<ProductCreateWithoutProductLengthsInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductLengthsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductLengthsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedManyWithoutProductSizesInput {
    @Field(() => [ProductCreateWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductSizesInput)
    create?: Array<ProductCreateWithoutProductSizesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductSizesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductSizesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateNestedOneWithoutImagesInput {
    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateWithoutImagesInput)
    create?: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutImagesInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutAvailableColorsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutAvailableColorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create!: InstanceType<typeof ProductCreateWithoutAvailableColorsInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutImagesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProductCreateWithoutImagesInput)
    create!: InstanceType<typeof ProductCreateWithoutImagesInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutProductCategoriesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutProductCategoriesInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductCategoriesInput)
    create!: InstanceType<typeof ProductCreateWithoutProductCategoriesInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutProductLengthsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutProductLengthsInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductLengthsInput)
    create!: InstanceType<typeof ProductCreateWithoutProductLengthsInput>;
}

@InputType()
export class ProductCreateOrConnectWithoutProductSizesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateWithoutProductSizesInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductSizesInput)
    create!: InstanceType<typeof ProductCreateWithoutProductSizesInput>;
}

@InputType()
export class ProductCreateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductCreateWithoutProductCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductCreateWithoutProductLengthsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductCreateWithoutProductSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthCreateNestedManyWithoutProductsInput>;
}

@ArgsType()
export class ProductGroupByArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductScalarFieldEnum>;
    @Field(() => ProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@ObjectType()
export class ProductGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@ObjectType()
export class ProductLengthCount {
    @Field(() => Int, {nullable:false})
    products?: number;
}

@InputType()
export class ProductListRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    discountPrice?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}

@InputType()
export class ProductOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    discountPrice?: InstanceType<typeof SortOrderInput>;
    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    images?: InstanceType<typeof ImageOrderByRelationAggregateInput>;
    @Field(() => RgbColorOrderByRelationAggregateInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorOrderByRelationAggregateInput>;
    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryOrderByRelationAggregateInput>;
    @Field(() => ProductSizeOrderByRelationAggregateInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeOrderByRelationAggregateInput>;
    @Field(() => ProductLengthOrderByRelationAggregateInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthOrderByRelationAggregateInput>;
}

@InputType()
export class ProductRelationFilter {
    @Field(() => ProductWhereInput, {nullable:true})
    is?: InstanceType<typeof ProductWhereInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProductWhereInput>;
}

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class ProductScalarWhereInput {
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntFilter>;
}

@InputType()
export class ProductSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPrice?: true;
}

@ObjectType()
export class ProductSumAggregate {
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutAvailableColorsInput {
    @Field(() => [ProductCreateWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create?: Array<ProductCreateWithoutAvailableColorsInput>;
    @Field(() => [ProductCreateOrConnectWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAvailableColorsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAvailableColorsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutProductCategoriesInput {
    @Field(() => [ProductCreateWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductCategoriesInput)
    create?: Array<ProductCreateWithoutProductCategoriesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductCategoriesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductCategoriesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutProductLengthsInput {
    @Field(() => [ProductCreateWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductLengthsInput)
    create?: Array<ProductCreateWithoutProductLengthsInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductLengthsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductLengthsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateNestedManyWithoutProductSizesInput {
    @Field(() => [ProductCreateWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductSizesInput)
    create?: Array<ProductCreateWithoutProductSizesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductSizesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductSizesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutProductCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutProductLengthsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedCreateWithoutProductSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductCategoryUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductSizeUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedCreateNestedManyWithoutProductsInput>;
    @Field(() => ProductLengthUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedCreateNestedManyWithoutProductsInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutAvailableColorsNestedInput {
    @Field(() => [ProductCreateWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create?: Array<ProductCreateWithoutAvailableColorsInput>;
    @Field(() => [ProductCreateOrConnectWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAvailableColorsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAvailableColorsInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutAvailableColorsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutAvailableColorsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutAvailableColorsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutAvailableColorsInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutAvailableColorsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutAvailableColorsInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput {
    @Field(() => [ProductCreateWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductCategoriesInput)
    create?: Array<ProductCreateWithoutProductCategoriesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductCategoriesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductCategoriesInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutProductCategoriesInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductCategoriesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutProductCategoriesInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductCategoriesInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutProductCategoriesInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductCategoriesInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutProductLengthsNestedInput {
    @Field(() => [ProductCreateWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductLengthsInput)
    create?: Array<ProductCreateWithoutProductLengthsInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductLengthsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductLengthsInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutProductLengthsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductLengthsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutProductLengthsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductLengthsInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutProductLengthsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductLengthsInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutProductSizesNestedInput {
    @Field(() => [ProductCreateWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductSizesInput)
    create?: Array<ProductCreateWithoutProductSizesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductSizesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductSizesInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutProductSizesInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductSizesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutProductSizesInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductSizesInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutProductSizesInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductSizesInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUncheckedUpdateManyWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductUncheckedUpdateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutProductCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutProductLengthsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateWithoutProductSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUncheckedUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUncheckedUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutAvailableColorsInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutProductCategoriesInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutProductLengthsInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithWhereWithoutProductSizesInput {
    @Field(() => ProductScalarWhereInput, {nullable:false})
    @Type(() => ProductScalarWhereInput)
    where!: InstanceType<typeof ProductScalarWhereInput>;
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
}

@InputType()
export class ProductUpdateManyWithoutAvailableColorsNestedInput {
    @Field(() => [ProductCreateWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create?: Array<ProductCreateWithoutAvailableColorsInput>;
    @Field(() => [ProductCreateOrConnectWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAvailableColorsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutAvailableColorsInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutAvailableColorsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutAvailableColorsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutAvailableColorsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutAvailableColorsInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutAvailableColorsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutAvailableColorsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutAvailableColorsInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutProductCategoriesNestedInput {
    @Field(() => [ProductCreateWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductCategoriesInput)
    create?: Array<ProductCreateWithoutProductCategoriesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductCategoriesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductCategoriesInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutProductCategoriesInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductCategoriesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutProductCategoriesInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductCategoriesInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutProductCategoriesInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutProductCategoriesInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductCategoriesInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutProductLengthsNestedInput {
    @Field(() => [ProductCreateWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductLengthsInput)
    create?: Array<ProductCreateWithoutProductLengthsInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductLengthsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductLengthsInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutProductLengthsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductLengthsInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutProductLengthsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductLengthsInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutProductLengthsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutProductLengthsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductLengthsInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateManyWithoutProductSizesNestedInput {
    @Field(() => [ProductCreateWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateWithoutProductSizesInput)
    create?: Array<ProductCreateWithoutProductSizesInput>;
    @Field(() => [ProductCreateOrConnectWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductSizesInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutProductSizesInput>;
    @Field(() => [ProductUpsertWithWhereUniqueWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutProductSizesInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutProductSizesInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<ProductWhereUniqueInput>;
    @Field(() => [ProductUpdateWithWhereUniqueWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutProductSizesInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutProductSizesInput>;
    @Field(() => [ProductUpdateManyWithWhereWithoutProductSizesInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutProductSizesInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutProductSizesInput>;
    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

@InputType()
export class ProductUpdateOneWithoutImagesNestedInput {
    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateWithoutImagesInput)
    create?: InstanceType<typeof ProductCreateWithoutImagesInput>;
    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutImagesInput>;
    @Field(() => ProductUpsertWithoutImagesInput, {nullable:true})
    @Type(() => ProductUpsertWithoutImagesInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutImagesInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutImagesInput, {nullable:true})
    @Type(() => ProductUpdateWithoutImagesInput)
    update?: InstanceType<typeof ProductUpdateWithoutImagesInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutAvailableColorsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutAvailableColorsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAvailableColorsInput)
    data!: InstanceType<typeof ProductUpdateWithoutAvailableColorsInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutProductCategoriesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutProductCategoriesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductCategoriesInput)
    data!: InstanceType<typeof ProductUpdateWithoutProductCategoriesInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutProductLengthsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutProductLengthsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductLengthsInput)
    data!: InstanceType<typeof ProductUpdateWithoutProductLengthsInput>;
}

@InputType()
export class ProductUpdateWithWhereUniqueWithoutProductSizesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutProductSizesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductSizesInput)
    data!: InstanceType<typeof ProductUpdateWithoutProductSizesInput>;
}

@InputType()
export class ProductUpdateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateWithoutProductCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateWithoutProductLengthsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateWithoutProductSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(1000)
    @Validator.MinLength(0)
    description?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUpdateManyWithoutProductsNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductCategoryUpdateManyWithoutProductsNestedInput, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductSizeUpdateManyWithoutProductsNestedInput, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeUpdateManyWithoutProductsNestedInput>;
    @Field(() => ProductLengthUpdateManyWithoutProductsNestedInput, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthUpdateManyWithoutProductsNestedInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutAvailableColorsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutAvailableColorsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAvailableColorsInput)
    update!: InstanceType<typeof ProductUpdateWithoutAvailableColorsInput>;
    @Field(() => ProductCreateWithoutAvailableColorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create!: InstanceType<typeof ProductCreateWithoutAvailableColorsInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutProductCategoriesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutProductCategoriesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductCategoriesInput)
    update!: InstanceType<typeof ProductUpdateWithoutProductCategoriesInput>;
    @Field(() => ProductCreateWithoutProductCategoriesInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductCategoriesInput)
    create!: InstanceType<typeof ProductCreateWithoutProductCategoriesInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutProductLengthsInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutProductLengthsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductLengthsInput)
    update!: InstanceType<typeof ProductUpdateWithoutProductLengthsInput>;
    @Field(() => ProductCreateWithoutProductLengthsInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductLengthsInput)
    create!: InstanceType<typeof ProductCreateWithoutProductLengthsInput>;
}

@InputType()
export class ProductUpsertWithWhereUniqueWithoutProductSizesInput {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutProductSizesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductSizesInput)
    update!: InstanceType<typeof ProductUpdateWithoutProductSizesInput>;
    @Field(() => ProductCreateWithoutProductSizesInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductSizesInput)
    create!: InstanceType<typeof ProductCreateWithoutProductSizesInput>;
}

@InputType()
export class ProductUpsertWithoutImagesInput {
    @Field(() => ProductUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutImagesInput)
    update!: InstanceType<typeof ProductUpdateWithoutImagesInput>;
    @Field(() => ProductCreateWithoutImagesInput, {nullable:false})
    @Type(() => ProductCreateWithoutImagesInput)
    create!: InstanceType<typeof ProductCreateWithoutImagesInput>;
}

@InputType()
export class ProductWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
}

@InputType()
export class ProductWhereInput {
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntFilter>;
    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof ImageListRelationFilter>;
    @Field(() => RgbColorListRelationFilter, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorListRelationFilter>;
    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    productCategories?: InstanceType<typeof ProductCategoryListRelationFilter>;
    @Field(() => ProductSizeListRelationFilter, {nullable:true})
    productSizes?: InstanceType<typeof ProductSizeListRelationFilter>;
    @Field(() => ProductLengthListRelationFilter, {nullable:true})
    productLengths?: InstanceType<typeof ProductLengthListRelationFilter>;
}

@ObjectType()
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    /**
     * @Validator .@IsInt()
     * @Validator .@Min(1)
     * @Validator .@Max(100_000)
     */
    @Field(() => Int, {nullable:false,description:'@Validator.@IsInt()\n@Validator.@Min(1)\n@Validator.@Max(100_000)'})
    price!: number;
    /**
     * @Validator .@IsInt()
     * @Validator .@Min(1)
     * @Validator .@Max(100_000)
     */
    @Field(() => Int, {nullable:true,description:'@Validator.@IsInt()\n@Validator.@Min(1)\n@Validator.@Max(100_000)'})
    discountPrice!: number | null;
    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;
    @Field(() => [RgbColor], {nullable:true})
    availableColors?: Array<RgbColor>;
    @Field(() => [ProductCategory], {nullable:true})
    productCategories?: Array<ProductCategory>;
    @Field(() => [ProductSize], {nullable:true})
    productSizes?: Array<ProductSize>;
    @Field(() => [ProductLength], {nullable:true})
    productLengths?: Array<ProductLength>;
    @Field(() => ProductCount, {nullable:false})
    _count?: InstanceType<typeof ProductCount>;
}

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductUpdateInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    update!: InstanceType<typeof ProductUpdateInput>;
}

@ObjectType()
export class AggregateProductCategory {
    @Field(() => ProductCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregate>;
    @Field(() => ProductCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregate>;
    @Field(() => ProductCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyProductCategoryArgs {
    @Field(() => [ProductCategoryCreateManyInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyInput)
    @ValidateNested()
    data!: Array<ProductCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductCategoryArgs {
    @Field(() => ProductCategoryCreateInput, {nullable:false})
    @Type(() => ProductCategoryCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyProductCategoryArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProductCategoryOrThrowArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductCategoryArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductCategoryArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithRelationInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductCategoryOrThrowArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductCategoryCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductCategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: Array<ProductCategoryCreateWithoutProductsInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryCreateOrConnectWithoutProductsInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
}

@InputType()
export class ProductCategoryCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductCategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductCreateNestedManyWithoutProductCategoriesInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutProductCategoriesInput>;
}

@ArgsType()
export class ProductCategoryGroupByArgs {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductCategoryOrderByWithAggregationInput>;
    @Field(() => [ProductCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductCategoryScalarFieldEnum>;
    @Field(() => ProductCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregateInput>;
    @Field(() => ProductCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregateInput>;
    @Field(() => ProductCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregateInput>;
}

@ObjectType()
export class ProductCategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountAggregate>;
    @Field(() => ProductCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinAggregate>;
    @Field(() => ProductCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxAggregate>;
}

@InputType()
export class ProductCategoryListRelationFilter {
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductCategoryWhereInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductCategoryWhereInput>;
}

@InputType()
export class ProductCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProductCategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProductCategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCategoryCountOrderByAggregateInput>;
    @Field(() => ProductCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductCategoryMaxOrderByAggregateInput>;
    @Field(() => ProductCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductCategoryMinOrderByAggregateInput>;
}

@InputType()
export class ProductCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class ProductCategoryScalarWhereWithAggregatesInput {
    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [ProductCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ProductCategoryScalarWhereInput {
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ProductCategoryUncheckedCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductCategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: Array<ProductCategoryCreateWithoutProductsInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
}

@InputType()
export class ProductCategoryUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductCategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutProductCategoriesInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutProductCategoriesInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutProductCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryUncheckedUpdateManyWithoutProductsNestedInput {
    @Field(() => [ProductCategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: Array<ProductCategoryCreateWithoutProductsInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}

@InputType()
export class ProductCategoryUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryUncheckedUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutProductCategoriesNestedInput>;
}

@InputType()
export class ProductCategoryUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryUpdateManyWithWhereWithoutProductsInput {
    @Field(() => ProductCategoryScalarWhereInput, {nullable:false})
    @Type(() => ProductCategoryScalarWhereInput)
    where!: InstanceType<typeof ProductCategoryScalarWhereInput>;
    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof ProductCategoryUpdateManyMutationInput>;
}

@InputType()
export class ProductCategoryUpdateManyWithoutProductsNestedInput {
    @Field(() => [ProductCategoryCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create?: Array<ProductCategoryCreateWithoutProductsInput>;
    @Field(() => [ProductCategoryCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<ProductCategoryWhereUniqueInput>;
    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductsInput)
    data!: InstanceType<typeof ProductCategoryUpdateWithoutProductsInput>;
}

@InputType()
export class ProductCategoryUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => ProductUpdateManyWithoutProductCategoriesNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutProductCategoriesNestedInput>;
}

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutProductsInput)
    update!: InstanceType<typeof ProductCategoryUpdateWithoutProductsInput>;
    @Field(() => ProductCategoryCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductCategoryCreateWithoutProductsInput>;
}

@InputType()
export class ProductCategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductCategoryWhereInput {
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;
    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class ProductCategory {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    products?: Array<Product>;
    @Field(() => ProductCategoryCount, {nullable:false})
    _count?: InstanceType<typeof ProductCategoryCount>;
}

@ArgsType()
export class UpdateManyProductCategoryArgs {
    @Field(() => ProductCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCategoryUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductCategoryUpdateManyMutationInput>;
    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneProductCategoryArgs {
    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    @Type(() => ProductCategoryUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductCategoryUpdateInput>;
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductCategoryWhereUniqueInput>;
    @Field(() => ProductCategoryCreateInput, {nullable:false})
    @Type(() => ProductCategoryCreateInput)
    create!: InstanceType<typeof ProductCategoryCreateInput>;
    @Field(() => ProductCategoryUpdateInput, {nullable:false})
    @Type(() => ProductCategoryUpdateInput)
    update!: InstanceType<typeof ProductCategoryUpdateInput>;
}

@ObjectType()
export class AggregateProductLength {
    @Field(() => ProductLengthCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductLengthCountAggregate>;
    @Field(() => ProductLengthMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductLengthMinAggregate>;
    @Field(() => ProductLengthMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductLengthMaxAggregate>;
}

@ArgsType()
export class CreateManyProductLengthArgs {
    @Field(() => [ProductLengthCreateManyInput], {nullable:false})
    @Type(() => ProductLengthCreateManyInput)
    @ValidateNested()
    data!: Array<ProductLengthCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductLengthArgs {
    @Field(() => ProductLengthCreateInput, {nullable:false})
    @Type(() => ProductLengthCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductLengthCreateInput>;
}

@ArgsType()
export class DeleteManyProductLengthArgs {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
}

@ArgsType()
export class DeleteOneProductLengthArgs {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProductLengthOrThrowArgs {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => [ProductLengthOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductLengthOrderByWithRelationInput>;
    @Field(() => ProductLengthWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductLengthScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductLengthScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductLengthArgs {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => [ProductLengthOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductLengthOrderByWithRelationInput>;
    @Field(() => ProductLengthWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductLengthScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductLengthScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductLengthArgs {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => [ProductLengthOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductLengthOrderByWithRelationInput>;
    @Field(() => ProductLengthWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductLengthScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductLengthScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductLengthOrThrowArgs {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProductLengthArgs {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
}

@ArgsType()
export class ProductLengthAggregateArgs {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => [ProductLengthOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductLengthOrderByWithRelationInput>;
    @Field(() => ProductLengthWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductLengthCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductLengthCountAggregateInput>;
    @Field(() => ProductLengthMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductLengthMinAggregateInput>;
    @Field(() => ProductLengthMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductLengthMaxAggregateInput>;
}

@InputType()
export class ProductLengthCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductLengthCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductLengthCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductLengthCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductLengthCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductLengthCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateWithoutProductsInput)
    create?: Array<ProductLengthCreateWithoutProductsInput>;
    @Field(() => [ProductLengthCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductLengthCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    connect?: Array<ProductLengthWhereUniqueInput>;
}

@InputType()
export class ProductLengthCreateOrConnectWithoutProductsInput {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => ProductLengthCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductLengthCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductLengthCreateWithoutProductsInput>;
}

@InputType()
export class ProductLengthCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductLengthCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductCreateNestedManyWithoutProductLengthsInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutProductLengthsInput>;
}

@ArgsType()
export class ProductLengthGroupByArgs {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => [ProductLengthOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductLengthOrderByWithAggregationInput>;
    @Field(() => [ProductLengthScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductLengthScalarFieldEnum>;
    @Field(() => ProductLengthScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductLengthScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductLengthCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductLengthCountAggregateInput>;
    @Field(() => ProductLengthMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductLengthMinAggregateInput>;
    @Field(() => ProductLengthMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductLengthMaxAggregateInput>;
}

@ObjectType()
export class ProductLengthGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductLengthCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductLengthCountAggregate>;
    @Field(() => ProductLengthMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductLengthMinAggregate>;
    @Field(() => ProductLengthMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductLengthMaxAggregate>;
}

@InputType()
export class ProductLengthListRelationFilter {
    @Field(() => ProductLengthWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => ProductLengthWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductLengthWhereInput>;
    @Field(() => ProductLengthWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductLengthWhereInput>;
}

@InputType()
export class ProductLengthMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProductLengthMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductLengthMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProductLengthMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductLengthOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductLengthOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductLengthCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductLengthCountOrderByAggregateInput>;
    @Field(() => ProductLengthMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductLengthMaxOrderByAggregateInput>;
    @Field(() => ProductLengthMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductLengthMinOrderByAggregateInput>;
}

@InputType()
export class ProductLengthOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class ProductLengthScalarWhereWithAggregatesInput {
    @Field(() => [ProductLengthScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductLengthScalarWhereWithAggregatesInput>;
    @Field(() => [ProductLengthScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductLengthScalarWhereWithAggregatesInput>;
    @Field(() => [ProductLengthScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductLengthScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ProductLengthScalarWhereInput {
    @Field(() => [ProductLengthScalarWhereInput], {nullable:true})
    AND?: Array<ProductLengthScalarWhereInput>;
    @Field(() => [ProductLengthScalarWhereInput], {nullable:true})
    OR?: Array<ProductLengthScalarWhereInput>;
    @Field(() => [ProductLengthScalarWhereInput], {nullable:true})
    NOT?: Array<ProductLengthScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ProductLengthUncheckedCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductLengthCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateWithoutProductsInput)
    create?: Array<ProductLengthCreateWithoutProductsInput>;
    @Field(() => [ProductLengthCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductLengthCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    connect?: Array<ProductLengthWhereUniqueInput>;
}

@InputType()
export class ProductLengthUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductLengthUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutProductLengthsInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutProductLengthsInput>;
}

@InputType()
export class ProductLengthUncheckedUpdateManyWithoutProductLengthsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthUncheckedUpdateManyWithoutProductsNestedInput {
    @Field(() => [ProductLengthCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateWithoutProductsInput)
    create?: Array<ProductLengthCreateWithoutProductsInput>;
    @Field(() => [ProductLengthCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductLengthCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductLengthUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ProductLengthUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    set?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    disconnect?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    delete?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    connect?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ProductLengthUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductLengthUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ProductLengthUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [ProductLengthScalarWhereInput], {nullable:true})
    @Type(() => ProductLengthScalarWhereInput)
    deleteMany?: Array<ProductLengthScalarWhereInput>;
}

@InputType()
export class ProductLengthUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthUncheckedUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => ProductUncheckedUpdateManyWithoutProductLengthsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutProductLengthsNestedInput>;
}

@InputType()
export class ProductLengthUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthUpdateManyWithWhereWithoutProductsInput {
    @Field(() => ProductLengthScalarWhereInput, {nullable:false})
    @Type(() => ProductLengthScalarWhereInput)
    where!: InstanceType<typeof ProductLengthScalarWhereInput>;
    @Field(() => ProductLengthUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductLengthUpdateManyMutationInput)
    data!: InstanceType<typeof ProductLengthUpdateManyMutationInput>;
}

@InputType()
export class ProductLengthUpdateManyWithoutProductsNestedInput {
    @Field(() => [ProductLengthCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateWithoutProductsInput)
    create?: Array<ProductLengthCreateWithoutProductsInput>;
    @Field(() => [ProductLengthCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductLengthCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductLengthUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ProductLengthUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    set?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    disconnect?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    delete?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthWhereUniqueInput], {nullable:true})
    @Type(() => ProductLengthWhereUniqueInput)
    connect?: Array<ProductLengthWhereUniqueInput>;
    @Field(() => [ProductLengthUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ProductLengthUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductLengthUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ProductLengthUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ProductLengthUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [ProductLengthScalarWhereInput], {nullable:true})
    @Type(() => ProductLengthScalarWhereInput)
    deleteMany?: Array<ProductLengthScalarWhereInput>;
}

@InputType()
export class ProductLengthUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => ProductLengthUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductLengthUpdateWithoutProductsInput)
    data!: InstanceType<typeof ProductLengthUpdateWithoutProductsInput>;
}

@InputType()
export class ProductLengthUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => ProductUpdateManyWithoutProductLengthsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutProductLengthsNestedInput>;
}

@InputType()
export class ProductLengthUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => ProductLengthUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductLengthUpdateWithoutProductsInput)
    update!: InstanceType<typeof ProductLengthUpdateWithoutProductsInput>;
    @Field(() => ProductLengthCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductLengthCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductLengthCreateWithoutProductsInput>;
}

@InputType()
export class ProductLengthWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductLengthWhereInput {
    @Field(() => [ProductLengthWhereInput], {nullable:true})
    AND?: Array<ProductLengthWhereInput>;
    @Field(() => [ProductLengthWhereInput], {nullable:true})
    OR?: Array<ProductLengthWhereInput>;
    @Field(() => [ProductLengthWhereInput], {nullable:true})
    NOT?: Array<ProductLengthWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class ProductLength {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    products?: Array<Product>;
    @Field(() => ProductLengthCount, {nullable:false})
    _count?: InstanceType<typeof ProductLengthCount>;
}

@ArgsType()
export class UpdateManyProductLengthArgs {
    @Field(() => ProductLengthUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductLengthUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductLengthUpdateManyMutationInput>;
    @Field(() => ProductLengthWhereInput, {nullable:true})
    @Type(() => ProductLengthWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductLengthWhereInput>;
}

@ArgsType()
export class UpdateOneProductLengthArgs {
    @Field(() => ProductLengthUpdateInput, {nullable:false})
    @Type(() => ProductLengthUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductLengthUpdateInput>;
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProductLengthArgs {
    @Field(() => ProductLengthWhereUniqueInput, {nullable:false})
    @Type(() => ProductLengthWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductLengthWhereUniqueInput>;
    @Field(() => ProductLengthCreateInput, {nullable:false})
    @Type(() => ProductLengthCreateInput)
    create!: InstanceType<typeof ProductLengthCreateInput>;
    @Field(() => ProductLengthUpdateInput, {nullable:false})
    @Type(() => ProductLengthUpdateInput)
    update!: InstanceType<typeof ProductLengthUpdateInput>;
}

@ObjectType()
export class AggregateProductSize {
    @Field(() => ProductSizeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductSizeCountAggregate>;
    @Field(() => ProductSizeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductSizeMinAggregate>;
    @Field(() => ProductSizeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductSizeMaxAggregate>;
}

@ArgsType()
export class CreateManyProductSizeArgs {
    @Field(() => [ProductSizeCreateManyInput], {nullable:false})
    @Type(() => ProductSizeCreateManyInput)
    @ValidateNested()
    data!: Array<ProductSizeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProductSizeArgs {
    @Field(() => ProductSizeCreateInput, {nullable:false})
    @Type(() => ProductSizeCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductSizeCreateInput>;
}

@ArgsType()
export class DeleteManyProductSizeArgs {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
}

@ArgsType()
export class DeleteOneProductSizeArgs {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProductSizeOrThrowArgs {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => [ProductSizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductSizeOrderByWithRelationInput>;
    @Field(() => ProductSizeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductSizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductSizeScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductSizeArgs {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => [ProductSizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductSizeOrderByWithRelationInput>;
    @Field(() => ProductSizeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductSizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductSizeScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductSizeArgs {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => [ProductSizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductSizeOrderByWithRelationInput>;
    @Field(() => ProductSizeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductSizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductSizeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductSizeOrThrowArgs {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProductSizeArgs {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
}

@ArgsType()
export class ProductSizeAggregateArgs {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => [ProductSizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductSizeOrderByWithRelationInput>;
    @Field(() => ProductSizeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductSizeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductSizeCountAggregateInput>;
    @Field(() => ProductSizeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductSizeMinAggregateInput>;
    @Field(() => ProductSizeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductSizeMaxAggregateInput>;
}

@InputType()
export class ProductSizeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductSizeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductSizeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@ObjectType()
export class ProductSizeCount {
    @Field(() => Int, {nullable:false})
    products?: number;
}

@InputType()
export class ProductSizeCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductSizeCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductSizeCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateWithoutProductsInput)
    create?: Array<ProductSizeCreateWithoutProductsInput>;
    @Field(() => [ProductSizeCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductSizeCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    connect?: Array<ProductSizeWhereUniqueInput>;
}

@InputType()
export class ProductSizeCreateOrConnectWithoutProductsInput {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => ProductSizeCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductSizeCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductSizeCreateWithoutProductsInput>;
}

@InputType()
export class ProductSizeCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductSizeCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductCreateNestedManyWithoutProductSizesInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutProductSizesInput>;
}

@ArgsType()
export class ProductSizeGroupByArgs {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => [ProductSizeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductSizeOrderByWithAggregationInput>;
    @Field(() => [ProductSizeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductSizeScalarFieldEnum>;
    @Field(() => ProductSizeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductSizeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductSizeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductSizeCountAggregateInput>;
    @Field(() => ProductSizeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductSizeMinAggregateInput>;
    @Field(() => ProductSizeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductSizeMaxAggregateInput>;
}

@ObjectType()
export class ProductSizeGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductSizeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductSizeCountAggregate>;
    @Field(() => ProductSizeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductSizeMinAggregate>;
    @Field(() => ProductSizeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductSizeMaxAggregate>;
}

@InputType()
export class ProductSizeListRelationFilter {
    @Field(() => ProductSizeWhereInput, {nullable:true})
    every?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => ProductSizeWhereInput, {nullable:true})
    some?: InstanceType<typeof ProductSizeWhereInput>;
    @Field(() => ProductSizeWhereInput, {nullable:true})
    none?: InstanceType<typeof ProductSizeWhereInput>;
}

@InputType()
export class ProductSizeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProductSizeMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductSizeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class ProductSizeMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class ProductSizeOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProductSizeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductSizeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductSizeCountOrderByAggregateInput>;
    @Field(() => ProductSizeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductSizeMaxOrderByAggregateInput>;
    @Field(() => ProductSizeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductSizeMinOrderByAggregateInput>;
}

@InputType()
export class ProductSizeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
}

@InputType()
export class ProductSizeScalarWhereWithAggregatesInput {
    @Field(() => [ProductSizeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductSizeScalarWhereWithAggregatesInput>;
    @Field(() => [ProductSizeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductSizeScalarWhereWithAggregatesInput>;
    @Field(() => [ProductSizeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductSizeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ProductSizeScalarWhereInput {
    @Field(() => [ProductSizeScalarWhereInput], {nullable:true})
    AND?: Array<ProductSizeScalarWhereInput>;
    @Field(() => [ProductSizeScalarWhereInput], {nullable:true})
    OR?: Array<ProductSizeScalarWhereInput>;
    @Field(() => [ProductSizeScalarWhereInput], {nullable:true})
    NOT?: Array<ProductSizeScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ProductSizeUncheckedCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductSizeCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateWithoutProductsInput)
    create?: Array<ProductSizeCreateWithoutProductsInput>;
    @Field(() => [ProductSizeCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductSizeCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    connect?: Array<ProductSizeWhereUniqueInput>;
}

@InputType()
export class ProductSizeUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class ProductSizeUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => ProductUncheckedCreateNestedManyWithoutProductSizesInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutProductSizesInput>;
}

@InputType()
export class ProductSizeUncheckedUpdateManyWithoutProductSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeUncheckedUpdateManyWithoutProductsNestedInput {
    @Field(() => [ProductSizeCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateWithoutProductsInput)
    create?: Array<ProductSizeCreateWithoutProductsInput>;
    @Field(() => [ProductSizeCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductSizeCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductSizeUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ProductSizeUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    set?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    disconnect?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    delete?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    connect?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ProductSizeUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductSizeUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ProductSizeUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [ProductSizeScalarWhereInput], {nullable:true})
    @Type(() => ProductSizeScalarWhereInput)
    deleteMany?: Array<ProductSizeScalarWhereInput>;
}

@InputType()
export class ProductSizeUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeUncheckedUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => ProductUncheckedUpdateManyWithoutProductSizesNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutProductSizesNestedInput>;
}

@InputType()
export class ProductSizeUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeUpdateManyWithWhereWithoutProductsInput {
    @Field(() => ProductSizeScalarWhereInput, {nullable:false})
    @Type(() => ProductSizeScalarWhereInput)
    where!: InstanceType<typeof ProductSizeScalarWhereInput>;
    @Field(() => ProductSizeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductSizeUpdateManyMutationInput)
    data!: InstanceType<typeof ProductSizeUpdateManyMutationInput>;
}

@InputType()
export class ProductSizeUpdateManyWithoutProductsNestedInput {
    @Field(() => [ProductSizeCreateWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateWithoutProductsInput)
    create?: Array<ProductSizeCreateWithoutProductsInput>;
    @Field(() => [ProductSizeCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ProductSizeCreateOrConnectWithoutProductsInput>;
    @Field(() => [ProductSizeUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ProductSizeUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    set?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    disconnect?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    delete?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeWhereUniqueInput], {nullable:true})
    @Type(() => ProductSizeWhereUniqueInput)
    connect?: Array<ProductSizeWhereUniqueInput>;
    @Field(() => [ProductSizeUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ProductSizeUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [ProductSizeUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ProductSizeUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ProductSizeUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [ProductSizeScalarWhereInput], {nullable:true})
    @Type(() => ProductSizeScalarWhereInput)
    deleteMany?: Array<ProductSizeScalarWhereInput>;
}

@InputType()
export class ProductSizeUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => ProductSizeUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductSizeUpdateWithoutProductsInput)
    data!: InstanceType<typeof ProductSizeUpdateWithoutProductsInput>;
}

@InputType()
export class ProductSizeUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => ProductUpdateManyWithoutProductSizesNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutProductSizesNestedInput>;
}

@InputType()
export class ProductSizeUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => ProductSizeUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ProductSizeUpdateWithoutProductsInput)
    update!: InstanceType<typeof ProductSizeUpdateWithoutProductsInput>;
    @Field(() => ProductSizeCreateWithoutProductsInput, {nullable:false})
    @Type(() => ProductSizeCreateWithoutProductsInput)
    create!: InstanceType<typeof ProductSizeCreateWithoutProductsInput>;
}

@InputType()
export class ProductSizeWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class ProductSizeWhereInput {
    @Field(() => [ProductSizeWhereInput], {nullable:true})
    AND?: Array<ProductSizeWhereInput>;
    @Field(() => [ProductSizeWhereInput], {nullable:true})
    OR?: Array<ProductSizeWhereInput>;
    @Field(() => [ProductSizeWhereInput], {nullable:true})
    NOT?: Array<ProductSizeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
}

@ObjectType()
export class ProductSize {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @HideField()
    products?: Array<Product>;
    @Field(() => ProductSizeCount, {nullable:false})
    _count?: InstanceType<typeof ProductSizeCount>;
}

@ArgsType()
export class UpdateManyProductSizeArgs {
    @Field(() => ProductSizeUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductSizeUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductSizeUpdateManyMutationInput>;
    @Field(() => ProductSizeWhereInput, {nullable:true})
    @Type(() => ProductSizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductSizeWhereInput>;
}

@ArgsType()
export class UpdateOneProductSizeArgs {
    @Field(() => ProductSizeUpdateInput, {nullable:false})
    @Type(() => ProductSizeUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductSizeUpdateInput>;
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProductSizeArgs {
    @Field(() => ProductSizeWhereUniqueInput, {nullable:false})
    @Type(() => ProductSizeWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof ProductSizeWhereUniqueInput>;
    @Field(() => ProductSizeCreateInput, {nullable:false})
    @Type(() => ProductSizeCreateInput)
    create!: InstanceType<typeof ProductSizeCreateInput>;
    @Field(() => ProductSizeUpdateInput, {nullable:false})
    @Type(() => ProductSizeUpdateInput)
    update!: InstanceType<typeof ProductSizeUpdateInput>;
}

@ObjectType()
export class AggregateRgbColor {
    @Field(() => RgbColorCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbColorCountAggregate>;
    @Field(() => RgbColorAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbColorAvgAggregate>;
    @Field(() => RgbColorSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbColorSumAggregate>;
    @Field(() => RgbColorMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbColorMinAggregate>;
    @Field(() => RgbColorMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbColorMaxAggregate>;
}

@ArgsType()
export class CreateManyRgbColorArgs {
    @Field(() => [RgbColorCreateManyInput], {nullable:false})
    @Type(() => RgbColorCreateManyInput)
    @ValidateNested()
    data!: Array<RgbColorCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRgbColorArgs {
    @Field(() => RgbColorCreateInput, {nullable:false})
    @Type(() => RgbColorCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbColorCreateInput>;
}

@ArgsType()
export class DeleteManyRgbColorArgs {
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
}

@ArgsType()
export class DeleteOneRgbColorArgs {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
}

@ArgsType()
export class FindFirstRgbColorOrThrowArgs {
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => [RgbColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbColorOrderByWithRelationInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbColorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbColorScalarFieldEnum>;
}

@ArgsType()
export class FindFirstRgbColorArgs {
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => [RgbColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbColorOrderByWithRelationInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbColorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbColorScalarFieldEnum>;
}

@ArgsType()
export class FindManyRgbColorArgs {
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => [RgbColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbColorOrderByWithRelationInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbColorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbColorScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueRgbColorOrThrowArgs {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueRgbColorArgs {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
}

@ArgsType()
export class RgbColorAggregateArgs {
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => [RgbColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbColorOrderByWithRelationInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbColorCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbColorCountAggregateInput>;
    @Field(() => RgbColorAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbColorAvgAggregateInput>;
    @Field(() => RgbColorSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbColorSumAggregateInput>;
    @Field(() => RgbColorMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbColorMinAggregateInput>;
    @Field(() => RgbColorMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbColorMaxAggregateInput>;
}

@InputType()
export class RgbColorAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbColorAvgAggregate {
    @Field(() => Float, {nullable:true})
    r?: number;
    @Field(() => Float, {nullable:true})
    g?: number;
    @Field(() => Float, {nullable:true})
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbColorAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbColorCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RgbColorCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @HideField()
    a!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RgbColorCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@ObjectType()
export class RgbColorCount {
    @Field(() => Int, {nullable:false})
    products?: number;
    @Field(() => Int, {nullable:false})
    Image?: number;
}

@InputType()
export class RgbColorCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbColorCreateNestedManyWithoutProductsInput {
    @Field(() => [RgbColorCreateWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductsInput)
    create?: Array<RgbColorCreateWithoutProductsInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductsInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: Array<RgbColorWhereUniqueInput>;
}

@InputType()
export class RgbColorCreateNestedOneWithoutImageInput {
    @Field(() => RgbColorCreateWithoutImageInput, {nullable:true})
    @Type(() => RgbColorCreateWithoutImageInput)
    create?: InstanceType<typeof RgbColorCreateWithoutImageInput>;
    @Field(() => RgbColorCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutImageInput)
    connectOrCreate?: InstanceType<typeof RgbColorCreateOrConnectWithoutImageInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: InstanceType<typeof RgbColorWhereUniqueInput>;
}

@InputType()
export class RgbColorCreateOrConnectWithoutImageInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorCreateWithoutImageInput, {nullable:false})
    @Type(() => RgbColorCreateWithoutImageInput)
    create!: InstanceType<typeof RgbColorCreateWithoutImageInput>;
}

@InputType()
export class RgbColorCreateOrConnectWithoutProductsInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorCreateWithoutProductsInput, {nullable:false})
    @Type(() => RgbColorCreateWithoutProductsInput)
    create!: InstanceType<typeof RgbColorCreateWithoutProductsInput>;
}

@InputType()
export class RgbColorCreateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductCreateNestedManyWithoutAvailableColorsInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAvailableColorsInput>;
}

@InputType()
export class RgbColorCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ImageCreateNestedManyWithoutRgbBackgroundInput, {nullable:true})
    Image?: InstanceType<typeof ImageCreateNestedManyWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbColorCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductCreateNestedManyWithoutAvailableColorsInput, {nullable:true})
    products?: InstanceType<typeof ProductCreateNestedManyWithoutAvailableColorsInput>;
    @Field(() => ImageCreateNestedManyWithoutRgbBackgroundInput, {nullable:true})
    Image?: InstanceType<typeof ImageCreateNestedManyWithoutRgbBackgroundInput>;
}

@ArgsType()
export class RgbColorGroupByArgs {
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => [RgbColorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RgbColorOrderByWithAggregationInput>;
    @Field(() => [RgbColorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RgbColorScalarFieldEnum>;
    @Field(() => RgbColorScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RgbColorScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbColorCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbColorCountAggregateInput>;
    @Field(() => RgbColorAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbColorAvgAggregateInput>;
    @Field(() => RgbColorSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbColorSumAggregateInput>;
    @Field(() => RgbColorMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbColorMinAggregateInput>;
    @Field(() => RgbColorMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbColorMaxAggregateInput>;
}

@ObjectType()
export class RgbColorGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @HideField()
    a?: number;
    @Field(() => RgbColorCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbColorCountAggregate>;
    @Field(() => RgbColorAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbColorAvgAggregate>;
    @Field(() => RgbColorSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbColorSumAggregate>;
    @Field(() => RgbColorMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbColorMinAggregate>;
    @Field(() => RgbColorMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbColorMaxAggregate>;
}

@InputType()
export class RgbColorListRelationFilter {
    @Field(() => RgbColorWhereInput, {nullable:true})
    every?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => RgbColorWhereInput, {nullable:true})
    some?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => RgbColorWhereInput, {nullable:true})
    none?: InstanceType<typeof RgbColorWhereInput>;
}

@InputType()
export class RgbColorMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbColorMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbColorMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbColorMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbColorMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbColorMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbColorOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class RgbColorOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    a?: InstanceType<typeof SortOrderInput>;
    @Field(() => RgbColorCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbColorCountOrderByAggregateInput>;
    @Field(() => RgbColorAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbColorAvgOrderByAggregateInput>;
    @Field(() => RgbColorMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbColorMaxOrderByAggregateInput>;
    @Field(() => RgbColorMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbColorMinOrderByAggregateInput>;
    @Field(() => RgbColorSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbColorSumOrderByAggregateInput>;
}

@InputType()
export class RgbColorOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    a?: InstanceType<typeof SortOrderInput>;
    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: InstanceType<typeof ProductOrderByRelationAggregateInput>;
    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    Image?: InstanceType<typeof ImageOrderByRelationAggregateInput>;
}

@InputType()
export class RgbColorRelationFilter {
    @Field(() => RgbColorWhereInput, {nullable:true})
    is?: InstanceType<typeof RgbColorWhereInput>;
    @Field(() => RgbColorWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RgbColorWhereInput>;
}

@InputType()
export class RgbColorScalarWhereWithAggregatesInput {
    @Field(() => [RgbColorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RgbColorScalarWhereWithAggregatesInput>;
    @Field(() => [RgbColorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RgbColorScalarWhereWithAggregatesInput>;
    @Field(() => [RgbColorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RgbColorScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    r?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    g?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    b?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    a?: InstanceType<typeof FloatWithAggregatesFilter>;
}

@InputType()
export class RgbColorScalarWhereInput {
    @Field(() => [RgbColorScalarWhereInput], {nullable:true})
    AND?: Array<RgbColorScalarWhereInput>;
    @Field(() => [RgbColorScalarWhereInput], {nullable:true})
    OR?: Array<RgbColorScalarWhereInput>;
    @Field(() => [RgbColorScalarWhereInput], {nullable:true})
    NOT?: Array<RgbColorScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class RgbColorSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbColorSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @HideField()
    a?: number;
}

@InputType()
export class RgbColorSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbColorUncheckedCreateNestedManyWithoutProductsInput {
    @Field(() => [RgbColorCreateWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductsInput)
    create?: Array<RgbColorCreateWithoutProductsInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductsInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: Array<RgbColorWhereUniqueInput>;
}

@InputType()
export class RgbColorUncheckedCreateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAvailableColorsInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAvailableColorsInput>;
}

@InputType()
export class RgbColorUncheckedCreateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput, {nullable:true})
    Image?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbColorUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductUncheckedCreateNestedManyWithoutAvailableColorsInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedCreateNestedManyWithoutAvailableColorsInput>;
    @Field(() => ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput, {nullable:true})
    Image?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbColorUncheckedUpdateManyWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbColorUncheckedUpdateManyWithoutProductsNestedInput {
    @Field(() => [RgbColorCreateWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductsInput)
    create?: Array<RgbColorCreateWithoutProductsInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductsInput>;
    @Field(() => [RgbColorUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<RgbColorUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    set?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    disconnect?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    delete?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<RgbColorUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [RgbColorUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<RgbColorUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [RgbColorScalarWhereInput], {nullable:true})
    @Type(() => RgbColorScalarWhereInput)
    deleteMany?: Array<RgbColorScalarWhereInput>;
}

@InputType()
export class RgbColorUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbColorUncheckedUpdateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductUncheckedUpdateManyWithoutAvailableColorsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAvailableColorsNestedInput>;
}

@InputType()
export class RgbColorUncheckedUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput, {nullable:true})
    Image?: InstanceType<typeof ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbColorUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductUncheckedUpdateManyWithoutAvailableColorsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUncheckedUpdateManyWithoutAvailableColorsNestedInput>;
    @Field(() => ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput, {nullable:true})
    Image?: InstanceType<typeof ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbColorUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbColorUpdateManyWithWhereWithoutProductsInput {
    @Field(() => RgbColorScalarWhereInput, {nullable:false})
    @Type(() => RgbColorScalarWhereInput)
    where!: InstanceType<typeof RgbColorScalarWhereInput>;
    @Field(() => RgbColorUpdateManyMutationInput, {nullable:false})
    @Type(() => RgbColorUpdateManyMutationInput)
    data!: InstanceType<typeof RgbColorUpdateManyMutationInput>;
}

@InputType()
export class RgbColorUpdateManyWithoutProductsNestedInput {
    @Field(() => [RgbColorCreateWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductsInput)
    create?: Array<RgbColorCreateWithoutProductsInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductsInput>;
    @Field(() => [RgbColorUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<RgbColorUpsertWithWhereUniqueWithoutProductsInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    set?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    disconnect?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    delete?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: Array<RgbColorWhereUniqueInput>;
    @Field(() => [RgbColorUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<RgbColorUpdateWithWhereUniqueWithoutProductsInput>;
    @Field(() => [RgbColorUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => RgbColorUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<RgbColorUpdateManyWithWhereWithoutProductsInput>;
    @Field(() => [RgbColorScalarWhereInput], {nullable:true})
    @Type(() => RgbColorScalarWhereInput)
    deleteMany?: Array<RgbColorScalarWhereInput>;
}

@InputType()
export class RgbColorUpdateOneRequiredWithoutImageNestedInput {
    @Field(() => RgbColorCreateWithoutImageInput, {nullable:true})
    @Type(() => RgbColorCreateWithoutImageInput)
    create?: InstanceType<typeof RgbColorCreateWithoutImageInput>;
    @Field(() => RgbColorCreateOrConnectWithoutImageInput, {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutImageInput)
    connectOrCreate?: InstanceType<typeof RgbColorCreateOrConnectWithoutImageInput>;
    @Field(() => RgbColorUpsertWithoutImageInput, {nullable:true})
    @Type(() => RgbColorUpsertWithoutImageInput)
    upsert?: InstanceType<typeof RgbColorUpsertWithoutImageInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorUpdateWithoutImageInput, {nullable:true})
    @Type(() => RgbColorUpdateWithoutImageInput)
    update?: InstanceType<typeof RgbColorUpdateWithoutImageInput>;
}

@InputType()
export class RgbColorUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorUpdateWithoutProductsInput, {nullable:false})
    @Type(() => RgbColorUpdateWithoutProductsInput)
    data!: InstanceType<typeof RgbColorUpdateWithoutProductsInput>;
}

@InputType()
export class RgbColorUpdateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductUpdateManyWithoutAvailableColorsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAvailableColorsNestedInput>;
}

@InputType()
export class RgbColorUpdateWithoutProductsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ImageUpdateManyWithoutRgbBackgroundNestedInput, {nullable:true})
    Image?: InstanceType<typeof ImageUpdateManyWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbColorUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => ProductUpdateManyWithoutAvailableColorsNestedInput, {nullable:true})
    products?: InstanceType<typeof ProductUpdateManyWithoutAvailableColorsNestedInput>;
    @Field(() => ImageUpdateManyWithoutRgbBackgroundNestedInput, {nullable:true})
    Image?: InstanceType<typeof ImageUpdateManyWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbColorUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorUpdateWithoutProductsInput, {nullable:false})
    @Type(() => RgbColorUpdateWithoutProductsInput)
    update!: InstanceType<typeof RgbColorUpdateWithoutProductsInput>;
    @Field(() => RgbColorCreateWithoutProductsInput, {nullable:false})
    @Type(() => RgbColorCreateWithoutProductsInput)
    create!: InstanceType<typeof RgbColorCreateWithoutProductsInput>;
}

@InputType()
export class RgbColorUpsertWithoutImageInput {
    @Field(() => RgbColorUpdateWithoutImageInput, {nullable:false})
    @Type(() => RgbColorUpdateWithoutImageInput)
    update!: InstanceType<typeof RgbColorUpdateWithoutImageInput>;
    @Field(() => RgbColorCreateWithoutImageInput, {nullable:false})
    @Type(() => RgbColorCreateWithoutImageInput)
    create!: InstanceType<typeof RgbColorCreateWithoutImageInput>;
}

@InputType()
export class RgbColorWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
}

@InputType()
export class RgbColorWhereInput {
    @Field(() => [RgbColorWhereInput], {nullable:true})
    AND?: Array<RgbColorWhereInput>;
    @Field(() => [RgbColorWhereInput], {nullable:true})
    OR?: Array<RgbColorWhereInput>;
    @Field(() => [RgbColorWhereInput], {nullable:true})
    NOT?: Array<RgbColorWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: InstanceType<typeof ProductListRelationFilter>;
    @Field(() => ImageListRelationFilter, {nullable:true})
    Image?: InstanceType<typeof ImageListRelationFilter>;
}

@ObjectType()
export class RgbColor {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    r!: number;
    @Field(() => Int, {nullable:false})
    g!: number;
    @Field(() => Int, {nullable:false})
    b!: number;
    @HideField()
    a!: number | null;
    @HideField()
    products?: Array<Product>;
    @HideField()
    Image?: Array<Image>;
    @Field(() => RgbColorCount, {nullable:false})
    _count?: InstanceType<typeof RgbColorCount>;
}

@ArgsType()
export class UpdateManyRgbColorArgs {
    @Field(() => RgbColorUpdateManyMutationInput, {nullable:false})
    @Type(() => RgbColorUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbColorUpdateManyMutationInput>;
    @Field(() => RgbColorWhereInput, {nullable:true})
    @Type(() => RgbColorWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbColorWhereInput>;
}

@ArgsType()
export class UpdateOneRgbColorArgs {
    @Field(() => RgbColorUpdateInput, {nullable:false})
    @Type(() => RgbColorUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbColorUpdateInput>;
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneRgbColorArgs {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorCreateInput, {nullable:false})
    @Type(() => RgbColorCreateInput)
    create!: InstanceType<typeof RgbColorCreateInput>;
    @Field(() => RgbColorUpdateInput, {nullable:false})
    @Type(() => RgbColorUpdateInput)
    update!: InstanceType<typeof RgbColorUpdateInput>;
}
