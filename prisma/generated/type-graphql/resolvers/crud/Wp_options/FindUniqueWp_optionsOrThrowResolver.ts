import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_optionsOrThrowArgs } from "./args/FindUniqueWp_optionsOrThrowArgs";
import { Wp_options } from "../../../models/Wp_options";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_options)
export class FindUniqueWp_optionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Wp_options, {
    nullable: true
  })
  async findUniqueWp_optionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_optionsOrThrowArgs): Promise<Wp_options | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_options.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
