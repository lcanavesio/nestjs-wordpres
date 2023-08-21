import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersOrderByWithAggregationInput } from "../../../inputs/Wp_usersOrderByWithAggregationInput";
import { Wp_usersScalarWhereWithAggregatesInput } from "../../../inputs/Wp_usersScalarWhereWithAggregatesInput";
import { Wp_usersWhereInput } from "../../../inputs/Wp_usersWhereInput";
import { Wp_usersScalarFieldEnum } from "../../../../enums/Wp_usersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersWhereInput, {
    nullable: true
  })
  where?: Wp_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Wp_usersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"ID" | "user_login" | "user_pass" | "user_nicename" | "user_email" | "user_url" | "user_registered" | "user_activation_key" | "user_status" | "display_name">;

  @TypeGraphQL.Field(_type => Wp_usersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Wp_usersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
