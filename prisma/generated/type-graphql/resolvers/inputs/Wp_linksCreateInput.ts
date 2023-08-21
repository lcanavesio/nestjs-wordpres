import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_linksCreateInput", {})
export class Wp_linksCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  link_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_target?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_visible?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  link_owner?: bigint | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  link_rating?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  link_updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_rel?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  link_notes!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_rss?: string | undefined;
}
