import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_termmetaArgs } from "./args/FindFirstWp_termmetaArgs";
import { Wp_termmeta } from "../../../models/Wp_termmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_termmeta)
export class FindFirstWp_termmetaResolver {
  @TypeGraphQL.Query(_returns => Wp_termmeta, {
    nullable: true
  })
  async findFirstWp_termmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_termmetaArgs): Promise<Wp_termmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_termmeta.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
