import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsUpdateManyMutationInput } from "../../../inputs/Wp_termsUpdateManyMutationInput";
import { Wp_termsWhereInput } from "../../../inputs/Wp_termsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_termsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_termsWhereInput, {
    nullable: true
  })
  where?: Wp_termsWhereInput | undefined;
}
