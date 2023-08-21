import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksUpdateManyMutationInput } from "../../../inputs/Wp_linksUpdateManyMutationInput";
import { Wp_linksWhereInput } from "../../../inputs/Wp_linksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_linksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_linksWhereInput, {
    nullable: true
  })
  where?: Wp_linksWhereInput | undefined;
}
