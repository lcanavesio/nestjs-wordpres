import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { Wp_term_taxonomyWhereInput } from "../inputs/Wp_term_taxonomyWhereInput";
import { wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput } from "../inputs/wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput";

@TypeGraphQL.InputType("Wp_term_taxonomyWhereUniqueInput", {})
export class Wp_term_taxonomyWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  term_taxonomy_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput, {
    nullable: true
  })
  term_id_taxonomy?: wp_term_taxonomyTerm_idTaxonomyCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyWhereInput], {
    nullable: true
  })
  AND?: Wp_term_taxonomyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyWhereInput], {
    nullable: true
  })
  OR?: Wp_term_taxonomyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyWhereInput], {
    nullable: true
  })
  NOT?: Wp_term_taxonomyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  taxonomy?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  parent?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  count?: BigIntFilter | undefined;
}
