import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsOrderByWithAggregationInput } from "../../../inputs/Wp_termsOrderByWithAggregationInput";
import { Wp_termsScalarWhereWithAggregatesInput } from "../../../inputs/Wp_termsScalarWhereWithAggregatesInput";
import { Wp_termsWhereInput } from "../../../inputs/Wp_termsWhereInput";
import { Wp_termsScalarFieldEnum } from "../../../../enums/Wp_termsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsWhereInput, {
    nullable: true
  })
  where?: Wp_termsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_termsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_termsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"term_id" | "name" | "slug" | "term_group">;

  @TypeGraphQL.Field(_type => Wp_termsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_termsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
