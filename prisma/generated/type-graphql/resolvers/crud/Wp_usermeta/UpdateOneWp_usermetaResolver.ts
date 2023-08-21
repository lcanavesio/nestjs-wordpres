import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWp_usermetaArgs } from "./args/UpdateOneWp_usermetaArgs";
import { Wp_usermeta } from "../../../models/Wp_usermeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_usermeta)
export class UpdateOneWp_usermetaResolver {
  @TypeGraphQL.Mutation(_returns => Wp_usermeta, {
    nullable: true
  })
  async updateOneWp_usermeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_usermetaArgs): Promise<Wp_usermeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_usermeta.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
