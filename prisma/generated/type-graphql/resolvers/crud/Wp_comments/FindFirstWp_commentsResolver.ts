import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_commentsArgs } from "./args/FindFirstWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class FindFirstWp_commentsResolver {
  @TypeGraphQL.Query(_returns => Wp_comments, {
    nullable: true
  })
  async findFirstWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_commentsArgs): Promise<Wp_comments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_comments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
