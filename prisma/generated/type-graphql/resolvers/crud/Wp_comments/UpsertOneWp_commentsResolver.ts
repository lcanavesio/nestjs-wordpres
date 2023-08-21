import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWp_commentsArgs } from "./args/UpsertOneWp_commentsArgs";
import { Wp_comments } from "../../../models/Wp_comments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_comments)
export class UpsertOneWp_commentsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_comments, {
    nullable: false
  })
  async upsertOneWp_comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_commentsArgs): Promise<Wp_comments> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_comments.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
