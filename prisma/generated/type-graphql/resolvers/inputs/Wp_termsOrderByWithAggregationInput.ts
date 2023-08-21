import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_termsAvgOrderByAggregateInput } from "../inputs/Wp_termsAvgOrderByAggregateInput";
import { Wp_termsCountOrderByAggregateInput } from "../inputs/Wp_termsCountOrderByAggregateInput";
import { Wp_termsMaxOrderByAggregateInput } from "../inputs/Wp_termsMaxOrderByAggregateInput";
import { Wp_termsMinOrderByAggregateInput } from "../inputs/Wp_termsMinOrderByAggregateInput";
import { Wp_termsSumOrderByAggregateInput } from "../inputs/Wp_termsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_termsOrderByWithAggregationInput", {})
export class Wp_termsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  term_group?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_termsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_termsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_termsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_termsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_termsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_termsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_termsSumOrderByAggregateInput | undefined;
}
