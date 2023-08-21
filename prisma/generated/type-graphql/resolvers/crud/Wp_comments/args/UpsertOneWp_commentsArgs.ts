import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsCreateInput } from "../../../inputs/Wp_commentsCreateInput";
import { Wp_commentsUpdateInput } from "../../../inputs/Wp_commentsUpdateInput";
import { Wp_commentsWhereUniqueInput } from "../../../inputs/Wp_commentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_commentsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_commentsCreateInput, {
    nullable: false
  })
  create!: Wp_commentsCreateInput;

  @TypeGraphQL.Field(_type => Wp_commentsUpdateInput, {
    nullable: false
  })
  update!: Wp_commentsUpdateInput;
}
