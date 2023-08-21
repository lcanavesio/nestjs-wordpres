import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Wp_optionsOrderByWithRelationInput } from "../../../inputs/Wp_optionsOrderByWithRelationInput";
import { Wp_optionsWhereInput } from "../../../inputs/Wp_optionsWhereInput";
import { Wp_optionsWhereUniqueInput } from "../../../inputs/Wp_optionsWhereUniqueInput";
import { Wp_optionsScalarFieldEnum } from "../../../../enums/Wp_optionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstWp_optionsArgs {
  @TypeGraphQL.Field(_type => Wp_optionsWhereInput, {
    nullable: true
  })
  where?: Wp_optionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Wp_optionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Wp_optionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Wp_optionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Wp_optionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"option_id" | "option_name" | "option_value" | "autoload"> | undefined;
}
