import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Wp_optionsWhereInput", {})
export class Wp_optionsWhereInput {
  @TypeGraphQL.Field(_type => [Wp_optionsWhereInput], {
    nullable: true
  })
  AND?: Wp_optionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsWhereInput], {
    nullable: true
  })
  OR?: Wp_optionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsWhereInput], {
    nullable: true
  })
  NOT?: Wp_optionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  option_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  option_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  option_value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  autoload?: StringFilter | undefined;
}
