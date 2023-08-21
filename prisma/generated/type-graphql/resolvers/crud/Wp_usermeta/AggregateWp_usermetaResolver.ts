import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_usermetaArgs } from "./args/AggregateWp_usermetaArgs";
import { Wp_usermeta } from "../../../models/Wp_usermeta";
import { AggregateWp_usermeta } from "../../outputs/AggregateWp_usermeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_usermeta)
export class AggregateWp_usermetaResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_usermeta, {
    nullable: false
  })
  async aggregateWp_usermeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_usermetaArgs): Promise<AggregateWp_usermeta> {
    return getPrismaFromContext(ctx).wp_usermeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
