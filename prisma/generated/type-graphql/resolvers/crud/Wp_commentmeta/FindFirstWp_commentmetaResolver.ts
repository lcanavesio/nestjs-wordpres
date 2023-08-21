import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_commentmetaArgs } from "./args/FindFirstWp_commentmetaArgs";
import { Wp_commentmeta } from "../../../models/Wp_commentmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_commentmeta)
export class FindFirstWp_commentmetaResolver {
  @TypeGraphQL.Query(_returns => Wp_commentmeta, {
    nullable: true
  })
  async findFirstWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_commentmetaArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
