import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersCreateInput } from "../../../inputs/Wp_usersCreateInput";
import { Wp_usersUpdateInput } from "../../../inputs/Wp_usersUpdateInput";
import { Wp_usersWhereUniqueInput } from "../../../inputs/Wp_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_usersWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_usersCreateInput, {
    nullable: false
  })
  create!: Wp_usersCreateInput;

  @TypeGraphQL.Field(_type => Wp_usersUpdateInput, {
    nullable: false
  })
  update!: Wp_usersUpdateInput;
}
