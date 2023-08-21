import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaCreateInput } from "../../../inputs/Wp_usermetaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaCreateInput, {
    nullable: true
  })
  data?: Wp_usermetaCreateInput | undefined;
}
