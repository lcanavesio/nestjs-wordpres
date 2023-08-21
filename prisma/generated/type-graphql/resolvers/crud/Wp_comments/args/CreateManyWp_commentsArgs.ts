import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsCreateManyInput } from "../../../inputs/Wp_commentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_commentsArgs {
  @TypeGraphQL.Field(_type => [Wp_commentsCreateManyInput], {
    nullable: false
  })
  data!: Wp_commentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
