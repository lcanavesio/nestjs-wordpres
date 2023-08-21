import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsWhereInput } from "../../../inputs/Wp_optionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsWhereInput, {
    nullable: true
  })
  where?: Wp_optionsWhereInput | undefined;
}
