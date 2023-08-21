import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_optionsAvgAggregate } from "../outputs/Wp_optionsAvgAggregate";
import { Wp_optionsCountAggregate } from "../outputs/Wp_optionsCountAggregate";
import { Wp_optionsMaxAggregate } from "../outputs/Wp_optionsMaxAggregate";
import { Wp_optionsMinAggregate } from "../outputs/Wp_optionsMinAggregate";
import { Wp_optionsSumAggregate } from "../outputs/Wp_optionsSumAggregate";

@TypeGraphQL.ObjectType("Wp_optionsGroupBy", {})
export class Wp_optionsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  option_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  option_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  option_value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  autoload!: string;

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
