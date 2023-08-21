import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_termmetaOrThrowArgs } from "./args/FindUniqueWp_termmetaOrThrowArgs";
import { Wp_termmeta } from "../../../models/Wp_termmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_termmeta)
export class FindUniqueWp_termmetaOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_termmeta, {
    nullable: true
  })
  async getWp_termmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_termmetaOrThrowArgs): Promise<Wp_termmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_termmeta.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
