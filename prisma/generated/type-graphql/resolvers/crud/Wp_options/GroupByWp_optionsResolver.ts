import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByWp_optionsArgs } from "./args/GroupByWp_optionsArgs";
import { Wp_options } from "../../../models/Wp_options";
import { Wp_optionsGroupBy } from "../../outputs/Wp_optionsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_options)
export class GroupByWp_optionsResolver {
  @TypeGraphQL.Query(_returns => [Wp_optionsGroupBy], {
    nullable: false
  })
  async groupByWp_options(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_optionsArgs): Promise<Wp_optionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_options.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
