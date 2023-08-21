import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneWp_postsArgs } from "./args/CreateOneWp_postsArgs";
import { Wp_posts } from "../../../models/Wp_posts";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_posts)
export class CreateOneWp_postsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_posts, {
    nullable: false
  })
  async createOneWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_postsArgs): Promise<Wp_posts> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
