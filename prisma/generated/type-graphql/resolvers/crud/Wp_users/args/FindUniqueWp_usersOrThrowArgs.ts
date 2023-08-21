import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersWhereUniqueInput } from "../../../inputs/Wp_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_usersOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_usersWhereUniqueInput;
}
