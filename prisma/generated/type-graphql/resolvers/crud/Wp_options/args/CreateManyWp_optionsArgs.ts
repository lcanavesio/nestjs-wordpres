import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsCreateManyInput } from "../../../inputs/Wp_optionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_optionsArgs {
  @TypeGraphQL.Field(_type => [Wp_optionsCreateManyInput], {
    nullable: false
  })
  data!: Wp_optionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
