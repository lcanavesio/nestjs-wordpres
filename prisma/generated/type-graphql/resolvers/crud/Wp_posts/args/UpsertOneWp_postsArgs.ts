import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsCreateInput } from "../../../inputs/Wp_postsCreateInput";
import { Wp_postsUpdateInput } from "../../../inputs/Wp_postsUpdateInput";
import { Wp_postsWhereUniqueInput } from "../../../inputs/Wp_postsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_postsCreateInput, {
    nullable: false
  })
  create!: Wp_postsCreateInput;

  @TypeGraphQL.Field(_type => Wp_postsUpdateInput, {
    nullable: false
  })
  update!: Wp_postsUpdateInput;
}
