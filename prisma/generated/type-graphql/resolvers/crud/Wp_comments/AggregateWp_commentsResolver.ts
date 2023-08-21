import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_commentsArgs } from "./args/AggregateWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { AggregateWp_comments } from "../../outputs/AggregateWp_comments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class AggregateWp_commentsResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_comments, {
    nullable: false
  })
  async aggregateWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_commentsArgs): Promise<AggregateWp_comments> {
    return getPrismaFromContext(ctx).wp_comments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
