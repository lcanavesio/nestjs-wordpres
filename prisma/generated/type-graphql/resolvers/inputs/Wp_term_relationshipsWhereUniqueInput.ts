import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Wp_term_relationshipsWhereInput } from "../inputs/Wp_term_relationshipsWhereInput";
import { wp_term_relationshipsObject_idTerm_taxonomy_idCompoundUniqueInput } from "../inputs/wp_term_relationshipsObject_idTerm_taxonomy_idCompoundUniqueInput";

@TypeGraphQL.InputType("Wp_term_relationshipsWhereUniqueInput", {})
export class Wp_term_relationshipsWhereUniqueInput {
  @TypeGraphQL.Field(_type => wp_term_relationshipsObject_idTerm_taxonomy_idCompoundUniqueInput, {
    nullable: true
  })
  object_id_term_taxonomy_id?: wp_term_relationshipsObject_idTerm_taxonomy_idCompoundUniqueInput | undefined;

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
