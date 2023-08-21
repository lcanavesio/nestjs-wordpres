import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaWhereUniqueInput } from "../../../inputs/Wp_usermetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_usermetaOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_usermetaWhereUniqueInput;
}
