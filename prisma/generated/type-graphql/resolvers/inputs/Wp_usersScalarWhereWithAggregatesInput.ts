import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Wp_usersScalarWhereWithAggregatesInput", {})
export class Wp_usersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Wp_usersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Wp_usersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Wp_usersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Wp_usersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntWithAggregatesFilter, {
    nullable: true
  })
  ID?: BigIntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_login?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_pass?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_nicename?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  user_registered?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_activation_key?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_status?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  display_name?: StringWithAggregatesFilter | undefined;
}
