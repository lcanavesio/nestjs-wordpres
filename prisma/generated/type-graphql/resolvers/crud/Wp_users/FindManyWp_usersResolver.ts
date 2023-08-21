import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWp_usersArgs } from "./args/FindManyWp_usersArgs";
import { Wp_users } from "../../../models/Wp_users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_users)
export class FindManyWp_usersResolver {
  @TypeGraphQL.Query(_returns => [Wp_users], {
    nullable: false
  })
  async findManyWp_users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_usersArgs): Promise<Wp_users[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_users.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
