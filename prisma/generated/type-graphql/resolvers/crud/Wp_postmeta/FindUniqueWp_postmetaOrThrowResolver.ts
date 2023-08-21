import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_postmetaOrThrowArgs } from "./args/FindUniqueWp_postmetaOrThrowArgs";
import { Wp_postmeta } from "../../../models/Wp_postmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_postmeta)
export class FindUniqueWp_postmetaOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_postmeta, {
    nullable: true
  })
  async getWp_postmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_postmetaOrThrowArgs): Promise<Wp_postmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_postmeta.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
