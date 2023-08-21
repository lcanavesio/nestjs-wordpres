import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWp_termmetaArgs } from "./args/UpdateOneWp_termmetaArgs";
import { Wp_termmeta } from "../../../models/Wp_termmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_termmeta)
export class UpdateOneWp_termmetaResolver {
  @TypeGraphQL.Mutation(_returns => Wp_termmeta, {
    nullable: true
  })
  async updateOneWp_termmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_termmetaArgs): Promise<Wp_termmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_termmeta.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
