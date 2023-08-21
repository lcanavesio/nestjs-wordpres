import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_usermetaOrThrowArgs } from "./args/FindUniqueWp_usermetaOrThrowArgs";
import { Wp_usermeta } from "../../../models/Wp_usermeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_usermeta)
export class FindUniqueWp_usermetaOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_usermeta, {
    nullable: true
  })
  async getWp_usermeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_usermetaOrThrowArgs): Promise<Wp_usermeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_usermeta.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
