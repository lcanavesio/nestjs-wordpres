import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_commentsOrderByWithRelationInput } from "../../../inputs/Wp_commentsOrderByWithRelationInput";
import { Wp_commentsWhereInput } from "../../../inputs/Wp_commentsWhereInput";
import { Wp_commentsWhereUniqueInput } from "../../../inputs/Wp_commentsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWp_commentsArgs {
  @TypeGraphQL.Field(_type => Wp_commentsWhereInput, {
    nullable: true
  })
  where?: Wp_commentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_commentsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_commentsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_commentsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_commentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
