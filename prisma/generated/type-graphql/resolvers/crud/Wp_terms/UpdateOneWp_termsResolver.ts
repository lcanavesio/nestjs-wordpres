import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWp_termsArgs } from "./args/UpdateOneWp_termsArgs";
import { Wp_terms } from "../../../models/Wp_terms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_terms)
export class UpdateOneWp_termsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_terms, {
    nullable: true
  })
  async updateOneWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_termsArgs): Promise<Wp_terms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
