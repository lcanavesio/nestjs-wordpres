import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaOrderByWithAggregationInput } from "../../../inputs/Wp_usermetaOrderByWithAggregationInput";
import { Wp_usermetaScalarWhereWithAggregatesInput } from "../../../inputs/Wp_usermetaScalarWhereWithAggregatesInput";
import { Wp_usermetaWhereInput } from "../../../inputs/Wp_usermetaWhereInput";
import { Wp_usermetaScalarFieldEnum } from "../../../../enums/Wp_usermetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaWhereInput, {
    nullable: true
  })
  where?: Wp_usermetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_usermetaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"umeta_id" | "user_id" | "meta_key" | "meta_value">;

  @TypeGraphQL.Field(_type => Wp_usermetaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_usermetaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
