import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaCreateInput } from "../../../inputs/Wp_commentmetaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaCreateInput, {
    nullable: true
  })
  data?: Wp_commentmetaCreateInput | undefined;
}
