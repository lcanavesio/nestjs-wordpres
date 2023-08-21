import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneWp_usersArgs } from "./args/DeleteOneWp_usersArgs";
import { Wp_users } from "../../../models/Wp_users";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_users)
export class DeleteOneWp_usersResolver {
  @TypeGraphQL.Mutation(_returns => Wp_users, {
    nullable: true
  })
  async deleteOneWp_users(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_usersArgs): Promise<Wp_users | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_users.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
