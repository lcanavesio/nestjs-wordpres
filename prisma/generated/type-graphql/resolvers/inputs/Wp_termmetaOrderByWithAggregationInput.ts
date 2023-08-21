import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Wp_termmetaAvgOrderByAggregateInput } from "../inputs/Wp_termmetaAvgOrderByAggregateInput";
import { Wp_termmetaCountOrderByAggregateInput } from "../inputs/Wp_termmetaCountOrderByAggregateInput";
import { Wp_termmetaMaxOrderByAggregateInput } from "../inputs/Wp_termmetaMaxOrderByAggregateInput";
import { Wp_termmetaMinOrderByAggregateInput } from "../inputs/Wp_termmetaMinOrderByAggregateInput";
import { Wp_termmetaSumOrderByAggregateInput } from "../inputs/Wp_termmetaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_termmetaOrderByWithAggregationInput", {})
export class Wp_termmetaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_key?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termmetaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_termmetaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termmetaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_termmetaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termmetaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_termmetaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termmetaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_termmetaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termmetaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_termmetaSumOrderByAggregateInput | undefined;
}
