import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_linksArgs } from "./args/AggregateWp_linksArgs";
import { Wp_links } from "../../../models/Wp_links";
import { AggregateWp_links } from "../../outputs/AggregateWp_links";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_links)
export class AggregateWp_linksResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_links, {
    nullable: false
  })
  async aggregateWp_links(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_linksArgs): Promise<AggregateWp_links> {
    return getPrismaFromContext(ctx).wp_links.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
