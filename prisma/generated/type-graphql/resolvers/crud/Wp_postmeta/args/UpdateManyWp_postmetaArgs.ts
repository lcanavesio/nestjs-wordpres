import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaUpdateManyMutationInput } from "../../../inputs/Wp_postmetaUpdateManyMutationInput";
import { Wp_postmetaWhereInput } from "../../../inputs/Wp_postmetaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_postmetaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_postmetaWhereInput, {
    nullable: true
  })
  where?: Wp_postmetaWhereInput | undefined;
}
