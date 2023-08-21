import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsUpdateInput } from "../../../inputs/Wp_postsUpdateInput";
import { Wp_postsWhereUniqueInput } from "../../../inputs/Wp_postsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsUpdateInput, {
    nullable: false
  })
  data!: Wp_postsUpdateInput;

  @TypeGraphQL.Field(_type => Wp_postsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postsWhereUniqueInput;
}
