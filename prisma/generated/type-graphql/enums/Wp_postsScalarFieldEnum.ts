import * as TypeGraphQL from "type-graphql";

export enum Wp_postsScalarFieldEnum {
  ID = "ID",
  post_author = "post_author",
  post_date = "post_date",
  post_date_gmt = "post_date_gmt",
  post_content = "post_content",
  post_title = "post_title",
  post_excerpt = "post_excerpt",
  post_status = "post_status",
  comment_status = "comment_status",
  ping_status = "ping_status",
  post_password = "post_password",
  post_name = "post_name",
  to_ping = "to_ping",
  pinged = "pinged",
  post_modified = "post_modified",
  post_modified_gmt = "post_modified_gmt",
  post_content_filtered = "post_content_filtered",
  post_parent = "post_parent",
  guid = "guid",
  menu_order = "menu_order",
  post_type = "post_type",
  post_mime_type = "post_mime_type",
  comment_count = "comment_count"
}
TypeGraphQL.registerEnumType(Wp_postsScalarFieldEnum, {
  name: "Wp_postsScalarFieldEnum",
  description: undefined,
});
