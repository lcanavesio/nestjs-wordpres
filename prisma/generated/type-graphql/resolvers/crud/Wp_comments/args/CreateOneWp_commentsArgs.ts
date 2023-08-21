import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsCreateInput } from "../../../inputs/Wp_commentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsCreateInput, {
    nullable: false
  })
  data!: Wp_commentsCreateInput;
}
