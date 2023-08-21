import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersCreateInput } from "../../../inputs/Wp_usersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersCreateInput, {
    nullable: true
  })
  data?: Wp_usersCreateInput | undefined;
}
