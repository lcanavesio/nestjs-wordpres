import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaUpdateManyMutationInput } from "../../../inputs/Wp_usermetaUpdateManyMutationInput";
import { Wp_usermetaWhereInput } from "../../../inputs/Wp_usermetaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_usermetaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_usermetaWhereInput, {
    nullable: true
  })
  where?: Wp_usermetaWhereInput | undefined;
}
