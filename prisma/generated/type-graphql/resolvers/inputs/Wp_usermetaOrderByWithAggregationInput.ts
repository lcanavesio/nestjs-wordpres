import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Wp_usermetaAvgOrderByAggregateInput } from "../inputs/Wp_usermetaAvgOrderByAggregateInput";
import { Wp_usermetaCountOrderByAggregateInput } from "../inputs/Wp_usermetaCountOrderByAggregateInput";
import { Wp_usermetaMaxOrderByAggregateInput } from "../inputs/Wp_usermetaMaxOrderByAggregateInput";
import { Wp_usermetaMinOrderByAggregateInput } from "../inputs/Wp_usermetaMinOrderByAggregateInput";
import { Wp_usermetaSumOrderByAggregateInput } from "../inputs/Wp_usermetaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_usermetaOrderByWithAggregationInput", {})
export class Wp_usermetaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  umeta_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_key?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usermetaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_usermetaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usermetaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_usermetaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usermetaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_usermetaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usermetaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_usermetaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usermetaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_usermetaSumOrderByAggregateInput | undefined;
}
