import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_usermetaOrThrowArgs } from "./args/FindFirstWp_usermetaOrThrowArgs";
import { Wp_usermeta } from "../../../models/Wp_usermeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_usermeta)
export class FindFirstWp_usermetaOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_usermeta, {
    nullable: true
  })
  async findFirstWp_usermetaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_usermetaOrThrowArgs): Promise<Wp_usermeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_usermeta.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
