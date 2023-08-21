import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_term_taxonomyAvgAggregate } from "../outputs/Wp_term_taxonomyAvgAggregate";
import { Wp_term_taxonomyCountAggregate } from "../outputs/Wp_term_taxonomyCountAggregate";
import { Wp_term_taxonomyMaxAggregate } from "../outputs/Wp_term_taxonomyMaxAggregate";
import { Wp_term_taxonomyMinAggregate } from "../outputs/Wp_term_taxonomyMinAggregate";
import { Wp_term_taxonomySumAggregate } from "../outputs/Wp_term_taxonomySumAggregate";

@TypeGraphQL.ObjectType("Wp_term_taxonomyGroupBy", {})
export class Wp_term_taxonomyGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  term_taxonomy_id!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  term_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxonomy!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  parent!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  count!: bigint;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyCountAggregate, {
    nullable: true
  })
  _count!: Wp_term_taxonomyCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_term_taxonomyAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_taxonomySumAggregate, {
    nullable: true
  })
  _sum!: Wp_term_taxonomySumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyMinAggregate, {
    nullable: true
  })
  _min!: Wp_term_taxonomyMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyMaxAggregate, {
    nullable: true
  })
  _max!: Wp_term_taxonomyMaxAggregate | null;
}
