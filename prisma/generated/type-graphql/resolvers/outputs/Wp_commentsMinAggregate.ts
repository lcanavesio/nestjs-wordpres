import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Wp_commentsMinAggregate", {})
export class Wp_commentsMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_ID!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_post_ID!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author_IP!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  comment_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  comment_date_gmt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_content!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  comment_karma!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_approved!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_agent!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_type!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_parent!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  user_id!: bigint | null;
}
