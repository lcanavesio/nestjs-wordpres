import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Wp_commentmetaMinAggregate", {})
export class Wp_commentmetaMinAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  meta_id!: bigint | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_key!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_value!: string | null;
}
