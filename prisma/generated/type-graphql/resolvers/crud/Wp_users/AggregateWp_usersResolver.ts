import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_usersArgs } from "./args/AggregateWp_usersArgs";
import { Wp_users } from "../../../models/Wp_users";
import { AggregateWp_users } from "../../outputs/AggregateWp_users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_users)
export class AggregateWp_usersResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_users, {
    nullable: false
  })
  async aggregateWp_users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_usersArgs): Promise<AggregateWp_users> {
    return getPrismaFromContext(ctx).wp_users.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
