import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersWhereInput } from "../../../inputs/Wp_usersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersWhereInput, {
    nullable: true
  })
  where?: Wp_usersWhereInput | undefined;
}
