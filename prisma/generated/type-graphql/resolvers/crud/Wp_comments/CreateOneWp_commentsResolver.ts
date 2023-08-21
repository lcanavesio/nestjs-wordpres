import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneWp_commentsArgs } from "./args/CreateOneWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class CreateOneWp_commentsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_comments, {
    nullable: false
  })
  async createOneWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_commentsArgs): Promise<Wp_comments> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_comments.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
