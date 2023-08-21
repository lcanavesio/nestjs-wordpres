import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_relationshipsOrderByWithAggregationInput } from "../../../inputs/Wp_term_relationshipsOrderByWithAggregationInput";
import { Wp_term_relationshipsScalarWhereWithAggregatesInput } from "../../../inputs/Wp_term_relationshipsScalarWhereWithAggregatesInput";
import { Wp_term_relationshipsWhereInput } from "../../../inputs/Wp_term_relationshipsWhereInput";
import { Wp_term_relationshipsScalarFieldEnum } from "../../../../enums/Wp_term_relationshipsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_term_relationshipsArgs {
  @TypeGraphQL.Field(_type => Wp_term_relationshipsWhereInput, {
    nullable: true
  })
  where?: Wp_term_relationshipsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_term_relationshipsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"object_id" | "term_taxonomy_id" | "term_order">;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_term_relationshipsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
