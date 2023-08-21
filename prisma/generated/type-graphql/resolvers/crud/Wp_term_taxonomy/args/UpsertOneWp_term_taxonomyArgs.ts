import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyCreateInput } from "../../../inputs/Wp_term_taxonomyCreateInput";
import { Wp_term_taxonomyUpdateInput } from "../../../inputs/Wp_term_taxonomyUpdateInput";
import { Wp_term_taxonomyWhereUniqueInput } from "../../../inputs/Wp_term_taxonomyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_term_taxonomyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyCreateInput, {
    nullable: false
  })
  create!: Wp_term_taxonomyCreateInput;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyUpdateInput, {
    nullable: false
  })
  update!: Wp_term_taxonomyUpdateInput;
}
