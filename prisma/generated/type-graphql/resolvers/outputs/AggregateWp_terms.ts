import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_termsAvgAggregate } from "../outputs/Wp_termsAvgAggregate";
import { Wp_termsCountAggregate } from "../outputs/Wp_termsCountAggregate";
import { Wp_termsMaxAggregate } from "../outputs/Wp_termsMaxAggregate";
import { Wp_termsMinAggregate } from "../outputs/Wp_termsMinAggregate";
import { Wp_termsSumAggregate } from "../outputs/Wp_termsSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_terms", {})
export class AggregateWp_terms {
  @TypeGraphQL.Field(_type => Wp_termsCountAggregate, {
    nullable: true
  })
  _count!: Wp_termsCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termsAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_termsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termsSumAggregate, {
    nullable: true
  })
  _sum!: Wp_termsSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termsMinAggregate, {
    nullable: true
  })
  _min!: Wp_termsMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_termsMaxAggregate, {
    nullable: true
  })
  _max!: Wp_termsMaxAggregate | null;
}
