import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaCreateManyInput } from "../../../inputs/Wp_usermetaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_usermetaArgs {
  @TypeGraphQL.Field(_type => [Wp_usermetaCreateManyInput], {
    nullable: false
  })
  data!: Wp_usermetaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
