import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaWhereUniqueInput } from "../../../inputs/Wp_commentmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_commentmetaWhereUniqueInput;
}
