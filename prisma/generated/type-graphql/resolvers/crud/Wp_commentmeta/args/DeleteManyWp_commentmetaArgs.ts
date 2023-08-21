import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaWhereInput } from "../../../inputs/Wp_commentmetaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaWhereInput, {
    nullable: true
  })
  where?: Wp_commentmetaWhereInput | undefined;
}
