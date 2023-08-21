import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_usersAvgOrderByAggregateInput } from "../inputs/Wp_usersAvgOrderByAggregateInput";
import { Wp_usersCountOrderByAggregateInput } from "../inputs/Wp_usersCountOrderByAggregateInput";
import { Wp_usersMaxOrderByAggregateInput } from "../inputs/Wp_usersMaxOrderByAggregateInput";
import { Wp_usersMinOrderByAggregateInput } from "../inputs/Wp_usersMinOrderByAggregateInput";
import { Wp_usersSumOrderByAggregateInput } from "../inputs/Wp_usersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Wp_usersOrderByWithAggregationInput", {})
export class Wp_usersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_login?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_pass?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_nicename?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_registered?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_activation_key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Wp_usersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Wp_usersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Wp_usersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Wp_usersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Wp_usersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Wp_usersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Wp_usersSumOrderByAggregateInput | undefined;
}
