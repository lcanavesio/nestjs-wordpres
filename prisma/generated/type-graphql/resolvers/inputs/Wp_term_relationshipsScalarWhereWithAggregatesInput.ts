import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_term_relationshipsScalarWhereWithAggregatesInput", {})
export class Wp_term_relationshipsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_term_relationshipsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_term_relationshipsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_term_relationshipsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_term_relationshipsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  object_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  term_taxonomy_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  term_order?: IntWithAggregatesFilter | undefined;
}
