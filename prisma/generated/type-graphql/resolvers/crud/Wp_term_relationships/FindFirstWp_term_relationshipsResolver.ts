import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_term_relationshipsArgs } from "./args/FindFirstWp_term_relationshipsArgs";
import { Wp_term_relationships } from "../../../models/Wp_term_relationships";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_relationships)
export class FindFirstWp_term_relationshipsResolver {
  @TypeGraphQL.Query(_returns => Wp_term_relationships, {
    nullable: true
  })
  async findFirstWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_term_relationshipsArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
