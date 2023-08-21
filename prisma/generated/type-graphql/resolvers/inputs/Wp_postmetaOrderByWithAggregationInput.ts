import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Wp_postmetaAvgOrderByAggregateInput } from "../inputs/Wp_postmetaAvgOrderByAggregateInput";
import { Wp_postmetaCountOrderByAggregateInput } from "../inputs/Wp_postmetaCountOrderByAggregateInput";
import { Wp_postmetaMaxOrderByAggregateInput } from "../inputs/Wp_postmetaMaxOrderByAggregateInput";
import { Wp_postmetaMinOrderByAggregateInput } from "../inputs/Wp_postmetaMinOrderByAggregateInput";
import { Wp_postmetaSumOrderByAggregateInput } from "../inputs/Wp_postmetaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_postmetaOrderByWithAggregationInput", {})
export class Wp_postmetaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_key?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postmetaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_postmetaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postmetaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_postmetaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postmetaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_postmetaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postmetaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_postmetaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postmetaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_postmetaSumOrderByAggregateInput | undefined;
}
