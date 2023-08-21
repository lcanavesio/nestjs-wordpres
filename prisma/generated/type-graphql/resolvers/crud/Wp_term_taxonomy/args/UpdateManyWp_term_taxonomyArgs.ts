import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyUpdateManyMutationInput } from "../../../inputs/Wp_term_taxonomyUpdateManyMutationInput";
import { Wp_term_taxonomyWhereInput } from "../../../inputs/Wp_term_taxonomyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_term_taxonomyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereInput, {
    nullable: true
  })
  where?: Wp_term_taxonomyWhereInput | undefined;
}
