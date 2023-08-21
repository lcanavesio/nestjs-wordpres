import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_usersCreateInput", {})
export class Wp_usersCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ID?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_login?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_pass?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_nicename?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_url?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  user_registered?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_activation_key?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_status?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name?: string | undefined;
}
