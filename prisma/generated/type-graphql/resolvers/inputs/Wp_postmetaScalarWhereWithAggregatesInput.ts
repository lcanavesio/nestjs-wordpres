import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_postmetaScalarWhereWithAggregatesInput", {})
export class Wp_postmetaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_postmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_postmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_postmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_postmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  meta_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  post_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_key?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_value?: StringNullableWithAggregatesFilter | undefined;
}
