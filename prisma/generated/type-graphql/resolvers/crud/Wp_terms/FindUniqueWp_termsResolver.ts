import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWp_termsArgs } from "./args/FindUniqueWp_termsArgs";
import { Wp_terms } from "../../../models/Wp_terms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_terms)
export class FindUniqueWp_termsResolver {
  @TypeGraphQL.Query(_returns => Wp_terms, {
    nullable: true
  })
  async findUniqueWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_termsArgs): Promise<Wp_terms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
