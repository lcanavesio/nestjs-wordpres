import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsCreateInput } from "../../../inputs/Wp_postsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsCreateInput, {
    nullable: false
  })
  data!: Wp_postsCreateInput;
}
