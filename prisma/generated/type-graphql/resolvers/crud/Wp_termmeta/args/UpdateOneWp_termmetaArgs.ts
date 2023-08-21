import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaUpdateInput } from "../../../inputs/Wp_termmetaUpdateInput";
import { Wp_termmetaWhereUniqueInput } from "../../../inputs/Wp_termmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_termmetaArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaUpdateInput, {
    nullable: false
  })
  data!: Wp_termmetaUpdateInput;

  @TypeGraphQL.Field(_type => Wp_termmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_termmetaWhereUniqueInput;
}
