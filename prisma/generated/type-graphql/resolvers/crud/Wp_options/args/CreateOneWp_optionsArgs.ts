import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsCreateInput } from "../../../inputs/Wp_optionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsCreateInput, {
    nullable: false
  })
  data!: Wp_optionsCreateInput;
}
