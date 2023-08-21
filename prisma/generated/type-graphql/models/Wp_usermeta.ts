import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Wp_usermeta", {})
export class Wp_usermeta {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  umeta_id!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  user_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_key?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_value?: string | null;
}
