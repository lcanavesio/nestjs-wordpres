import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Wp_term_relationshipsAvgAggregate } from "../outputs/Wp_term_relationshipsAvgAggregate";
import { Wp_term_relationshipsCountAggregate } from "../outputs/Wp_term_relationshipsCountAggregate";
import { Wp_term_relationshipsMaxAggregate } from "../outputs/Wp_term_relationshipsMaxAggregate";
import { Wp_term_relationshipsMinAggregate } from "../outputs/Wp_term_relationshipsMinAggregate";
import { Wp_term_relationshipsSumAggregate } from "../outputs/Wp_term_relationshipsSumAggregate";

@TypeGraphQL.ObjectType("Wp_term_relationshipsGroupBy", {})
export class Wp_term_relationshipsGroupBy {
  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  object_id!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  term_taxonomy_id!: bigint;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  term_order!: number;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsCountAggregate, {
    nullable: true
  })
  _count!: Wp_term_relationshipsCountAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsAvgAggregate, {
    nullable: true
  })
  _avg!: Wp_term_relationshipsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsSumAggregate, {
    nullable: true
  })
  _sum!: Wp_term_relationshipsSumAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsMinAggregate, {
    nullable: true
  })
  _min!: Wp_term_relationshipsMinAggregate | null;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsMaxAggregate, {
    nullable: true
  })
  _max!: Wp_term_relationshipsMaxAggregate | null;
}
