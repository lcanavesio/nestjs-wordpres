import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsOrderByWithRelationInput } from "../../../inputs/Wp_postsOrderByWithRelationInput";
import { Wp_postsWhereInput } from "../../../inputs/Wp_postsWhereInput";
import { Wp_postsWhereUniqueInput } from "../../../inputs/Wp_postsWhereUniqueInput";
import { Wp_postsScalarFieldEnum } from "../../../../enums/Wp_postsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsWhereInput, {
    nullable: true
  })
  where?: Wp_postsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_postsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_postsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_postsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_postsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_postsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"ID" | "post_author" | "post_date" | "post_date_gmt" | "post_content" | "post_title" | "post_excerpt" | "post_status" | "comment_status" | "ping_status" | "post_password" | "post_name" | "to_ping" | "pinged" | "post_modified" | "post_modified_gmt" | "post_content_filtered" | "post_parent" | "guid" | "menu_order" | "post_type" | "post_mime_type" | "comment_count"> | undefined;
}
