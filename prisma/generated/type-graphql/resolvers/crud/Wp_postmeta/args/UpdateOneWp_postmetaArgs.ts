import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaUpdateInput } from "../../../inputs/Wp_postmetaUpdateInput";
import { Wp_postmetaWhereUniqueInput } from "../../../inputs/Wp_postmetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_postmetaArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaUpdateInput, {
    nullable: false
  })
  data!: Wp_postmetaUpdateInput;

  @TypeGraphQL.Field(_type => Wp_postmetaWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_postmetaWhereUniqueInput;
}
