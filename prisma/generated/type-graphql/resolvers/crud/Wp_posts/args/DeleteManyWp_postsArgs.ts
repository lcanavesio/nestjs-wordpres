import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsWhereInput } from "../../../inputs/Wp_postsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsWhereInput, {
    nullable: true
  })
  where?: Wp_postsWhereInput | undefined;
}
