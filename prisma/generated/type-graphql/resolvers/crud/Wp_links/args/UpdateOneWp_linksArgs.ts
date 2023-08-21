import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksUpdateInput } from "../../../inputs/Wp_linksUpdateInput";
import { Wp_linksWhereUniqueInput } from "../../../inputs/Wp_linksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksUpdateInput, {
    nullable: false
  })
  data!: Wp_linksUpdateInput;

  @TypeGraphQL.Field(_type => Wp_linksWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_linksWhereUniqueInput;
}
