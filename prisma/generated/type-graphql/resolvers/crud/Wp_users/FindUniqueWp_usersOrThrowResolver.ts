import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_usersOrThrowArgs } from "./args/FindUniqueWp_usersOrThrowArgs";
import { Wp_users } from "../../../models/Wp_users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_users)
export class FindUniqueWp_usersOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_users, {
    nullable: true
  })
  async findUniqueWp_usersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_usersOrThrowArgs): Promise<Wp_users | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_users.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
