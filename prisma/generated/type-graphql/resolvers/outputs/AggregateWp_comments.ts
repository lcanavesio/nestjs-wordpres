import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_commentsAvgAggregate } from "../outputs/Wp_commentsAvgAggregate";
import { Wp_commentsCountAggregate } from "../outputs/Wp_commentsCountAggregate";
import { Wp_commentsMaxAggregate } from "../outputs/Wp_commentsMaxAggregate";
import { Wp_commentsMinAggregate } from "../outputs/Wp_commentsMinAggregate";
import { Wp_commentsSumAggregate } from "../outputs/Wp_commentsSumAggregate";

@TypeGraphQL.ObjectType("AggregateWp_comments", {})
export class AggregateWp_comments {
  @TypeGraphQL.Field(_type => Wp_commentsCountAggregate, {
    nullable: true
  })
  _count!: Wp_commentsCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentsAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_commentsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentsSumAggregate, {
    nullable: true
  })
  _sum!: Wp_commentsSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentsMinAggregate, {
    nullable: true
  })
  _min!: Wp_commentsMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentsMaxAggregate, {
    nullable: true
  })
  _max!: Wp_commentsMaxAggregate | null;
}
