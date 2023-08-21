import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksOrderByWithRelationInput } from "../../../inputs/Wp_linksOrderByWithRelationInput";
import { Wp_linksWhereInput } from "../../../inputs/Wp_linksWhereInput";
import { Wp_linksWhereUniqueInput } from "../../../inputs/Wp_linksWhereUniqueInput";
import { Wp_linksScalarFieldEnum } from "../../../../enums/Wp_linksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_linksOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_linksWhereInput, {
    nullable: true
  })
  where?: Wp_linksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_linksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_linksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_linksWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_linksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_linksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"link_id" | "link_url" | "link_name" | "link_image" | "link_target" | "link_description" | "link_visible" | "link_owner" | "link_rating" | "link_updated" | "link_rel" | "link_notes" | "link_rss"> | undefined;
}
