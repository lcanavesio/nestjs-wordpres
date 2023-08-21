import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWp_term_taxonomyArgs } from "./args/UpsertOneWp_term_taxonomyArgs";
import { Wp_term_taxonomy } from "../../../models/Wp_term_taxonomy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_taxonomy)
export class UpsertOneWp_term_taxonomyResolver {
  @TypeGraphQL.Mutation(_returns => Wp_term_taxonomy, {
    nullable: false
  })
  async upsertOneWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_term_taxonomyArgs): Promise<Wp_term_taxonomy> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
