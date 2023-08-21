import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_termmetaAvgAggregate } from "../outputs/Wp_termmetaAvgAggregate";
import { Wp_termmetaCountAggregate } from "../outputs/Wp_termmetaCountAggregate";
import { Wp_termmetaMaxAggregate } from "../outputs/Wp_termmetaMaxAggregate";
import { Wp_termmetaMinAggregate } from "../outputs/Wp_termmetaMinAggregate";
import { Wp_termmetaSumAggregate } from "../outputs/Wp_termmetaSumAggregate";

@TypeGraphQL.ObjectType("Wp_termmetaGroupBy", {})
export class Wp_termmetaGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  meta_id!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  term_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_key!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_value!: string | null;

  @TypeGraphQL.Field(_type => Wp_termmetaCountAggregate, {
    nullable: true
  })
  _count!: Wp_termmetaCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termmetaAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_termmetaAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termmetaSumAggregate, {
    nullable: true
  })
  _sum!: Wp_termmetaSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termmetaMinAggregate, {
    nullable: true
  })
  _min!: Wp_termmetaMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termmetaMaxAggregate, {
    nullable: true
  })
  _max!: Wp_termmetaMaxAggregate | null;
}
