import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksWhereUniqueInput } from "../../../inputs/Wp_linksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_linksWhereUniqueInput;
}
