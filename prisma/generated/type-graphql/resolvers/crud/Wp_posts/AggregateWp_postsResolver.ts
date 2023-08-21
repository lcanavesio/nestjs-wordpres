import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_postsArgs } from "./args/AggregateWp_postsArgs";
import { Wp_posts } from "../../../models/Wp_posts";
import { AggregateWp_posts } from "../../outputs/AggregateWp_posts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_posts)
export class AggregateWp_postsResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_posts, {
    nullable: false
  })
  async aggregateWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_postsArgs): Promise<AggregateWp_posts> {
    return getPrismaFromContext(ctx).wp_posts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
