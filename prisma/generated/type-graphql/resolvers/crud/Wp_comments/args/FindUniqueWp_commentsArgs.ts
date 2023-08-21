import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsWhereUniqueInput } from "../../../inputs/Wp_commentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_commentsWhereUniqueInput;
}
