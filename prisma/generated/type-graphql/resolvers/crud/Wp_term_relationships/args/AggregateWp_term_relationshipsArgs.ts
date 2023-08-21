import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_term_relationshipsOrderByWithRelationInput } from "../../../inputs/Wp_term_relationshipsOrderByWithRelationInput";
import { Wp_term_relationshipsWhereInput } from "../../../inputs/Wp_term_relationshipsWhereInput";
import { Wp_term_relationshipsWhereUniqueInput } from "../../../inputs/Wp_term_relationshipsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWp_term_relationshipsArgs {
  @TypeGraphQL.Field(_type => Wp_term_relationshipsWhereInput, {
    nullable: true
  })
  where?: Wp_term_relationshipsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_term_relationshipsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_term_relationshipsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_term_relationshipsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_term_relationshipsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
