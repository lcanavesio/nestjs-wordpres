import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { Wp_usersWhereInput } from "../inputs/Wp_usersWhereInput";

@TypeGraphQL.InputType("Wp_usersWhereUniqueInput", {})
export class Wp_usersWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  ID?: bigint | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersWhereInput], {
    nullable: true
  })
  AND?: Wp_usersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersWhereInput], {
    nullable: true
  })
  OR?: Wp_usersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersWhereInput], {
    nullable: true
  })
  NOT?: Wp_usersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_login?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_pass?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_nicename?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  user_registered?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_activation_key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_status?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  display_name?: StringFilter | undefined;
}
