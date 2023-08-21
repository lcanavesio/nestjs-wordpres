import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Wp_linksWhereInput", {})
export class Wp_linksWhereInput {
  @TypeGraphQL.Field(_type => [Wp_linksWhereInput], {
    nullable: true
  })
  AND?: Wp_linksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_linksWhereInput], {
    nullable: true
  })
  OR?: Wp_linksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_linksWhereInput], {
    nullable: true
  })
  NOT?: Wp_linksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  link_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_image?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_target?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_visible?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  link_owner?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  link_rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  link_updated?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_rel?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_notes?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  link_rss?: StringFilter | undefined;
}
