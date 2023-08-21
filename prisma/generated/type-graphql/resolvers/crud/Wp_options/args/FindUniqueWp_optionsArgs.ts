import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsWhereUniqueInput } from "../../../inputs/Wp_optionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_optionsWhereUniqueInput;
}
