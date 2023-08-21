import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_commentmetaAvgAggregate } from "../outputs/Wp_commentmetaAvgAggregate";
import { Wp_commentmetaCountAggregate } from "../outputs/Wp_commentmetaCountAggregate";
import { Wp_commentmetaMaxAggregate } from "../outputs/Wp_commentmetaMaxAggregate";
import { Wp_commentmetaMinAggregate } from "../outputs/Wp_commentmetaMinAggregate";
import { Wp_commentmetaSumAggregate } from "../outputs/Wp_commentmetaSumAggregate";

@TypeGraphQL.ObjectType("Wp_commentmetaGroupBy", {})
export class Wp_commentmetaGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  meta_id!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  comment_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_key!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_value!: string | null;

  @TypeGraphQL.Field(_type => Wp_commentmetaCountAggregate, {
    nullable: true
  })
  _count!: Wp_commentmetaCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentmetaAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_commentmetaAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentmetaSumAggregate, {
    nullable: true
  })
  _sum!: Wp_commentmetaSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentmetaMinAggregate, {
    nullable: true
  })
  _min!: Wp_commentmetaMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_commentmetaMaxAggregate, {
    nullable: true
  })
  _max!: Wp_commentmetaMaxAggregate | null;
}
