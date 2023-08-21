import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaCreateManyInput } from "../../../inputs/Wp_postmetaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_postmetaArgs {
  @TypeGraphQL.Field(_type => [Wp_postmetaCreateManyInput], {
    nullable: false
  })
  data!: Wp_postmetaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
