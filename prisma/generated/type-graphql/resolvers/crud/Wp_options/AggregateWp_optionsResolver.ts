import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_optionsArgs } from "./args/AggregateWp_optionsArgs";
import { Wp_options } from "../../../models/Wp_options";
import { AggregateWp_options } from "../../outputs/AggregateWp_options";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_options)
export class AggregateWp_optionsResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_options, {
    nullable: false
  })
  async aggregateWp_options(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_optionsArgs): Promise<AggregateWp_options> {
    return getPrismaFromContext(ctx).wp_options.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
