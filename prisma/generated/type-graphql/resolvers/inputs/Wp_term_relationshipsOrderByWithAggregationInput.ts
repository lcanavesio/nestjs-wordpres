import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_term_relationshipsAvgOrderByAggregateInput } from "../inputs/Wp_term_relationshipsAvgOrderByAggregateInput";
import { Wp_term_relationshipsCountOrderByAggregateInput } from "../inputs/Wp_term_relationshipsCountOrderByAggregateInput";
import { Wp_term_relationshipsMaxOrderByAggregateInput } from "../inputs/Wp_term_relationshipsMaxOrderByAggregateInput";
import { Wp_term_relationshipsMinOrderByAggregateInput } from "../inputs/Wp_term_relationshipsMinOrderByAggregateInput";
import { Wp_term_relationshipsSumOrderByAggregateInput } from "../inputs/Wp_term_relationshipsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_term_relationshipsOrderByWithAggregationInput", {})
export class Wp_term_relationshipsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  object_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_taxonomy_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_term_relationshipsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_term_relationshipsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_term_relationshipsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_term_relationshipsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_term_relationshipsSumOrderByAggregateInput | undefined;
}
