import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaWhereInput } from "../../../inputs/Wp_termmetaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaWhereInput, {
    nullable: true
  })
  where?: Wp_termmetaWhereInput | undefined;
}
