import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaUpdateInput } from "../../../inputs/Wp_commentmetaUpdateInput";
import { Wp_commentmetaWhereUniqueInput } from "../../../inputs/Wp_commentmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaUpdateInput, {
    nullable: false
  })
  data!: Wp_commentmetaUpdateInput;

  @TypeGraphQL.Field(_type => Wp_commentmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_commentmetaWhereUniqueInput;
}
