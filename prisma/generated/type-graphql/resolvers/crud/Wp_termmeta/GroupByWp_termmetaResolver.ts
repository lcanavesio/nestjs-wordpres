import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_termmetaArgs } from "./args/GroupByWp_termmetaArgs";
import { Wp_termmeta } from "../../../models/Wp_termmeta";
import { Wp_termmetaGroupBy } from "../../outputs/Wp_termmetaGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_termmeta)
export class GroupByWp_termmetaResolver {
  @TypeGraphQL.Query(_returns => [Wp_termmetaGroupBy], {
    nullable: false
  })
  async groupByWp_termmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_termmetaArgs): Promise<Wp_termmetaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_termmeta.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
