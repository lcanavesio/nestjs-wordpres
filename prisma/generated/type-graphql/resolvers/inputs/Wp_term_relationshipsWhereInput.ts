import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Wp_term_relationshipsWhereInput", {})
export class Wp_term_relationshipsWhereInput {
  @TypeGraphQL.Field(_type => [Wp_term_relationshipsWhereInput], {
    nullable: true
  })
  AND?: Wp_term_relationshipsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsWhereInput], {
    nullable: true
  })
  OR?: Wp_term_relationshipsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsWhereInput], {
    nullable: true
  })
  NOT?: Wp_term_relationshipsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  object_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_taxonomy_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  term_order?: IntFilter | undefined;
}
