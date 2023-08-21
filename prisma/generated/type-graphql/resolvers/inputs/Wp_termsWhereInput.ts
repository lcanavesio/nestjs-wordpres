import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Wp_termsWhereInput", {})
export class Wp_termsWhereInput {
  @TypeGraphQL.Field(_type => [Wp_termsWhereInput], {
    nullable: true
  })
  AND?: Wp_termsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termsWhereInput], {
    nullable: true
  })
  OR?: Wp_termsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_termsWhereInput], {
    nullable: true
  })
  NOT?: Wp_termsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  term_group?: BigIntFilter | undefined;
}
