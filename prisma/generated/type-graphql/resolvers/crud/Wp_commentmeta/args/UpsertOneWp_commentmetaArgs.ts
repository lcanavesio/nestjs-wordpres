import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaCreateInput } from "../../../inputs/Wp_commentmetaCreateInput";
import { Wp_commentmetaUpdateInput } from "../../../inputs/Wp_commentmetaUpdateInput";
import { Wp_commentmetaWhereUniqueInput } from "../../../inputs/Wp_commentmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_commentmetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_commentmetaCreateInput, {
    nullable: false
  })
  create!: Wp_commentmetaCreateInput;

  @TypeGraphQL.Field(_type => Wp_commentmetaUpdateInput, {
    nullable: false
  })
  update!: Wp_commentmetaUpdateInput;
}
