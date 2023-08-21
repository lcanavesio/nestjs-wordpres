import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWp_postmetaArgs } from "./args/UpsertOneWp_postmetaArgs";
import { Wp_postmeta } from "../../../models/Wp_postmeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_postmeta)
export class UpsertOneWp_postmetaResolver {
  @TypeGraphQL.Mutation(_returns => Wp_postmeta, {
    nullable: false
  })
  async upsertOneWp_postmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_postmetaArgs): Promise<Wp_postmeta> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_postmeta.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
