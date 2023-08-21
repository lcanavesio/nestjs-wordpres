import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_postmetaArgs } from "./args/AggregateWp_postmetaArgs";
import { Wp_postmeta } from "../../../models/Wp_postmeta";
import { AggregateWp_postmeta } from "../../outputs/AggregateWp_postmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_postmeta)
export class AggregateWp_postmetaResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_postmeta, {
    nullable: false
  })
  async aggregateWp_postmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_postmetaArgs): Promise<AggregateWp_postmeta> {
    return getPrismaFromContext(ctx).wp_postmeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
