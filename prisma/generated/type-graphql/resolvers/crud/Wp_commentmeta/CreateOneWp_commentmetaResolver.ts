import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneWp_commentmetaArgs } from "./args/CreateOneWp_commentmetaArgs";
import { Wp_commentmeta } from "../../../models/Wp_commentmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_commentmeta)
export class CreateOneWp_commentmetaResolver {
  @TypeGraphQL.Mutation(_returns => Wp_commentmeta, {
    nullable: false
  })
  async createOneWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_commentmetaArgs): Promise<Wp_commentmeta> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
