import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaCreateInput } from "../../../inputs/Wp_usermetaCreateInput";
import { Wp_usermetaUpdateInput } from "../../../inputs/Wp_usermetaUpdateInput";
import { Wp_usermetaWhereUniqueInput } from "../../../inputs/Wp_usermetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_usermetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_usermetaCreateInput, {
    nullable: false
  })
  create!: Wp_usermetaCreateInput;

  @TypeGraphQL.Field(_type => Wp_usermetaUpdateInput, {
    nullable: false
  })
  update!: Wp_usermetaUpdateInput;
}
