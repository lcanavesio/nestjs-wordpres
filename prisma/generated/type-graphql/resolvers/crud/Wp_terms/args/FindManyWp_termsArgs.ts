import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termsOrderByWithRelationInput } from "../../../inputs/Wp_termsOrderByWithRelationInput";
import { Wp_termsWhereInput } from "../../../inputs/Wp_termsWhereInput";
import { Wp_termsWhereUniqueInput } from "../../../inputs/Wp_termsWhereUniqueInput";
import { Wp_termsScalarFieldEnum } from "../../../../enums/Wp_termsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWp_termsArgs {
  @TypeGraphQL.Field(_type => Wp_termsWhereInput, {
    nullable: true
  })
  where?: Wp_termsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_termsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_termsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_termsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_termsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_termsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"term_id" | "name" | "slug" | "term_group"> | undefined;
}
