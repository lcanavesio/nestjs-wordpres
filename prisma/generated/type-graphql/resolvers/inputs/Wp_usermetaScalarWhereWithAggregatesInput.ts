import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_usermetaScalarWhereWithAggregatesInput", {})
export class Wp_usermetaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_usermetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_usermetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_usermetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_usermetaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  umeta_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_key?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  meta_value?: StringNullableWithAggregatesFilter | undefined;
}
