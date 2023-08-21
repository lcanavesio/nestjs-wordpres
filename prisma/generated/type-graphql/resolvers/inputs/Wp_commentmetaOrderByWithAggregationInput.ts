import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Wp_commentmetaAvgOrderByAggregateInput } from "../inputs/Wp_commentmetaAvgOrderByAggregateInput";
import { Wp_commentmetaCountOrderByAggregateInput } from "../inputs/Wp_commentmetaCountOrderByAggregateInput";
import { Wp_commentmetaMaxOrderByAggregateInput } from "../inputs/Wp_commentmetaMaxOrderByAggregateInput";
import { Wp_commentmetaMinOrderByAggregateInput } from "../inputs/Wp_commentmetaMinOrderByAggregateInput";
import { Wp_commentmetaSumOrderByAggregateInput } from "../inputs/Wp_commentmetaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_commentmetaOrderByWithAggregationInput", {})
export class Wp_commentmetaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_key?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentmetaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_commentmetaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentmetaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_commentmetaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentmetaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_commentmetaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentmetaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_commentmetaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentmetaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_commentmetaSumOrderByAggregateInput | undefined;
}
