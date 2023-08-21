import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_postsCreateInput", {})
export class Wp_postsCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ID?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  post_author?: bigint | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_date_gmt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_excerpt!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ping_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  to_ping!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pinged!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_modified?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_modified_gmt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_content_filtered!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  post_parent?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  guid?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  menu_order?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_mime_type?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_count?: bigint | undefined;
}
