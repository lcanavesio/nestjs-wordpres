import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_postsAvgOrderByAggregateInput } from "../inputs/Wp_postsAvgOrderByAggregateInput";
import { Wp_postsCountOrderByAggregateInput } from "../inputs/Wp_postsCountOrderByAggregateInput";
import { Wp_postsMaxOrderByAggregateInput } from "../inputs/Wp_postsMaxOrderByAggregateInput";
import { Wp_postsMinOrderByAggregateInput } from "../inputs/Wp_postsMinOrderByAggregateInput";
import { Wp_postsSumOrderByAggregateInput } from "../inputs/Wp_postsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_postsOrderByWithAggregationInput", {})
export class Wp_postsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_date_gmt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_excerpt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ping_status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  to_ping?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pinged?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_modified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_modified_gmt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_content_filtered?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_parent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  menu_order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  post_mime_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_postsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_postsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_postsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_postsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_postsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_postsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_postsSumOrderByAggregateInput | undefined;
}
