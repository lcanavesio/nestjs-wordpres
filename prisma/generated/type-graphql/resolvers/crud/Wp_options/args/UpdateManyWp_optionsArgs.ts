import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsUpdateManyMutationInput } from "../../../inputs/Wp_optionsUpdateManyMutationInput";
import { Wp_optionsWhereInput } from "../../../inputs/Wp_optionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_optionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_optionsWhereInput, {
    nullable: true
  })
  where?: Wp_optionsWhereInput | undefined;
}
