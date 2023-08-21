import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_optionsAvgAggregate } from "../outputs/Wp_optionsAvgAggregate";
import { Wp_optionsCountAggregate } from "../outputs/Wp_optionsCountAggregate";
import { Wp_optionsMaxAggregate } from "../outputs/Wp_optionsMaxAggregate";
import { Wp_optionsMinAggregate } from "../outputs/Wp_optionsMinAggregate";
import { Wp_optionsSumAggregate } from "../outputs/Wp_optionsSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_options", {})
export class AggregateWp_options {
  @TypeGraphQL.Field(_type => Wp_optionsCountAggregate, {
    nullable: true
  })
  _count!: Wp_optionsCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_optionsAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_optionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_optionsSumAggregate, {
    nullable: true
  })
  _sum!: Wp_optionsSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_optionsMinAggregate, {
    nullable: true
  })
  _min!: Wp_optionsMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_optionsMaxAggregate, {
    nullable: true
  })
  _max!: Wp_optionsMaxAggregate | null;
}
