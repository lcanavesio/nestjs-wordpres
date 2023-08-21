import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyWhereUniqueInput } from "../../../inputs/Wp_term_taxonomyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_term_taxonomyWhereUniqueInput;
}
