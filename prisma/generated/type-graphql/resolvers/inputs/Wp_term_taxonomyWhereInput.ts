import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Wp_term_taxonomyWhereInput", {})
export class Wp_term_taxonomyWhereInput {
  @TypeGraphQL.Field(_type => [Wp_term_taxonomyWhereInput], {
    nullable: true
  })
  AND?: Wp_term_taxonomyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyWhereInput], {
    nullable: true
  })
  OR?: Wp_term_taxonomyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyWhereInput], {
    nullable: true
  })
  NOT?: Wp_term_taxonomyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_taxonomy_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taxonomy?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  parent?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  count?: BigIntFilter | undefined;
}
