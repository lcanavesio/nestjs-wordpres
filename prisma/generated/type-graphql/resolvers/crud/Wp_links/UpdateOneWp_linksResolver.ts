import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWp_linksArgs } from "./args/UpdateOneWp_linksArgs";
import { Wp_links } from "../../../models/Wp_links";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_links)
export class UpdateOneWp_linksResolver {
  @TypeGraphQL.Mutation(_returns => Wp_links, {
    nullable: true
  })
  async updateOneWp_links(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_linksArgs): Promise<Wp_links | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_links.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
