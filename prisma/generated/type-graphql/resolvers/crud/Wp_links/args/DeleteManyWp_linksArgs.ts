import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_linksWhereInput } from "../../../inputs/Wp_linksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_linksArgs {
  @TypeGraphQL.Field(_type => Wp_linksWhereInput, {
    nullable: true
  })
  where?: Wp_linksWhereInput | undefined;
}
