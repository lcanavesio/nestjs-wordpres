import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_commentmetaCreateInput", {})
export class Wp_commentmetaCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  meta_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  comment_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_key?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_value?: string | undefined;
}
