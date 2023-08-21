import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksCreateManyInput } from "../../../inputs/Wp_linksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_linksArgs {
  @TypeGraphQL.Field(_type => [Wp_linksCreateManyInput], {
    nullable: false
  })
  data!: Wp_linksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
