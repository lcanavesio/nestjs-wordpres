import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_commentmetaScalarWhereWithAggregatesInput", {})
export class Wp_commentmetaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_commentmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_commentmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_commentmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_commentmetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  meta_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  comment_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_key?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_value?: StringNullableWithAggregatesFilter | undefined;
}
