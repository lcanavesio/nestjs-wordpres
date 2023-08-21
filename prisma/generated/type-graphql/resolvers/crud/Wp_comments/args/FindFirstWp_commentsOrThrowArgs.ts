import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsOrderByWithRelationInput } from "../../../inputs/Wp_commentsOrderByWithRelationInput";
import { Wp_commentsWhereInput } from "../../../inputs/Wp_commentsWhereInput";
import { Wp_commentsWhereUniqueInput } from "../../../inputs/Wp_commentsWhereUniqueInput";
import { Wp_commentsScalarFieldEnum } from "../../../../enums/Wp_commentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_commentsOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_commentsWhereInput, {
    nullable: true
  })
  where?: Wp_commentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_commentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_commentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"comment_ID" | "comment_post_ID" | "comment_author" | "comment_author_email" | "comment_author_url" | "comment_author_IP" | "comment_date" | "comment_date_gmt" | "comment_content" | "comment_karma" | "comment_approved" | "comment_agent" | "comment_type" | "comment_parent" | "user_id"> | undefined;
}
