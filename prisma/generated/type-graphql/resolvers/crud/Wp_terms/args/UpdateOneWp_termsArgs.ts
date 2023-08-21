import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsUpdateInput } from "../../../inputs/Wp_termsUpdateInput";
import { Wp_termsWhereUniqueInput } from "../../../inputs/Wp_termsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsUpdateInput, {
    nullable: false
  })
  data!: Wp_termsUpdateInput;

  @TypeGraphQL.Field(_type => Wp_termsWhereUniqueInput, {
    nullable: false
  })
  where!: Wp_termsWhereUniqueInput;
}
