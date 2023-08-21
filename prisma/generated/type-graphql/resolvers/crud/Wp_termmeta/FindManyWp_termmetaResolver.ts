import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWp_termmetaArgs } from "./args/FindManyWp_termmetaArgs";
import { Wp_termmeta } from "../../../models/Wp_termmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_termmeta)
export class FindManyWp_termmetaResolver {
  @TypeGraphQL.Query(_returns => [Wp_termmeta], {
    nullable: false
  })
  async wp_termmetas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_termmetaArgs): Promise<Wp_termmeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_termmeta.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
