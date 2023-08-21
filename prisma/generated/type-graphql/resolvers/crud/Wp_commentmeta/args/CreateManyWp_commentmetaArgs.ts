import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaCreateManyInput } from "../../../inputs/Wp_commentmetaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => [Wp_commentmetaCreateManyInput], {
    nullable: false
  })
  data!: Wp_commentmetaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
