import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksCreateInput } from "../../../inputs/Wp_linksCreateInput";
import { Wp_linksUpdateInput } from "../../../inputs/Wp_linksUpdateInput";
import { Wp_linksWhereUniqueInput } from "../../../inputs/Wp_linksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_linksWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_linksCreateInput, {
    nullable: false
  })
  create!: Wp_linksCreateInput;

  @TypeGraphQL.Field(_type => Wp_linksUpdateInput, {
    nullable: false
  })
  update!: Wp_linksUpdateInput;
}
