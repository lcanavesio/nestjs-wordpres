import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksCreateInput } from "../../../inputs/Wp_linksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksCreateInput, {
    nullable: false
  })
  data!: Wp_linksCreateInput;
}
