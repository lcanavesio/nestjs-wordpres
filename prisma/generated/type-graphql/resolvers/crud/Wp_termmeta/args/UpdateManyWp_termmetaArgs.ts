import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaUpdateManyMutationInput } from "../../../inputs/Wp_termmetaUpdateManyMutationInput";
import { Wp_termmetaWhereInput } from "../../../inputs/Wp_termmetaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_termmetaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_termmetaWhereInput, {
    nullable: true
  })
  where?: Wp_termmetaWhereInput | undefined;
}
