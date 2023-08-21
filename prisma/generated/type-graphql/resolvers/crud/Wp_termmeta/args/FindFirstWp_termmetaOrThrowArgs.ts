import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_termmetaOrderByWithRelationInput } from "../../../inputs/Wp_termmetaOrderByWithRelationInput";
import { Wp_termmetaWhereInput } from "../../../inputs/Wp_termmetaWhereInput";
import { Wp_termmetaWhereUniqueInput } from "../../../inputs/Wp_termmetaWhereUniqueInput";
import { Wp_termmetaScalarFieldEnum } from "../../../../enums/Wp_termmetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_termmetaOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_termmetaWhereInput, {
    nullable: true
  })
  where?: Wp_termmetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_termmetaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_termmetaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_termmetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_termmetaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"meta_id" | "term_id" | "meta_key" | "meta_value"> | undefined;
}
