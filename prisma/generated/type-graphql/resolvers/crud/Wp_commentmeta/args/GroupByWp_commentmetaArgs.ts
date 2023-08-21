import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaOrderByWithAggregationInput } from "../../../inputs/Wp_commentmetaOrderByWithAggregationInput";
import { Wp_commentmetaScalarWhereWithAggregatesInput } from "../../../inputs/Wp_commentmetaScalarWhereWithAggregatesInput";
import { Wp_commentmetaWhereInput } from "../../../inputs/Wp_commentmetaWhereInput";
import { Wp_commentmetaScalarFieldEnum } from "../../../../enums/Wp_commentmetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaWhereInput, {
    nullable: true
  })
  where?: Wp_commentmetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_commentmetaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"meta_id" | "comment_id" | "meta_key" | "meta_value">;

  @TypeGraphQL.Field(_type => Wp_commentmetaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_commentmetaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
