import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_relationshipsUpdateInput } from "../../../inputs/Wp_term_relationshipsUpdateInput";
import { Wp_term_relationshipsWhereUniqueInput } from "../../../inputs/Wp_term_relationshipsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_term_relationshipsArgs {
  @TypeGraphQL.Field(_type => Wp_term_relationshipsUpdateInput, {
    nullable: false
  })
  data!: Wp_term_relationshipsUpdateInput;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_term_relationshipsWhereUniqueInput;
}
