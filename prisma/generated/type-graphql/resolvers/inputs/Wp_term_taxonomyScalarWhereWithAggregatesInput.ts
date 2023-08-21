import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_term_taxonomyScalarWhereWithAggregatesInput", {})
export class Wp_term_taxonomyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_term_taxonomyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_term_taxonomyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_term_taxonomyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_term_taxonomyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  term_taxonomy_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  term_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  taxonomy?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  parent?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  count?: BigIntWithAggregatesFilter | undefined;
}
