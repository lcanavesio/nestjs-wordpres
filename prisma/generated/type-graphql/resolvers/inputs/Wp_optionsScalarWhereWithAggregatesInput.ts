import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_optionsScalarWhereWithAggregatesInput", {})
export class Wp_optionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_optionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_optionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_optionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_optionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  option_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  option_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  option_value?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  autoload?: StringWithAggregatesFilter | undefined;
}
