import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWp_usersArgs } from "./args/UpdateOneWp_usersArgs";
import { Wp_users } from "../../../models/Wp_users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_users)
export class UpdateOneWp_usersResolver {
  @TypeGraphQL.Mutation(_returns => Wp_users, {
    nullable: true
  })
  async updateOneWp_users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_usersArgs): Promise<Wp_users | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_users.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
