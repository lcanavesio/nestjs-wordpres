import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Wp_usersMaxAggregate", {})
export class Wp_usersMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ID!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_login!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_pass!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_nicename!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_url!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  user_registered!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_activation_key!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_status!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_name!: string | null;
}
