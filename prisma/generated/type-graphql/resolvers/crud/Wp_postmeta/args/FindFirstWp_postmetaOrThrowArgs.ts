import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postmetaOrderByWithRelationInput } from "../../../inputs/Wp_postmetaOrderByWithRelationInput";
import { Wp_postmetaWhereInput } from "../../../inputs/Wp_postmetaWhereInput";
import { Wp_postmetaWhereUniqueInput } from "../../../inputs/Wp_postmetaWhereUniqueInput";
import { Wp_postmetaScalarFieldEnum } from "../../../../enums/Wp_postmetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_postmetaOrThrowArgs {
  @TypeGraphQL.Field(_type => Wp_postmetaWhereInput, {
    nullable: true
  })
  where?: Wp_postmetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_postmetaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_postmetaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_postmetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_postmetaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"meta_id" | "post_id" | "meta_key" | "meta_value"> | undefined;
}
