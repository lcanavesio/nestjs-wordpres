import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_commentsCreateInput", {})
export class Wp_commentsCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_ID?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_post_ID?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_author!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author_email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_author_IP?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  comment_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  comment_date_gmt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_content!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  comment_karma?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_approved?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_agent?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_type?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_parent?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  user_id?: bigint | undefined;
}
