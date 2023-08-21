import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWp_commentmetaArgs } from "./args/FindManyWp_commentmetaArgs";
import { Wp_commentmeta } from "../../../models/Wp_commentmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_commentmeta)
export class FindManyWp_commentmetaResolver {
  @TypeGraphQL.Query(_returns => [Wp_commentmeta], {
    nullable: false
  })
  async wp_commentmetas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_commentmetaArgs): Promise<Wp_commentmeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
