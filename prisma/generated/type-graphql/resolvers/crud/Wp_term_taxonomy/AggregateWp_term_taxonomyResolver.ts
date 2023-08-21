import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_term_taxonomyArgs } from "./args/AggregateWp_term_taxonomyArgs";
import { Wp_term_taxonomy } from "../../../models/Wp_term_taxonomy";
import { AggregateWp_term_taxonomy } from "../../outputs/AggregateWp_term_taxonomy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_taxonomy)
export class AggregateWp_term_taxonomyResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_term_taxonomy, {
    nullable: false
  })
  async aggregateWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_term_taxonomyArgs): Promise<AggregateWp_term_taxonomy> {
    return getPrismaFromContext(ctx).wp_term_taxonomy.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
