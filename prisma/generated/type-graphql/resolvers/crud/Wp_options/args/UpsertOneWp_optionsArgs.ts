import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsCreateInput } from "../../../inputs/Wp_optionsCreateInput";
import { Wp_optionsUpdateInput } from "../../../inputs/Wp_optionsUpdateInput";
import { Wp_optionsWhereUniqueInput } from "../../../inputs/Wp_optionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_optionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_optionsCreateInput, {
    nullable: false
  })
  create!: Wp_optionsCreateInput;

  @TypeGraphQL.Field(_type => Wp_optionsUpdateInput, {
    nullable: false
  })
  update!: Wp_optionsUpdateInput;
}
