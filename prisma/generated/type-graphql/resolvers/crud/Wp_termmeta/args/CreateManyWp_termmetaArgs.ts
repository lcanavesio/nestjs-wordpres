import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaCreateManyInput } from "../../../inputs/Wp_termmetaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyWp_termmetaArgs {
  @TypeGraphQL.Field(_type => [Wp_termmetaCreateManyInput], {
    nullable: false
  })
  data!: Wp_termmetaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
