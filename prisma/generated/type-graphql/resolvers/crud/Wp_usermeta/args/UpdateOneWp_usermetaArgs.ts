import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaUpdateInput } from "../../../inputs/Wp_usermetaUpdateInput";
import { Wp_usermetaWhereUniqueInput } from "../../../inputs/Wp_usermetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaUpdateInput, {
    nullable: false
  })
  data!: Wp_usermetaUpdateInput;

  @TypeGraphQL.Field(_type => Wp_usermetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_usermetaWhereUniqueInput;
}
