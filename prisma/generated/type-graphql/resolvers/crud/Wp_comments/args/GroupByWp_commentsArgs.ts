import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsOrderByWithAggregationInput } from "../../../inputs/Wp_commentsOrderByWithAggregationInput";
import { Wp_commentsScalarWhereWithAggregatesInput } from "../../../inputs/Wp_commentsScalarWhereWithAggregatesInput";
import { Wp_commentsWhereInput } from "../../../inputs/Wp_commentsWhereInput";
import { Wp_commentsScalarFieldEnum } from "../../../../enums/Wp_commentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsWhereInput, {
    nullable: true
  })
  where?: Wp_commentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_commentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"comment_ID" | "comment_post_ID" | "comment_author" | "comment_author_email" | "comment_author_url" | "comment_author_IP" | "comment_date" | "comment_date_gmt" | "comment_content" | "comment_karma" | "comment_approved" | "comment_agent" | "comment_type" | "comment_parent" | "user_id">;

  @TypeGraphQL.Field(_type => Wp_commentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_commentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
