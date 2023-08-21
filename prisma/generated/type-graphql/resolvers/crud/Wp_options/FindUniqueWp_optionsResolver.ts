import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_optionsArgs } from "./args/FindUniqueWp_optionsArgs";
import { Wp_options } from "../../../models/Wp_options";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_options)
export class FindUniqueWp_optionsResolver {
  @TypeGraphQL.Query(_returns => Wp_options, {
    nullable: true
  })
  async findUniqueWp_options(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_optionsArgs): Promise<Wp_options | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_options.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
