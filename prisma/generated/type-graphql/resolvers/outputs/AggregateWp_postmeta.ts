import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_postmetaAvgAggregate } from "../outputs/Wp_postmetaAvgAggregate";
import { Wp_postmetaCountAggregate } from "../outputs/Wp_postmetaCountAggregate";
import { Wp_postmetaMaxAggregate } from "../outputs/Wp_postmetaMaxAggregate";
import { Wp_postmetaMinAggregate } from "../outputs/Wp_postmetaMinAggregate";
import { Wp_postmetaSumAggregate } from "../outputs/Wp_postmetaSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_postmeta", {})
export class AggregateWp_postmeta {
  @TypeGraphQL.Field(_type => Wp_postmetaCountAggregate, {
    nullable: true
  })
  _count!: Wp_postmetaCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postmetaAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_postmetaAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postmetaSumAggregate, {
    nullable: true
  })
  _sum!: Wp_postmetaSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postmetaMinAggregate, {
    nullable: true
  })
  _min!: Wp_postmetaMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postmetaMaxAggregate, {
    nullable: true
  })
  _max!: Wp_postmetaMaxAggregate | null;
}
