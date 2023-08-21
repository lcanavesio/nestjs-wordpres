import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_term_relationshipsArgs } from "./args/GroupByWp_term_relationshipsArgs";
import { Wp_term_relationships } from "../../../models/Wp_term_relationships";
import { Wp_term_relationshipsGroupBy } from "../../outputs/Wp_term_relationshipsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_relationships)
export class GroupByWp_term_relationshipsResolver {
  @TypeGraphQL.Query(_returns => [Wp_term_relationshipsGroupBy], {
    nullable: false
  })
  async groupByWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_term_relationshipsArgs): Promise<Wp_term_relationshipsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
