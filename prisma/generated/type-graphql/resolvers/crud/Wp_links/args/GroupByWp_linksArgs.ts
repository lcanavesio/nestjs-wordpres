import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksOrderByWithAggregationInput } from "../../../inputs/Wp_linksOrderByWithAggregationInput";
import { Wp_linksScalarWhereWithAggregatesInput } from "../../../inputs/Wp_linksScalarWhereWithAggregatesInput";
import { Wp_linksWhereInput } from "../../../inputs/Wp_linksWhereInput";
import { Wp_linksScalarFieldEnum } from "../../../../enums/Wp_linksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksWhereInput, {
    nullable: true
  })
  where?: Wp_linksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_linksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_linksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_linksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"link_id" | "link_url" | "link_name" | "link_image" | "link_target" | "link_description" | "link_visible" | "link_owner" | "link_rating" | "link_updated" | "link_rel" | "link_notes" | "link_rss">;

  @TypeGraphQL.Field(_type => Wp_linksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_linksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
