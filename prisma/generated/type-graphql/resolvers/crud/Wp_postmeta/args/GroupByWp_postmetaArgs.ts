import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaOrderByWithAggregationInput } from "../../../inputs/Wp_postmetaOrderByWithAggregationInput";
import { Wp_postmetaScalarWhereWithAggregatesInput } from "../../../inputs/Wp_postmetaScalarWhereWithAggregatesInput";
import { Wp_postmetaWhereInput } from "../../../inputs/Wp_postmetaWhereInput";
import { Wp_postmetaScalarFieldEnum } from "../../../../enums/Wp_postmetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaWhereInput, {
    nullable: true
  })
  where?: Wp_postmetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_postmetaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"meta_id" | "post_id" | "meta_key" | "meta_value">;

  @TypeGraphQL.Field(_type => Wp_postmetaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_postmetaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
