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

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum RgbColorScalarFieldEnum {
    id = "id",
    r = "r",
    g = "g",
    b = "b",
    a = "a",
    productId = "productId"
}

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
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
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
registerEnumType(RgbColorScalarFieldEnum, { name: 'RgbColorScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

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
    @Field(() => ImageOrderByWithRelationInput, {nullable:true})
    image?: InstanceType<typeof ImageOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    imageId?: keyof typeof SortOrder;
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
    @Field(() => ImageRelationFilter, {nullable:true})
    image?: InstanceType<typeof ImageRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    imageId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class HomeBlock {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    navigationPath!: string;
    @Field(() => Image, {nullable:false})
    image?: InstanceType<typeof Image>;
    @Field(() => String, {nullable:false})
    imageId!: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
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
    @Field(() => RgbColorOrderByWithRelationInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => HomeBlockOrderByWithRelationInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockOrderByWithRelationInput>;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutImageInput>;
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class ImageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutImageInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutImageInput>;
    @Field(() => String, {nullable:true})
    productId?: string;
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
    @Field(() => HomeBlockUncheckedUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutImageNestedInput>;
    @Field(() => String, {nullable:true})
    productId?: string;
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
    @Field(() => HomeBlockUncheckedUpdateOneWithoutImageNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutImageNestedInput>;
    @Field(() => String, {nullable:true})
    productId?: string;
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
    @Field(() => RgbColorRelationFilter, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbColorRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringFilter>;
    @Field(() => HomeBlockRelationFilter, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockRelationFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Image {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:true})
    title!: string | null;
    @Field(() => String, {nullable:false})
    imagePath!: string;
    @Field(() => RgbColor, {nullable:false})
    rgbBackground?: InstanceType<typeof RgbColor>;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @HideField()
    homeBlock?: InstanceType<typeof HomeBlock> | null;
    @HideField()
    product?: InstanceType<typeof Product> | null;
    @HideField()
    productId!: string | null;
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

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
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
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductCreateNestedOneWithoutAvailableColorsInput {
    @Field(() => ProductCreateWithoutAvailableColorsInput, {nullable:true})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create?: InstanceType<typeof ProductCreateWithoutAvailableColorsInput>;
    @Field(() => ProductCreateOrConnectWithoutAvailableColorsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAvailableColorsInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutAvailableColorsInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
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
export class ProductCreateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
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
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorCreateNestedManyWithoutProductInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductInput>;
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
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorCreateNestedManyWithoutProductInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorCreateNestedManyWithoutProductInput>;
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

@InputType()
export class ProductMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
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
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
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
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPrice?: keyof typeof SortOrder;
    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    images?: InstanceType<typeof ImageOrderByRelationAggregateInput>;
    @Field(() => RgbColorOrderByRelationAggregateInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorOrderByRelationAggregateInput>;
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
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntWithAggregatesFilter>;
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
export class ProductUncheckedCreateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
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
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductInput>;
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
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutProductInput>;
    @Field(() => RgbColorUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedCreateNestedManyWithoutProductInput>;
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
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
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
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductNestedInput>;
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
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUncheckedUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUncheckedUpdateManyWithoutProductNestedInput>;
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
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
}

@InputType()
export class ProductUpdateOneWithoutAvailableColorsNestedInput {
    @Field(() => ProductCreateWithoutAvailableColorsInput, {nullable:true})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create?: InstanceType<typeof ProductCreateWithoutAvailableColorsInput>;
    @Field(() => ProductCreateOrConnectWithoutAvailableColorsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutAvailableColorsInput)
    connectOrCreate?: InstanceType<typeof ProductCreateOrConnectWithoutAvailableColorsInput>;
    @Field(() => ProductUpsertWithoutAvailableColorsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutAvailableColorsInput)
    upsert?: InstanceType<typeof ProductUpsertWithoutAvailableColorsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: InstanceType<typeof ProductWhereUniqueInput>;
    @Field(() => ProductUpdateWithoutAvailableColorsInput, {nullable:true})
    @Type(() => ProductUpdateWithoutAvailableColorsInput)
    update?: InstanceType<typeof ProductUpdateWithoutAvailableColorsInput>;
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
export class ProductUpdateWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
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
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => RgbColorUpdateManyWithoutProductNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductNestedInput>;
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
    @Field(() => Int, {nullable:true})
    price?: number;
    @Field(() => Int, {nullable:true})
    discountPrice?: number;
    @Field(() => ImageUpdateManyWithoutProductNestedInput, {nullable:true})
    images?: InstanceType<typeof ImageUpdateManyWithoutProductNestedInput>;
    @Field(() => RgbColorUpdateManyWithoutProductNestedInput, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorUpdateManyWithoutProductNestedInput>;
}

@InputType()
export class ProductUpsertWithoutAvailableColorsInput {
    @Field(() => ProductUpdateWithoutAvailableColorsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAvailableColorsInput)
    update!: InstanceType<typeof ProductUpdateWithoutAvailableColorsInput>;
    @Field(() => ProductCreateWithoutAvailableColorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAvailableColorsInput)
    create!: InstanceType<typeof ProductCreateWithoutAvailableColorsInput>;
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
    @Field(() => IntFilter, {nullable:true})
    price?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    discountPrice?: InstanceType<typeof IntFilter>;
    @Field(() => ImageListRelationFilter, {nullable:true})
    images?: InstanceType<typeof ImageListRelationFilter>;
    @Field(() => RgbColorListRelationFilter, {nullable:true})
    availableColors?: InstanceType<typeof RgbColorListRelationFilter>;
}

@ObjectType()
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
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
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RgbColorCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
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
    @HideField()
    productId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RgbColorCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@ObjectType()
export class RgbColorCount {
    @Field(() => Int, {nullable:false})
    Image?: number;
}

@InputType()
export class RgbColorCreateManyProductInputEnvelope {
    @Field(() => [RgbColorCreateManyProductInput], {nullable:false})
    @Type(() => RgbColorCreateManyProductInput)
    data!: Array<RgbColorCreateManyProductInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class RgbColorCreateManyProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
export class RgbColorCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class RgbColorCreateNestedManyWithoutProductInput {
    @Field(() => [RgbColorCreateWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductInput)
    create?: Array<RgbColorCreateWithoutProductInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductInput>;
    @Field(() => RgbColorCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => RgbColorCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof RgbColorCreateManyProductInputEnvelope>;
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
export class RgbColorCreateOrConnectWithoutProductInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorCreateWithoutProductInput, {nullable:false})
    @Type(() => RgbColorCreateWithoutProductInput)
    create!: InstanceType<typeof RgbColorCreateWithoutProductInput>;
}

@InputType()
export class RgbColorCreateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => ProductCreateNestedOneWithoutAvailableColorsInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutAvailableColorsInput>;
}

@InputType()
export class RgbColorCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => ProductCreateNestedOneWithoutAvailableColorsInput, {nullable:true})
    product?: InstanceType<typeof ProductCreateNestedOneWithoutAvailableColorsInput>;
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
    @HideField()
    productId?: string;
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
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class RgbColorMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @HideField()
    productId?: string;
}

@InputType()
export class RgbColorMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
}

@InputType()
export class RgbColorMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    productId?: true;
}

@ObjectType()
export class RgbColorMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @HideField()
    productId?: string;
}

@InputType()
export class RgbColorMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
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
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
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
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: InstanceType<typeof ProductOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;
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
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    r?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    g?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    b?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    a?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: InstanceType<typeof StringWithAggregatesFilter>;
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
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
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
export class RgbColorUncheckedCreateNestedManyWithoutProductInput {
    @Field(() => [RgbColorCreateWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductInput)
    create?: Array<RgbColorCreateWithoutProductInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductInput>;
    @Field(() => RgbColorCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => RgbColorCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof RgbColorCreateManyProductInputEnvelope>;
    @Field(() => [RgbColorWhereUniqueInput], {nullable:true})
    @Type(() => RgbColorWhereUniqueInput)
    connect?: Array<RgbColorWhereUniqueInput>;
}

@InputType()
export class RgbColorUncheckedCreateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class RgbColorUncheckedCreateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput, {nullable:true})
    Image?: InstanceType<typeof ImageUncheckedCreateNestedManyWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbColorUncheckedUpdateManyWithoutAvailableColorsInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
export class RgbColorUncheckedUpdateManyWithoutProductNestedInput {
    @Field(() => [RgbColorCreateWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductInput)
    create?: Array<RgbColorCreateWithoutProductInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductInput>;
    @Field(() => [RgbColorUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => RgbColorUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<RgbColorUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => RgbColorCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => RgbColorCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof RgbColorCreateManyProductInputEnvelope>;
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
    @Field(() => [RgbColorUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => RgbColorUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<RgbColorUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [RgbColorUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => RgbColorUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<RgbColorUpdateManyWithWhereWithoutProductInput>;
    @Field(() => [RgbColorScalarWhereInput], {nullable:true})
    @Type(() => RgbColorScalarWhereInput)
    deleteMany?: Array<RgbColorScalarWhereInput>;
}

@InputType()
export class RgbColorUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class RgbColorUncheckedUpdateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => String, {nullable:true})
    productId?: string;
}

@InputType()
export class RgbColorUncheckedUpdateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => String, {nullable:true})
    productId?: string;
    @Field(() => ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput, {nullable:true})
    Image?: InstanceType<typeof ImageUncheckedUpdateManyWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbColorUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
export class RgbColorUpdateManyWithWhereWithoutProductInput {
    @Field(() => RgbColorScalarWhereInput, {nullable:false})
    @Type(() => RgbColorScalarWhereInput)
    where!: InstanceType<typeof RgbColorScalarWhereInput>;
    @Field(() => RgbColorUpdateManyMutationInput, {nullable:false})
    @Type(() => RgbColorUpdateManyMutationInput)
    data!: InstanceType<typeof RgbColorUpdateManyMutationInput>;
}

@InputType()
export class RgbColorUpdateManyWithoutProductNestedInput {
    @Field(() => [RgbColorCreateWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateWithoutProductInput)
    create?: Array<RgbColorCreateWithoutProductInput>;
    @Field(() => [RgbColorCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => RgbColorCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<RgbColorCreateOrConnectWithoutProductInput>;
    @Field(() => [RgbColorUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => RgbColorUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<RgbColorUpsertWithWhereUniqueWithoutProductInput>;
    @Field(() => RgbColorCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => RgbColorCreateManyProductInputEnvelope)
    createMany?: InstanceType<typeof RgbColorCreateManyProductInputEnvelope>;
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
    @Field(() => [RgbColorUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => RgbColorUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<RgbColorUpdateWithWhereUniqueWithoutProductInput>;
    @Field(() => [RgbColorUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => RgbColorUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<RgbColorUpdateManyWithWhereWithoutProductInput>;
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
export class RgbColorUpdateWithWhereUniqueWithoutProductInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorUpdateWithoutProductInput, {nullable:false})
    @Type(() => RgbColorUpdateWithoutProductInput)
    data!: InstanceType<typeof RgbColorUpdateWithoutProductInput>;
}

@InputType()
export class RgbColorUpdateWithoutImageInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => ProductUpdateOneWithoutAvailableColorsNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutAvailableColorsNestedInput>;
}

@InputType()
export class RgbColorUpdateWithoutProductInput {
    @Field(() => String, {nullable:true})
    id?: string;
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
    @Field(() => ProductUpdateOneWithoutAvailableColorsNestedInput, {nullable:true})
    product?: InstanceType<typeof ProductUpdateOneWithoutAvailableColorsNestedInput>;
    @Field(() => ImageUpdateManyWithoutRgbBackgroundNestedInput, {nullable:true})
    Image?: InstanceType<typeof ImageUpdateManyWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbColorUpsertWithWhereUniqueWithoutProductInput {
    @Field(() => RgbColorWhereUniqueInput, {nullable:false})
    @Type(() => RgbColorWhereUniqueInput)
    where!: InstanceType<typeof RgbColorWhereUniqueInput>;
    @Field(() => RgbColorUpdateWithoutProductInput, {nullable:false})
    @Type(() => RgbColorUpdateWithoutProductInput)
    update!: InstanceType<typeof RgbColorUpdateWithoutProductInput>;
    @Field(() => RgbColorCreateWithoutProductInput, {nullable:false})
    @Type(() => RgbColorCreateWithoutProductInput)
    create!: InstanceType<typeof RgbColorCreateWithoutProductInput>;
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
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
    @Field(() => ProductRelationFilter, {nullable:true})
    product?: InstanceType<typeof ProductRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => ImageListRelationFilter, {nullable:true})
    Image?: InstanceType<typeof ImageListRelationFilter>;
}

@ObjectType()
export class RgbColor {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    r!: number;
    @Field(() => Int, {nullable:false})
    g!: number;
    @Field(() => Int, {nullable:false})
    b!: number;
    @HideField()
    a!: number | null;
    @HideField()
    product?: InstanceType<typeof Product> | null;
    @HideField()
    productId!: string | null;
    @Field(() => [Image], {nullable:true})
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

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
}
