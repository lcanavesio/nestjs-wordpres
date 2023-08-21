import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaOrderByWithAggregationInput } from "../../../inputs/Wp_termmetaOrderByWithAggregationInput";
import { Wp_termmetaScalarWhereWithAggregatesInput } from "../../../inputs/Wp_termmetaScalarWhereWithAggregatesInput";
import { Wp_termmetaWhereInput } from "../../../inputs/Wp_termmetaWhereInput";
import { Wp_termmetaScalarFieldEnum } from "../../../../enums/Wp_termmetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaWhereInput, {
    nullable: true
  })
  where?: Wp_termmetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_termmetaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"meta_id" | "term_id" | "meta_key" | "meta_value">;

  @TypeGraphQL.Field(_type => Wp_termmetaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_termmetaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
