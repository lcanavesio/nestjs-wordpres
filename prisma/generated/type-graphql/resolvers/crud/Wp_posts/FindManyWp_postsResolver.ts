import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWp_postsArgs } from "./args/FindManyWp_postsArgs";
import { Wp_posts } from "../../../models/Wp_posts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_posts)
export class FindManyWp_postsResolver {
  @TypeGraphQL.Query(_returns => [Wp_posts], {
    nullable: false
  })
  async findManyWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_postsArgs): Promise<Wp_posts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
