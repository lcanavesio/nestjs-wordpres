import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsCreateManyInput } from "../../../inputs/Wp_postsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_postsArgs {
  @TypeGraphQL.Field(_type => [Wp_postsCreateManyInput], {
    nullable: false
  })
  data!: Wp_postsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
