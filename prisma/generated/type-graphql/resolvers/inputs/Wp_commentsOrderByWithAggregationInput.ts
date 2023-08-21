import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_commentsAvgOrderByAggregateInput } from "../inputs/Wp_commentsAvgOrderByAggregateInput";
import { Wp_commentsCountOrderByAggregateInput } from "../inputs/Wp_commentsCountOrderByAggregateInput";
import { Wp_commentsMaxOrderByAggregateInput } from "../inputs/Wp_commentsMaxOrderByAggregateInput";
import { Wp_commentsMinOrderByAggregateInput } from "../inputs/Wp_commentsMinOrderByAggregateInput";
import { Wp_commentsSumOrderByAggregateInput } from "../inputs/Wp_commentsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_commentsOrderByWithAggregationInput", {})
export class Wp_commentsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_ID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_post_ID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_author_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_author_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_author_IP?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_date_gmt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_karma?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_approved?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_agent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comment_parent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_commentsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_commentsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_commentsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_commentsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_commentsSumOrderByAggregateInput | undefined;
}
