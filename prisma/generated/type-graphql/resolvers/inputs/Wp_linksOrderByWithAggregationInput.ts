import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_linksAvgOrderByAggregateInput } from "../inputs/Wp_linksAvgOrderByAggregateInput";
import { Wp_linksCountOrderByAggregateInput } from "../inputs/Wp_linksCountOrderByAggregateInput";
import { Wp_linksMaxOrderByAggregateInput } from "../inputs/Wp_linksMaxOrderByAggregateInput";
import { Wp_linksMinOrderByAggregateInput } from "../inputs/Wp_linksMinOrderByAggregateInput";
import { Wp_linksSumOrderByAggregateInput } from "../inputs/Wp_linksSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_linksOrderByWithAggregationInput", {})
export class Wp_linksOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_target?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_visible?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_owner?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_rel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link_rss?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_linksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_linksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_linksAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_linksAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_linksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_linksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_linksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_linksMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_linksSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_linksSumOrderByAggregateInput | undefined;
}
