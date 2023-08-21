import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaCreateInput } from "../../../inputs/Wp_postmetaCreateInput";
import { Wp_postmetaUpdateInput } from "../../../inputs/Wp_postmetaUpdateInput";
import { Wp_postmetaWhereUniqueInput } from "../../../inputs/Wp_postmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postmetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_postmetaCreateInput, {
    nullable: false
  })
  create!: Wp_postmetaCreateInput;

  @TypeGraphQL.Field(_type => Wp_postmetaUpdateInput, {
    nullable: false
  })
  update!: Wp_postmetaUpdateInput;
}
