import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsWhereInput } from "../../../inputs/Wp_commentsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsWhereInput, {
    nullable: true
  })
  where?: Wp_commentsWhereInput | undefined;
}
