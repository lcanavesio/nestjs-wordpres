import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_termmetaCreateManyInput", {})
export class Wp_termmetaCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  meta_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  term_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_key?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_value?: string | undefined;
}
