import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaCreateInput } from "../../../inputs/Wp_postmetaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaCreateInput, {
    nullable: true
  })
  data?: Wp_postmetaCreateInput | undefined;
}
