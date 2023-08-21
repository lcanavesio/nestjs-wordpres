import * as TypeGraphQL from "type-graphql";

export enum Wp_commentsScalarFieldEnum {
  comment_ID = "comment_ID",
  comment_post_ID = "comment_post_ID",
  comment_author = "comment_author",
  comment_author_email = "comment_author_email",
  comment_author_url = "comment_author_url",
  comment_author_IP = "comment_author_IP",
  comment_date = "comment_date",
  comment_date_gmt = "comment_date_gmt",
  comment_content = "comment_content",
  comment_karma = "comment_karma",
  comment_approved = "comment_approved",
  comment_agent = "comment_agent",
  comment_type = "comment_type",
  comment_parent = "comment_parent",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(Wp_commentsScalarFieldEnum, {
  name: "Wp_commentsScalarFieldEnum",
  description: undefined,
});
