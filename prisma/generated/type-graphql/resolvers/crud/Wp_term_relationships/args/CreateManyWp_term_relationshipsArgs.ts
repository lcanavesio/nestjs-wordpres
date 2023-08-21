import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_relationshipsCreateManyInput } from "../../../inputs/Wp_term_relationshipsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_term_relationshipsArgs {
  @TypeGraphQL.Field(_type => [Wp_term_relationshipsCreateManyInput], {
    nullable: false
  })
  data!: Wp_term_relationshipsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
