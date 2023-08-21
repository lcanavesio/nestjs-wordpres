import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Wp_comments", {})
export class Wp_comments {
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
}
