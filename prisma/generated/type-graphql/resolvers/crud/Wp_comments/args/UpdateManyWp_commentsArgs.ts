import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsUpdateManyMutationInput } from "../../../inputs/Wp_commentsUpdateManyMutationInput";
import { Wp_commentsWhereInput } from "../../../inputs/Wp_commentsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Wp_commentsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Wp_commentsWhereInput, {
    nullable: true
  })
  where?: Wp_commentsWhereInput | undefined;
}
