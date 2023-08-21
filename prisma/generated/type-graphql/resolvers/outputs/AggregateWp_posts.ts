import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_postsAvgAggregate } from "../outputs/Wp_postsAvgAggregate";
import { Wp_postsCountAggregate } from "../outputs/Wp_postsCountAggregate";
import { Wp_postsMaxAggregate } from "../outputs/Wp_postsMaxAggregate";
import { Wp_postsMinAggregate } from "../outputs/Wp_postsMinAggregate";
import { Wp_postsSumAggregate } from "../outputs/Wp_postsSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_posts", {})
export class AggregateWp_posts {
  @TypeGraphQL.Field(_type => Wp_postsCountAggregate, {
    nullable: true
  })
  _count!: Wp_postsCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postsAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_postsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postsSumAggregate, {
    nullable: true
  })
  _sum!: Wp_postsSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postsMinAggregate, {
    nullable: true
  })
  _min!: Wp_postsMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_postsMaxAggregate, {
    nullable: true
  })
  _max!: Wp_postsMaxAggregate | null;
}
