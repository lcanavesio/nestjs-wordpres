import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_termmetaArgs } from "./args/AggregateWp_termmetaArgs";
import { Wp_termmeta } from "../../../models/Wp_termmeta";
import { AggregateWp_termmeta } from "../../outputs/AggregateWp_termmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_termmeta)
export class AggregateWp_termmetaResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_termmeta, {
    nullable: false
  })
  async aggregateWp_termmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_termmetaArgs): Promise<AggregateWp_termmeta> {
    return getPrismaFromContext(ctx).wp_termmeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
