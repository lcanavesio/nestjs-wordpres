import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("Wp_optionsMaxAggregate", {})
export class Wp_optionsMaxAggregate {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  option_id!: bigint | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  option_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  option_value!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  autoload!: string | null;
}
