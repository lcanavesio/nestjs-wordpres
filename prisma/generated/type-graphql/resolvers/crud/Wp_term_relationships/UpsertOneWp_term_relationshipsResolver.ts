import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWp_term_relationshipsArgs } from "./args/UpsertOneWp_term_relationshipsArgs";
import { Wp_term_relationships } from "../../../models/Wp_term_relationships";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Wp_term_relationships)
export class UpsertOneWp_term_relationshipsResolver {
  @TypeGraphQL.Mutation(_returns => Wp_term_relationships, {
    nullable: false
  })
  async upsertOneWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_term_relationshipsArgs): Promise<Wp_term_relationships> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
