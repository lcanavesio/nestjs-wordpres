import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_commentmetaArgs } from "./args/AggregateWp_commentmetaArgs";
import { Wp_commentmeta } from "../../../models/Wp_commentmeta";
import { AggregateWp_commentmeta } from "../../outputs/AggregateWp_commentmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_commentmeta)
export class AggregateWp_commentmetaResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_commentmeta, {
    nullable: false
  })
  async aggregateWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_commentmetaArgs): Promise<AggregateWp_commentmeta> {
    return getPrismaFromContext(ctx).wp_commentmeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
