import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_commentmetaOrThrowArgs } from "./args/FindUniqueWp_commentmetaOrThrowArgs";
import { Wp_commentmeta } from "../../../models/Wp_commentmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_commentmeta)
export class FindUniqueWp_commentmetaOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_commentmeta, {
    nullable: true
  })
  async getWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_commentmetaOrThrowArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
