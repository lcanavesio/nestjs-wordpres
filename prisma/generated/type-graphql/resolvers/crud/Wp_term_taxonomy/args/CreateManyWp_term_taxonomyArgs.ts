import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyCreateManyInput } from "../../../inputs/Wp_term_taxonomyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => [Wp_term_taxonomyCreateManyInput], {
    nullable: false
  })
  data!: Wp_term_taxonomyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
