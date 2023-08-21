import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_postmetaArgs } from "./args/GroupByWp_postmetaArgs";
import { Wp_postmeta } from "../../../models/Wp_postmeta";
import { Wp_postmetaGroupBy } from "../../outputs/Wp_postmetaGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_postmeta)
export class GroupByWp_postmetaResolver {
  @TypeGraphQL.Query(_returns => [Wp_postmetaGroupBy], {
    nullable: false
  })
  async groupByWp_postmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_postmetaArgs): Promise<Wp_postmetaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_postmeta.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
