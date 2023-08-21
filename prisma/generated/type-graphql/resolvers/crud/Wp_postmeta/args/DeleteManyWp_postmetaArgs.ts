import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaWhereInput } from "../../../inputs/Wp_postmetaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaWhereInput, {
    nullable: true
  })
  where?: Wp_postmetaWhereInput | undefined;
}
