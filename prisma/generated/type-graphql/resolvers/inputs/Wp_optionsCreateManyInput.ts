import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Wp_optionsCreateManyInput", {})
export class Wp_optionsCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  option_id?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  option_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  option_value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  autoload?: string | undefined;
}
