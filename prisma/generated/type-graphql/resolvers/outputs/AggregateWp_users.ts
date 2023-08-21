import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_usersAvgAggregate } from "../outputs/Wp_usersAvgAggregate";
import { Wp_usersCountAggregate } from "../outputs/Wp_usersCountAggregate";
import { Wp_usersMaxAggregate } from "../outputs/Wp_usersMaxAggregate";
import { Wp_usersMinAggregate } from "../outputs/Wp_usersMinAggregate";
import { Wp_usersSumAggregate } from "../outputs/Wp_usersSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_users", {})
export class AggregateWp_users {
  @TypeGraphQL.Field(_type => Wp_usersCountAggregate, {
    nullable: true
  })
  _count!: Wp_usersCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_usersAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersSumAggregate, {
    nullable: true
  })
  _sum!: Wp_usersSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersMinAggregate, {
    nullable: true
  })
  _min!: Wp_usersMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersMaxAggregate, {
    nullable: true
  })
  _max!: Wp_usersMaxAggregate | null;
}
