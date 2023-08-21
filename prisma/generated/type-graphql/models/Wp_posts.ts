import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Wp_posts", {})
export class Wp_posts {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ID!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  post_author!: bigint;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  post_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  post_date_gmt!: Date;

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
    nullable: false
  })
  post_status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment_status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ping_status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  to_ping!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pinged!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  post_modified!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  post_modified_gmt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_content_filtered!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  post_parent!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  guid!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  menu_order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  post_mime_type!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  comment_count!: bigint;
}
