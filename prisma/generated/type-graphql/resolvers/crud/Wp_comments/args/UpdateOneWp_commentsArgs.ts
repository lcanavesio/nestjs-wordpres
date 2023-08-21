import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsUpdateInput } from "../../../inputs/Wp_commentsUpdateInput";
import { Wp_commentsWhereUniqueInput } from "../../../inputs/Wp_commentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsUpdateInput, {
    nullable: false
  })
  data!: Wp_commentsUpdateInput;

  @TypeGraphQL.Field(_type => Wp_commentsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_commentsWhereUniqueInput;
}
