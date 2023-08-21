import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_relationshipsCreateInput } from "../../../inputs/Wp_term_relationshipsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneWp_term_relationshipsArgs {
  @TypeGraphQL.Field(_type => Wp_term_relationshipsCreateInput, {
    nullable: true
  })
  data?: Wp_term_relationshipsCreateInput | undefined;
}
