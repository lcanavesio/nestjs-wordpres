import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsUpdateInput } from "../../../inputs/Wp_optionsUpdateInput";
import { Wp_optionsWhereUniqueInput } from "../../../inputs/Wp_optionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsUpdateInput, {
    nullable: false
  })
  data!: Wp_optionsUpdateInput;

  @TypeGraphQL.Field(_type => Wp_optionsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_optionsWhereUniqueInput;
}
