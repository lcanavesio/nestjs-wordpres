import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaCreateInput } from "../../../inputs/Wp_termmetaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaCreateInput, {
    nullable: true
  })
  data?: Wp_termmetaCreateInput | undefined;
}
