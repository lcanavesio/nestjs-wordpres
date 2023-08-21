import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersUpdateManyMutationInput } from "../../../inputs/Wp_usersUpdateManyMutationInput";
import { Wp_usersWhereInput } from "../../../inputs/Wp_usersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_usersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_usersWhereInput, {
    nullable: true
  })
  where?: Wp_usersWhereInput | undefined;
}
