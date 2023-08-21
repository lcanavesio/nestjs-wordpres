import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_commentsArgs } from "./args/GroupByWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { Wp_commentsGroupBy } from "../../outputs/Wp_commentsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class GroupByWp_commentsResolver {
  @TypeGraphQL.Query(_returns => [Wp_commentsGroupBy], {
    nullable: false
  })
  async groupByWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_commentsArgs): Promise<Wp_commentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_comments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
