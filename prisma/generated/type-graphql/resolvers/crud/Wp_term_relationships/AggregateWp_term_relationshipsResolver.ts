import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_term_relationshipsArgs } from "./args/AggregateWp_term_relationshipsArgs";
import { Wp_term_relationships } from "../../../models/Wp_term_relationships";
import { AggregateWp_term_relationships } from "../../outputs/AggregateWp_term_relationships";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_relationships)
export class AggregateWp_term_relationshipsResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_term_relationships, {
    nullable: false
  })
  async aggregateWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_term_relationshipsArgs): Promise<AggregateWp_term_relationships> {
    return getPrismaFromContext(ctx).wp_term_relationships.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
