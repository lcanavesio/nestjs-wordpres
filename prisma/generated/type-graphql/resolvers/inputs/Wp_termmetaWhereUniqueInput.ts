import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Wp_termmetaWhereInput } from "../inputs/Wp_termmetaWhereInput";

@TypeGraphQL.InputType("Wp_termmetaWhereUniqueInput", {})
export class Wp_termmetaWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  meta_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaWhereInput], {
    nullable: true
  })
  AND?: Wp_termmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaWhereInput], {
    nullable: true
  })
  OR?: Wp_termmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaWhereInput], {
    nullable: true
  })
  NOT?: Wp_termmetaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_key?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_value?: StringNullableFilter | undefined;
}
