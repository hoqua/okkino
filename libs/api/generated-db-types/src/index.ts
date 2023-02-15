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
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum RgbBackgroundScalarFieldEnum {
    id = "id",
    r = "r",
    g = "g",
    b = "b",
    a = "a"
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

export enum HomeBlockScalarFieldEnum {
    id = "id",
    title = "title",
    imagePath = "imagePath",
    navigationPath = "navigationPath",
    rgbBackgroundId = "rgbBackgroundId"
}

registerEnumType(HomeBlockScalarFieldEnum, { name: 'HomeBlockScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(RgbBackgroundScalarFieldEnum, { name: 'RgbBackgroundScalarFieldEnum', description: undefined })
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
    title?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class HomeBlockCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    imagePath!: number;
    @Field(() => Int, {nullable:false})
    navigationPath!: number;
    @Field(() => Int, {nullable:false})
    rgbBackgroundId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class HomeBlockCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockCreateManyInput {
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
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class HomeBlockCreateNestedOneWithoutRgbBackgroundInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@InputType()
export class HomeBlockCreateOrConnectWithoutRgbBackgroundInput {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    where!: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockCreateWithoutRgbBackgroundInput {
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
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => RgbBackgroundCreateNestedOneWithoutHomeBlockInput, {nullable:false})
    rgbBackground!: InstanceType<typeof RgbBackgroundCreateNestedOneWithoutHomeBlockInput>;
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
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
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
    title?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
}

@ObjectType()
export class HomeBlockMaxAggregate {
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
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
}

@ObjectType()
export class HomeBlockMinAggregate {
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
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
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
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => RgbBackgroundOrderByWithRelationInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
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
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class HomeBlockUncheckedCreateNestedOneWithoutRgbBackgroundInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
}

@InputType()
export class HomeBlockUncheckedCreateWithoutRgbBackgroundInput {
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
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class HomeBlockUncheckedUpdateManyInput {
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
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockUncheckedUpdateOneWithoutRgbBackgroundNestedInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockUpsertWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpsertWithoutRgbBackgroundInput)
    upsert?: InstanceType<typeof HomeBlockUpsertWithoutRgbBackgroundInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockUpdateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpdateWithoutRgbBackgroundInput)
    update?: InstanceType<typeof HomeBlockUpdateWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockUncheckedUpdateWithoutRgbBackgroundInput {
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
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockUpdateManyMutationInput {
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
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUpdateOneWithoutRgbBackgroundNestedInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockUpsertWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpsertWithoutRgbBackgroundInput)
    upsert?: InstanceType<typeof HomeBlockUpsertWithoutRgbBackgroundInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: InstanceType<typeof HomeBlockWhereUniqueInput>;
    @Field(() => HomeBlockUpdateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpdateWithoutRgbBackgroundInput)
    update?: InstanceType<typeof HomeBlockUpdateWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockUpdateWithoutRgbBackgroundInput {
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
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput>;
}

@InputType()
export class HomeBlockUpsertWithoutRgbBackgroundInput {
    @Field(() => HomeBlockUpdateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockUpdateWithoutRgbBackgroundInput)
    update!: InstanceType<typeof HomeBlockUpdateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
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
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringFilter>;
    @Field(() => RgbBackgroundRelationFilter, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundRelationFilter>;
    @Field(() => StringFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class HomeBlock {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    imagePath!: string;
    @Field(() => String, {nullable:false})
    navigationPath!: string;
    @Field(() => RgbBackground, {nullable:false})
    rgbBackground?: InstanceType<typeof RgbBackground>;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
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
export class AggregateRgbBackground {
    @Field(() => RgbBackgroundCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregate>;
    @Field(() => RgbBackgroundAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregate>;
    @Field(() => RgbBackgroundSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregate>;
    @Field(() => RgbBackgroundMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregate>;
    @Field(() => RgbBackgroundMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregate>;
}

@ArgsType()
export class CreateManyRgbBackgroundArgs {
    @Field(() => [RgbBackgroundCreateManyInput], {nullable:false})
    @Type(() => RgbBackgroundCreateManyInput)
    @ValidateNested()
    data!: Array<RgbBackgroundCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundCreateInput, {nullable:false})
    @Type(() => RgbBackgroundCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundCreateInput>;
}

@ArgsType()
export class DeleteManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@ArgsType()
export class DeleteOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class FindFirstRgbBackgroundOrThrowArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindFirstRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueRgbBackgroundOrThrowArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class RgbBackgroundAggregateArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbBackgroundCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregateInput>;
    @Field(() => RgbBackgroundAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregateInput>;
    @Field(() => RgbBackgroundSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregateInput>;
    @Field(() => RgbBackgroundMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregateInput>;
    @Field(() => RgbBackgroundMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregateInput>;
}

@InputType()
export class RgbBackgroundAvgAggregateInput {
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
export class RgbBackgroundAvgAggregate {
    @Field(() => Float, {nullable:true})
    r?: number;
    @Field(() => Float, {nullable:true})
    g?: number;
    @Field(() => Float, {nullable:true})
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundAvgOrderByAggregateInput {
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
export class RgbBackgroundCountAggregateInput {
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
    _all?: true;
}

@ObjectType()
export class RgbBackgroundCountAggregate {
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
    @Field(() => Int, {nullable:false})
    a!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RgbBackgroundCountOrderByAggregateInput {
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
}

@InputType()
export class RgbBackgroundCreateManyInput {
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
export class RgbBackgroundCreateNestedOneWithoutHomeBlockInput {
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create?: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput)
    connectOrCreate?: InstanceType<typeof RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    @Type(() => RgbBackgroundWhereUniqueInput)
    connect?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@InputType()
export class RgbBackgroundCreateOrConnectWithoutHomeBlockInput {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create!: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
}

@InputType()
export class RgbBackgroundCreateWithoutHomeBlockInput {
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
export class RgbBackgroundCreateInput {
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
    @Field(() => HomeBlockCreateNestedOneWithoutRgbBackgroundInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockCreateNestedOneWithoutRgbBackgroundInput>;
}

@ArgsType()
export class RgbBackgroundGroupByArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithAggregationInput>;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
    @Field(() => RgbBackgroundScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbBackgroundCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregateInput>;
    @Field(() => RgbBackgroundAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregateInput>;
    @Field(() => RgbBackgroundSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregateInput>;
    @Field(() => RgbBackgroundMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregateInput>;
    @Field(() => RgbBackgroundMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregateInput>;
}

@ObjectType()
export class RgbBackgroundGroupBy {
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
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => RgbBackgroundCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregate>;
    @Field(() => RgbBackgroundAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregate>;
    @Field(() => RgbBackgroundSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregate>;
    @Field(() => RgbBackgroundMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregate>;
    @Field(() => RgbBackgroundMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregate>;
}

@InputType()
export class RgbBackgroundMaxAggregateInput {
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
}

@ObjectType()
export class RgbBackgroundMaxAggregate {
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
export class RgbBackgroundMaxOrderByAggregateInput {
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
}

@InputType()
export class RgbBackgroundMinAggregateInput {
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
}

@ObjectType()
export class RgbBackgroundMinAggregate {
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
export class RgbBackgroundMinOrderByAggregateInput {
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
}

@InputType()
export class RgbBackgroundOrderByWithAggregationInput {
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
    @Field(() => RgbBackgroundCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountOrderByAggregateInput>;
    @Field(() => RgbBackgroundAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgOrderByAggregateInput>;
    @Field(() => RgbBackgroundMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxOrderByAggregateInput>;
    @Field(() => RgbBackgroundMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinOrderByAggregateInput>;
    @Field(() => RgbBackgroundSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumOrderByAggregateInput>;
}

@InputType()
export class RgbBackgroundOrderByWithRelationInput {
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
    @Field(() => HomeBlockOrderByWithRelationInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockOrderByWithRelationInput>;
}

@InputType()
export class RgbBackgroundRelationFilter {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    is?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@InputType()
export class RgbBackgroundScalarWhereWithAggregatesInput {
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
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
}

@InputType()
export class RgbBackgroundSumAggregateInput {
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
export class RgbBackgroundSumAggregate {
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
export class RgbBackgroundSumOrderByAggregateInput {
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
export class RgbBackgroundUncheckedCreateWithoutHomeBlockInput {
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
export class RgbBackgroundUncheckedCreateInput {
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
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutRgbBackgroundInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbBackgroundUncheckedUpdateManyInput {
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
export class RgbBackgroundUncheckedUpdateWithoutHomeBlockInput {
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
export class RgbBackgroundUncheckedUpdateInput {
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
    @Field(() => HomeBlockUncheckedUpdateOneWithoutRgbBackgroundNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbBackgroundUpdateManyMutationInput {
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
export class RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput {
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create?: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput)
    connectOrCreate?: InstanceType<typeof RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundUpsertWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundUpsertWithoutHomeBlockInput)
    upsert?: InstanceType<typeof RgbBackgroundUpsertWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    @Type(() => RgbBackgroundWhereUniqueInput)
    connect?: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => RgbBackgroundUpdateWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundUpdateWithoutHomeBlockInput)
    update?: InstanceType<typeof RgbBackgroundUpdateWithoutHomeBlockInput>;
}

@InputType()
export class RgbBackgroundUpdateWithoutHomeBlockInput {
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
export class RgbBackgroundUpdateInput {
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
    @Field(() => HomeBlockUpdateOneWithoutRgbBackgroundNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUpdateOneWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbBackgroundUpsertWithoutHomeBlockInput {
    @Field(() => RgbBackgroundUpdateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateWithoutHomeBlockInput)
    update!: InstanceType<typeof RgbBackgroundUpdateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create!: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
}

@InputType()
export class RgbBackgroundWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class RgbBackgroundWhereInput {
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    AND?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    OR?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    NOT?: Array<RgbBackgroundWhereInput>;
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
    @Field(() => HomeBlockRelationFilter, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockRelationFilter>;
}

@ObjectType()
export class RgbBackground {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    r!: number;
    @Field(() => Int, {nullable:false})
    g!: number;
    @Field(() => Int, {nullable:false})
    b!: number;
    @Field(() => Float, {nullable:true})
    a!: number | null;
    @Field(() => HomeBlock, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlock> | null;
}

@ArgsType()
export class UpdateManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundUpdateManyMutationInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundUpdateManyMutationInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@ArgsType()
export class UpdateOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundUpdateInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundUpdateInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof RgbBackgroundWhereUniqueInput>;
    @Field(() => RgbBackgroundCreateInput, {nullable:false})
    @Type(() => RgbBackgroundCreateInput)
    create!: InstanceType<typeof RgbBackgroundCreateInput>;
    @Field(() => RgbBackgroundUpdateInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateInput)
    update!: InstanceType<typeof RgbBackgroundUpdateInput>;
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
