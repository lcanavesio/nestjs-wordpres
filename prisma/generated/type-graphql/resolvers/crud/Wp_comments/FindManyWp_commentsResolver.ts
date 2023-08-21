import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWp_commentsArgs } from "./args/FindManyWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class FindManyWp_commentsResolver {
  @TypeGraphQL.Query(_returns => [Wp_comments], {
    nullable: false
  })
  async findManyWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_commentsArgs): Promise<Wp_comments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_comments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
