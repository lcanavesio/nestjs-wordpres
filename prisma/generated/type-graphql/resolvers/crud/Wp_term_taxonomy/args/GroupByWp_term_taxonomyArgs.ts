import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyOrderByWithAggregationInput } from "../../../inputs/Wp_term_taxonomyOrderByWithAggregationInput";
import { Wp_term_taxonomyScalarWhereWithAggregatesInput } from "../../../inputs/Wp_term_taxonomyScalarWhereWithAggregatesInput";
import { Wp_term_taxonomyWhereInput } from "../../../inputs/Wp_term_taxonomyWhereInput";
import { Wp_term_taxonomyScalarFieldEnum } from "../../../../enums/Wp_term_taxonomyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereInput, {
    nullable: true
  })
  where?: Wp_term_taxonomyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_term_taxonomyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"term_taxonomy_id" | "term_id" | "taxonomy" | "description" | "parent" | "count">;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_term_taxonomyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
