import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentmetaOrderByWithRelationInput } from "../../../inputs/Wp_commentmetaOrderByWithRelationInput";
import { Wp_commentmetaWhereInput } from "../../../inputs/Wp_commentmetaWhereInput";
import { Wp_commentmetaWhereUniqueInput } from "../../../inputs/Wp_commentmetaWhereUniqueInput";
import { Wp_commentmetaScalarFieldEnum } from "../../../../enums/Wp_commentmetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWp_commentmetaArgs {
  @TypeGraphQL.Field(_type => Wp_commentmetaWhereInput, {
    nullable: true
  })
  where?: Wp_commentmetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_commentmetaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_commentmetaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_commentmetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentmetaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"meta_id" | "comment_id" | "meta_key" | "meta_value"> | undefined;
}
