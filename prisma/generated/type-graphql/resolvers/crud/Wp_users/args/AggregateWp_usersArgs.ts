import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_usersOrderByWithRelationInput } from "../../../inputs/Wp_usersOrderByWithRelationInput";
import { Wp_usersWhereInput } from "../../../inputs/Wp_usersWhereInput";
import { Wp_usersWhereUniqueInput } from "../../../inputs/Wp_usersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWp_usersArgs {
  @TypeGraphQL.Field(_type => Wp_usersWhereInput, {
    nullable: true
  })
  where?: Wp_usersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_usersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_usersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_usersWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_usersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
