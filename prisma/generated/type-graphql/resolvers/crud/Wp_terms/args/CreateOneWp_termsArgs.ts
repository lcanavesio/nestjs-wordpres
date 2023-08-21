import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsCreateInput } from "../../../inputs/Wp_termsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsCreateInput, {
    nullable: true
  })
  data?: Wp_termsCreateInput | undefined;
}
