import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsUpdateManyMutationInput } from "../../../inputs/Wp_postsUpdateManyMutationInput";
import { Wp_postsWhereInput } from "../../../inputs/Wp_postsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_postsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_postsWhereInput, {
    nullable: true
  })
  where?: Wp_postsWhereInput | undefined;
}
