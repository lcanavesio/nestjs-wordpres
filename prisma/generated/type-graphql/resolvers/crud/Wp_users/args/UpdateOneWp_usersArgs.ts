import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersUpdateInput } from "../../../inputs/Wp_usersUpdateInput";
import { Wp_usersWhereUniqueInput } from "../../../inputs/Wp_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersUpdateInput, {
    nullable: false
  })
  data!: Wp_usersUpdateInput;

  @TypeGraphQL.Field(_type => Wp_usersWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_usersWhereUniqueInput;
}
