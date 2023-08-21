import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWp_optionsArgs } from "./args/UpdateOneWp_optionsArgs";
import { Wp_options } from "../../../models/Wp_options";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_options)
export class UpdateOneWp_optionsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_options, {
    nullable: true
  })
  async updateOneWp_options(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_optionsArgs): Promise<Wp_options | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_options.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
