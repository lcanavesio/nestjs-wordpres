import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_postsArgs } from "./args/FindUniqueWp_postsArgs";
import { Wp_posts } from "../../../models/Wp_posts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_posts)
export class FindUniqueWp_postsResolver {
  @TypeGraphQL.Query(_returns => Wp_posts, {
    nullable: true
  })
  async findUniqueWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_postsArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
