import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsWhereUniqueInput } from "../../../inputs/Wp_postsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postsWhereUniqueInput;
}
