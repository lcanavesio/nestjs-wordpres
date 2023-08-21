import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWp_term_taxonomyOrThrowArgs } from "./args/FindFirstWp_term_taxonomyOrThrowArgs";
import { Wp_term_taxonomy } from "../../../models/Wp_term_taxonomy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_taxonomy)
export class FindFirstWp_term_taxonomyOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async findFirstWp_term_taxonomyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_term_taxonomyOrThrowArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
