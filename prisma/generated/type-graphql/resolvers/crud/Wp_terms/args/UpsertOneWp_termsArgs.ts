import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsCreateInput } from "../../../inputs/Wp_termsCreateInput";
import { Wp_termsUpdateInput } from "../../../inputs/Wp_termsUpdateInput";
import { Wp_termsWhereUniqueInput } from "../../../inputs/Wp_termsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_termsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Wp_termsCreateInput, {
    nullable: false
  })
  create!: Wp_termsCreateInput;

  @TypeGraphQL.Field(_type => Wp_termsUpdateInput, {
    nullable: false
  })
  update!: Wp_termsUpdateInput;
}
