import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaUpdateManyMutationInput } from "../../../inputs/Wp_commentmetaUpdateManyMutationInput";
import { Wp_commentmetaWhereInput } from "../../../inputs/Wp_commentmetaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_commentmetaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_commentmetaWhereInput, {
    nullable: true
  })
  where?: Wp_commentmetaWhereInput | undefined;
}
