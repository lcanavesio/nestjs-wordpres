import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaWhereUniqueInput } from "../../../inputs/Wp_postmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_postmetaOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postmetaWhereUniqueInput;
}
