import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Wp_links", {})
export class Wp_links {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  link_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_image!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_target!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_visible!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  link_owner!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  link_rating!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  link_updated!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_rel!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_notes!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_rss!: string;
}
