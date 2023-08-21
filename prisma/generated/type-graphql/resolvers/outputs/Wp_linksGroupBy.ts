import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_linksAvgAggregate } from "../outputs/Wp_linksAvgAggregate";
import { Wp_linksCountAggregate } from "../outputs/Wp_linksCountAggregate";
import { Wp_linksMaxAggregate } from "../outputs/Wp_linksMaxAggregate";
import { Wp_linksMinAggregate } from "../outputs/Wp_linksMinAggregate";
import { Wp_linksSumAggregate } from "../outputs/Wp_linksSumAggregate";

@TypeGraphQL.ObjectType("Wp_linksGroupBy", {})
export class Wp_linksGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  link_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_target!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_visible!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  link_owner!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  link_rating!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  link_updated!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_rel!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_notes!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_rss!: string;

  @TypeGraphQL.Field(_type => Wp_linksCountAggregate, {
    nullable: true
  })
  _count!: Wp_linksCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_linksAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_linksAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_linksSumAggregate, {
    nullable: true
  })
  _sum!: Wp_linksSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_linksMinAggregate, {
    nullable: true
  })
  _min!: Wp_linksMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_linksMaxAggregate, {
    nullable: true
  })
  _max!: Wp_linksMaxAggregate | null;
}
