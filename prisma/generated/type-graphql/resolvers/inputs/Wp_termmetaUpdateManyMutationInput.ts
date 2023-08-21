import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Wp_termmetaUpdateManyMutationInput", {})
export class Wp_termmetaUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  term_id?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_key?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_value?: NullableStringFieldUpdateOperationsInput | undefined;
}
