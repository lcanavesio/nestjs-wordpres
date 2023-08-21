import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { Wp_optionsWhereInput } from "../inputs/Wp_optionsWhereInput";

@TypeGraphQL.InputType("Wp_optionsWhereUniqueInput", {})
export class Wp_optionsWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  option_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  option_name?: string | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  option_value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  autoload?: StringFilter | undefined;
}
