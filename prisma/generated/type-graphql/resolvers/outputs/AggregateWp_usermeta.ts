import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_usermetaAvgAggregate } from "../outputs/Wp_usermetaAvgAggregate";
import { Wp_usermetaCountAggregate } from "../outputs/Wp_usermetaCountAggregate";
import { Wp_usermetaMaxAggregate } from "../outputs/Wp_usermetaMaxAggregate";
import { Wp_usermetaMinAggregate } from "../outputs/Wp_usermetaMinAggregate";
import { Wp_usermetaSumAggregate } from "../outputs/Wp_usermetaSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_usermeta", {})
export class AggregateWp_usermeta {
  @TypeGraphQL.Field(_type => Wp_usermetaCountAggregate, {
    nullable: true
  })
  _count!: Wp_usermetaCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usermetaAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_usermetaAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usermetaSumAggregate, {
    nullable: true
  })
  _sum!: Wp_usermetaSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usermetaMinAggregate, {
    nullable: true
  })
  _min!: Wp_usermetaMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usermetaMaxAggregate, {
    nullable: true
  })
  _max!: Wp_usermetaMaxAggregate | null;
}
