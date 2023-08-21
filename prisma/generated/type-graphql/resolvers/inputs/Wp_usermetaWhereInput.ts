import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Wp_usermetaWhereInput", {})
export class Wp_usermetaWhereInput {
  @TypeGraphQL.Field(_type => [Wp_usermetaWhereInput], {
    nullable: true
  })
  AND?: Wp_usermetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaWhereInput], {
    nullable: true
  })
  OR?: Wp_usermetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaWhereInput], {
    nullable: true
  })
  NOT?: Wp_usermetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  umeta_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  user_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_key?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_value?: StringNullableFilter | undefined;
}
