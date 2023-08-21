import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_postsOrThrowArgs } from "./args/FindUniqueWp_postsOrThrowArgs";
import { Wp_posts } from "../../../models/Wp_posts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_posts)
export class FindUniqueWp_postsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_posts, {
    nullable: true
  })
  async findUniqueWp_postsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_postsOrThrowArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
