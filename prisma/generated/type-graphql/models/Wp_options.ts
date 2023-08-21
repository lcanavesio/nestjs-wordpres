import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Wp_options", {})
export class Wp_options {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  option_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  option_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  option_value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  autoload!: string;
}
