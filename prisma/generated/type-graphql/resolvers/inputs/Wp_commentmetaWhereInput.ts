import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Wp_commentmetaWhereInput", {})
export class Wp_commentmetaWhereInput {
  @TypeGraphQL.Field(_type => [Wp_commentmetaWhereInput], {
    nullable: true
  })
  AND?: Wp_commentmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaWhereInput], {
    nullable: true
  })
  OR?: Wp_commentmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaWhereInput], {
    nullable: true
  })
  NOT?: Wp_commentmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  meta_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  comment_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_key?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_value?: StringNullableFilter | undefined;
}
