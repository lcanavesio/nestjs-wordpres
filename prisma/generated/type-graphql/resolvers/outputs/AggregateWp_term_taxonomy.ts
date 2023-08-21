import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_term_taxonomyAvgAggregate } from "../outputs/Wp_term_taxonomyAvgAggregate";
import { Wp_term_taxonomyCountAggregate } from "../outputs/Wp_term_taxonomyCountAggregate";
import { Wp_term_taxonomyMaxAggregate } from "../outputs/Wp_term_taxonomyMaxAggregate";
import { Wp_term_taxonomyMinAggregate } from "../outputs/Wp_term_taxonomyMinAggregate";
import { Wp_term_taxonomySumAggregate } from "../outputs/Wp_term_taxonomySumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_term_taxonomy", {})
export class AggregateWp_term_taxonomy {
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
