import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput", {})
export class wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  term_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taxonomy!: string;
}
