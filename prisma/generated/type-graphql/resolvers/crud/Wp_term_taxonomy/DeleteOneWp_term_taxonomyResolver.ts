import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneWp_term_taxonomyArgs } from "./args/DeleteOneWp_term_taxonomyArgs";
import { Wp_term_taxonomy } from "../../../models/Wp_term_taxonomy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_taxonomy)
export class DeleteOneWp_term_taxonomyResolver {
  @TypeGraphQL.Mutation(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async deleteOneWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_term_taxonomyArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
