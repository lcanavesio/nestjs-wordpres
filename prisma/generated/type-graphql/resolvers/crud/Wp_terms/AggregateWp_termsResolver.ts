import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_termsArgs } from "./args/AggregateWp_termsArgs";
import { Wp_terms } from "../../../models/Wp_terms";
import { AggregateWp_terms } from "../../outputs/AggregateWp_terms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_terms)
export class AggregateWp_termsResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_terms, {
    nullable: false
  })
  async aggregateWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_termsArgs): Promise<AggregateWp_terms> {
    return getPrismaFromContext(ctx).wp_terms.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
