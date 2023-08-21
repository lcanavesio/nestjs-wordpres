import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersOrderByWithRelationInput } from "../../../inputs/Wp_usersOrderByWithRelationInput";
import { Wp_usersWhereInput } from "../../../inputs/Wp_usersWhereInput";
import { Wp_usersWhereUniqueInput } from "../../../inputs/Wp_usersWhereUniqueInput";
import { Wp_usersScalarFieldEnum } from "../../../../enums/Wp_usersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersWhereInput, {
    nullable: true
  })
  where?: Wp_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_usersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_usersWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_usersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"ID" | "user_login" | "user_pass" | "user_nicename" | "user_email" | "user_url" | "user_registered" | "user_activation_key" | "user_status" | "display_name"> | undefined;
}
