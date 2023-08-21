import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsCreateManyInput } from "../../../inputs/Wp_termsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_termsArgs {
  @TypeGraphQL.Field(_type => [Wp_termsCreateManyInput], {
    nullable: false
  })
  data!: Wp_termsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
