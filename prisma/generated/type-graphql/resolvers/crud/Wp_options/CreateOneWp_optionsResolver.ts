import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneWp_optionsArgs } from "./args/CreateOneWp_optionsArgs";
import { Wp_options } from "../../../models/Wp_options";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_options)
export class CreateOneWp_optionsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_options, {
    nullable: false
  })
  async createOneWp_options(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_optionsArgs): Promise<Wp_options> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_options.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
