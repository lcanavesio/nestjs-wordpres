import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsWhereInput } from "../../../inputs/Wp_termsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsWhereInput, {
    nullable: true
  })
  where?: Wp_termsWhereInput | undefined;
}
