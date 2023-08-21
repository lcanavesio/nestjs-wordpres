import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsOrderByWithAggregationInput } from "../../../inputs/Wp_optionsOrderByWithAggregationInput";
import { Wp_optionsScalarWhereWithAggregatesInput } from "../../../inputs/Wp_optionsScalarWhereWithAggregatesInput";
import { Wp_optionsWhereInput } from "../../../inputs/Wp_optionsWhereInput";
import { Wp_optionsScalarFieldEnum } from "../../../../enums/Wp_optionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsWhereInput, {
    nullable: true
  })
  where?: Wp_optionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_optionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"option_id" | "option_name" | "option_value" | "autoload">;

  @TypeGraphQL.Field(_type => Wp_optionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_optionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
