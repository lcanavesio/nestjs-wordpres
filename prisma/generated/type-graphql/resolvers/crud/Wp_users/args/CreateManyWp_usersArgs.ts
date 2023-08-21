import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersCreateManyInput } from "../../../inputs/Wp_usersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_usersArgs {
  @TypeGraphQL.Field(_type => [Wp_usersCreateManyInput], {
    nullable: false
  })
  data!: Wp_usersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
