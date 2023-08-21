import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usermetaOrderByWithRelationInput } from "../../../inputs/Wp_usermetaOrderByWithRelationInput";
import { Wp_usermetaWhereInput } from "../../../inputs/Wp_usermetaWhereInput";
import { Wp_usermetaWhereUniqueInput } from "../../../inputs/Wp_usermetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWp_usermetaArgs {
  @TypeGraphQL.Field(_type => Wp_usermetaWhereInput, {
    nullable: true
  })
  where?: Wp_usermetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_usermetaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_usermetaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_usermetaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_usermetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
