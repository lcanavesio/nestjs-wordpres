import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_commentsAvgAggregate } from "../outputs/Wp_commentsAvgAggregate";
import { Wp_commentsCountAggregate } from "../outputs/Wp_commentsCountAggregate";
import { Wp_commentsMaxAggregate } from "../outputs/Wp_commentsMaxAggregate";
import { Wp_commentsMinAggregate } from "../outputs/Wp_commentsMinAggregate";
import { Wp_commentsSumAggregate } from "../outputs/Wp_commentsSumAggregate";

@TypeGraphQL.ObjectType("Wp_commentsGroupBy", {})
export class Wp_commentsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  comment_ID!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  comment_post_ID!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_author!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_author_email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_author_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_author_IP!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  comment_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  comment_date_gmt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_content!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  comment_karma!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_approved!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_agent!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_type!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  comment_parent!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  user_id!: bigint;

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
