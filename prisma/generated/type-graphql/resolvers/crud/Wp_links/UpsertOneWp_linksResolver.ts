import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWp_linksArgs } from "./args/UpsertOneWp_linksArgs";
import { Wp_links } from "../../../models/Wp_links";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_links)
export class UpsertOneWp_linksResolver {
  @TypeGraphQL.Mutation(_returns => Wp_links, {
    nullable: false
  })
  async upsertOneWp_links(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_linksArgs): Promise<Wp_links> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_links.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
