import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_usermetaArgs } from "./args/GroupByWp_usermetaArgs";
import { Wp_usermeta } from "../../../models/Wp_usermeta";
import { Wp_usermetaGroupBy } from "../../outputs/Wp_usermetaGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_usermeta)
export class GroupByWp_usermetaResolver {
  @TypeGraphQL.Query(_returns => [Wp_usermetaGroupBy], {
    nullable: false
  })
  async groupByWp_usermeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_usermetaArgs): Promise<Wp_usermetaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_usermeta.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
