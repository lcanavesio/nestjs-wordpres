import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Wp_postmetaWhereInput } from "../inputs/Wp_postmetaWhereInput";

@TypeGraphQL.InputType("Wp_postmetaWhereUniqueInput", {})
export class Wp_postmetaWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  meta_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaWhereInput], {
    nullable: true
  })
  AND?: Wp_postmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaWhereInput], {
    nullable: true
  })
  OR?: Wp_postmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaWhereInput], {
    nullable: true
  })
  NOT?: Wp_postmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  post_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_key?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_value?: StringNullableFilter | undefined;
}
