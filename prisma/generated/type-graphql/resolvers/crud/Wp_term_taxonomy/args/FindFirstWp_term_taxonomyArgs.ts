import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_taxonomyOrderByWithRelationInput } from "../../../inputs/Wp_term_taxonomyOrderByWithRelationInput";
import { Wp_term_taxonomyWhereInput } from "../../../inputs/Wp_term_taxonomyWhereInput";
import { Wp_term_taxonomyWhereUniqueInput } from "../../../inputs/Wp_term_taxonomyWhereUniqueInput";
import { Wp_term_taxonomyScalarFieldEnum } from "../../../../enums/Wp_term_taxonomyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_term_taxonomyArgs {
  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereInput, {
    nullable: true
  })
  where?: Wp_term_taxonomyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_term_taxonomyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_term_taxonomyWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_term_taxonomyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_taxonomyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"term_taxonomy_id" | "term_id" | "taxonomy" | "description" | "parent" | "count"> | undefined;
}
