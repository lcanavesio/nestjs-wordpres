import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_linksArgs } from "./args/GroupByWp_linksArgs";
import { Wp_links } from "../../../models/Wp_links";
import { Wp_linksGroupBy } from "../../outputs/Wp_linksGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_links)
export class GroupByWp_linksResolver {
  @TypeGraphQL.Query(_returns => [Wp_linksGroupBy], {
    nullable: false
  })
  async groupByWp_links(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_linksArgs): Promise<Wp_linksGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_links.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
