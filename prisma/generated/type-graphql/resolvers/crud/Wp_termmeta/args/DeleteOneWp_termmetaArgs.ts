import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaWhereUniqueInput } from "../../../inputs/Wp_termmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_termmetaWhereUniqueInput;
}
