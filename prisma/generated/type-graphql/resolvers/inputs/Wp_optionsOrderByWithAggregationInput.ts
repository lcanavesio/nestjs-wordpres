import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_optionsAvgOrderByAggregateInput } from "../inputs/Wp_optionsAvgOrderByAggregateInput";
import { Wp_optionsCountOrderByAggregateInput } from "../inputs/Wp_optionsCountOrderByAggregateInput";
import { Wp_optionsMaxOrderByAggregateInput } from "../inputs/Wp_optionsMaxOrderByAggregateInput";
import { Wp_optionsMinOrderByAggregateInput } from "../inputs/Wp_optionsMinOrderByAggregateInput";
import { Wp_optionsSumOrderByAggregateInput } from "../inputs/Wp_optionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_optionsOrderByWithAggregationInput", {})
export class Wp_optionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  option_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  option_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  option_value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  autoload?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_optionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_optionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_optionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_optionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_optionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_optionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_optionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_optionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_optionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_optionsSumOrderByAggregateInput | undefined;
}
