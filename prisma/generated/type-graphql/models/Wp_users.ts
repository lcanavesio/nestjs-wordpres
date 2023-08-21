import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Wp_users", {})
export class Wp_users {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ID!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_login!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_pass!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_nicename!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_url!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  user_registered!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_activation_key!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_status!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  display_name!: string;
}
