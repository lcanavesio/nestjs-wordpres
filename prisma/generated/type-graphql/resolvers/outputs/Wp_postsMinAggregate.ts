import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Wp_postsMinAggregate", {})
export class Wp_postsMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ID!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  post_author!: bigint | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_date_gmt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_content!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_excerpt!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment_status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ping_status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  to_ping!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pinged!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_modified!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  post_modified_gmt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_content_filtered!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  post_parent!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  guid!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  menu_order!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  post_mime_type!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_count!: bigint | null;
}
