import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaWhereUniqueInput } from "../../../inputs/Wp_postmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postmetaWhereUniqueInput;
}
