import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_termmetaScalarWhereWithAggregatesInput", {})
export class Wp_termmetaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_termmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_termmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_termmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_termmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  meta_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  term_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_key?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_value?: StringNullableWithAggregatesFilter | undefined;
}
