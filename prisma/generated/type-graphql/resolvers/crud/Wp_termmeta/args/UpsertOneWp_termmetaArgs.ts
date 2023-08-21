import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaCreateInput } from "../../../inputs/Wp_termmetaCreateInput";
import { Wp_termmetaUpdateInput } from "../../../inputs/Wp_termmetaUpdateInput";
import { Wp_termmetaWhereUniqueInput } from "../../../inputs/Wp_termmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_termmetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_termmetaCreateInput, {
    nullable: false
  })
  create!: Wp_termmetaCreateInput;

  @TypeGraphQL.Field(_type => Wp_termmetaUpdateInput, {
    nullable: false
  })
  update!: Wp_termmetaUpdateInput;
}
