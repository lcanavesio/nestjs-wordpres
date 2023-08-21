import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyCreateInput } from "../../../inputs/Wp_term_taxonomyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyCreateInput, {
    nullable: false
  })
  data!: Wp_term_taxonomyCreateInput;
}
