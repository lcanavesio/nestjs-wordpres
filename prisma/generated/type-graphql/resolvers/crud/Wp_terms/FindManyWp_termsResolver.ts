import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyWp_termsArgs } from "./args/FindManyWp_termsArgs";
import { Wp_terms } from "../../../models/Wp_terms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_terms)
export class FindManyWp_termsResolver {
  @TypeGraphQL.Query(_returns => [Wp_terms], {
    nullable: false
  })
  async findManyWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_termsArgs): Promise<Wp_terms[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
