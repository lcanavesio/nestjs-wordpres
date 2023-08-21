import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_term_taxonomyAvgOrderByAggregateInput } from "../inputs/Wp_term_taxonomyAvgOrderByAggregateInput";
import { Wp_term_taxonomyCountOrderByAggregateInput } from "../inputs/Wp_term_taxonomyCountOrderByAggregateInput";
import { Wp_term_taxonomyMaxOrderByAggregateInput } from "../inputs/Wp_term_taxonomyMaxOrderByAggregateInput";
import { Wp_term_taxonomyMinOrderByAggregateInput } from "../inputs/Wp_term_taxonomyMinOrderByAggregateInput";
import { Wp_term_taxonomySumOrderByAggregateInput } from "../inputs/Wp_term_taxonomySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_term_taxonomyOrderByWithAggregationInput", {})
export class Wp_term_taxonomyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_taxonomy_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  taxonomy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_term_taxonomyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_term_taxonomyAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_term_taxonomyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_term_taxonomyMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_term_taxonomySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_term_taxonomySumOrderByAggregateInput | undefined;
}
