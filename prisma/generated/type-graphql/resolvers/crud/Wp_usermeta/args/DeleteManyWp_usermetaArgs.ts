import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaWhereInput } from "../../../inputs/Wp_usermetaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaWhereInput, {
    nullable: true
  })
  where?: Wp_usermetaWhereInput | undefined;
}
