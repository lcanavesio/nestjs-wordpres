import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_relationshipsWhereInput } from "../../../inputs/Wp_term_relationshipsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_term_relationshipsArgs {
  @TypeGraphQL.Field(_type => Wp_term_relationshipsWhereInput, {
    nullable: true
  })
  where?: Wp_term_relationshipsWhereInput | undefined;
}
