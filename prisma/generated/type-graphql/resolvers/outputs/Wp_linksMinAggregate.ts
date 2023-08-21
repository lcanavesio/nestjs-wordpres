import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Wp_linksMinAggregate", {})
export class Wp_linksMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  link_id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_target!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_visible!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  link_owner!: bigint | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  link_rating!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  link_updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_rel!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_notes!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_rss!: string | null;
}
