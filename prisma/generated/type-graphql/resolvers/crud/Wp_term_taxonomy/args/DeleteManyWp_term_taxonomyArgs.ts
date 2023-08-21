import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyWhereInput } from "../../../inputs/Wp_term_taxonomyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereInput, {
    nullable: true
  })
  where?: Wp_term_taxonomyWhereInput | undefined;
}
