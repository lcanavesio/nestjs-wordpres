import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneWp_commentsArgs } from "./args/DeleteOneWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class DeleteOneWp_commentsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_comments, {
    nullable: true
  })
  async deleteOneWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_commentsArgs): Promise<Wp_comments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_comments.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
