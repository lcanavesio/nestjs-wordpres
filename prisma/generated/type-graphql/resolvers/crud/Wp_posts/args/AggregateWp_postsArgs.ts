import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_postsOrderByWithRelationInput } from "../../../inputs/Wp_postsOrderByWithRelationInput";
import { Wp_postsWhereInput } from "../../../inputs/Wp_postsWhereInput";
import { Wp_postsWhereUniqueInput } from "../../../inputs/Wp_postsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWp_postsArgs {
  @TypeGraphQL.Field(_type => Wp_postsWhereInput, {
    nullable: true
  })
  where?: Wp_postsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_postsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_postsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_postsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_postsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
