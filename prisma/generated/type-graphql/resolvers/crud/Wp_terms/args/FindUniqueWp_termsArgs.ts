import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsWhereUniqueInput } from "../../../inputs/Wp_termsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_termsWhereUniqueInput;
}
