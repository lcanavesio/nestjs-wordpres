import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_usermetaArgs } from "./args/FindFirstWp_usermetaArgs";
import { Wp_usermeta } from "../../../models/Wp_usermeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_usermeta)
export class FindFirstWp_usermetaResolver {
  @TypeGraphQL.Query(_returns => Wp_usermeta, {
    nullable: true
  })
  async findFirstWp_usermeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_usermetaArgs): Promise<Wp_usermeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_usermeta.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
