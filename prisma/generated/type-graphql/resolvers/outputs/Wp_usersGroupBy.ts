import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_usersAvgAggregate } from "../outputs/Wp_usersAvgAggregate";
import { Wp_usersCountAggregate } from "../outputs/Wp_usersCountAggregate";
import { Wp_usersMaxAggregate } from "../outputs/Wp_usersMaxAggregate";
import { Wp_usersMinAggregate } from "../outputs/Wp_usersMinAggregate";
import { Wp_usersSumAggregate } from "../outputs/Wp_usersSumAggregate";

@TypeGraphQL.ObjectType("Wp_usersGroupBy", {})
export class Wp_usersGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  ID!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_login!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_pass!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_nicename!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_url!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  user_registered!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_activation_key!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_status!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  display_name!: string;

  @TypeGraphQL.Field(_type => Wp_usersCountAggregate, {
    nullable: true
  })
  _count!: Wp_usersCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_usersAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersSumAggregate, {
    nullable: true
  })
  _sum!: Wp_usersSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersMinAggregate, {
    nullable: true
  })
  _min!: Wp_usersMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_usersMaxAggregate, {
    nullable: true
  })
  _max!: Wp_usersMaxAggregate | null;
}
