import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_term_relationshipsArgs } from "./args/AggregateWp_term_relationshipsArgs";
import { CreateManyWp_term_relationshipsArgs } from "./args/CreateManyWp_term_relationshipsArgs";
import { CreateOneWp_term_relationshipsArgs } from "./args/CreateOneWp_term_relationshipsArgs";
import { DeleteManyWp_term_relationshipsArgs } from "./args/DeleteManyWp_term_relationshipsArgs";
import { DeleteOneWp_term_relationshipsArgs } from "./args/DeleteOneWp_term_relationshipsArgs";
import { FindFirstWp_term_relationshipsArgs } from "./args/FindFirstWp_term_relationshipsArgs";
import { FindFirstWp_term_relationshipsOrThrowArgs } from "./args/FindFirstWp_term_relationshipsOrThrowArgs";
import { FindManyWp_term_relationshipsArgs } from "./args/FindManyWp_term_relationshipsArgs";
import { FindUniqueWp_term_relationshipsArgs } from "./args/FindUniqueWp_term_relationshipsArgs";
import { FindUniqueWp_term_relationshipsOrThrowArgs } from "./args/FindUniqueWp_term_relationshipsOrThrowArgs";
import { GroupByWp_term_relationshipsArgs } from "./args/GroupByWp_term_relationshipsArgs";
import { UpdateManyWp_term_relationshipsArgs } from "./args/UpdateManyWp_term_relationshipsArgs";
import { UpdateOneWp_term_relationshipsArgs } from "./args/UpdateOneWp_term_relationshipsArgs";
import { UpsertOneWp_term_relationshipsArgs } from "./args/UpsertOneWp_term_relationshipsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Wp_term_relationships } from "../../../models/Wp_term_relationships";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWp_term_relationships } from "../../outputs/AggregateWp_term_relationships";
import { Wp_term_relationshipsGroupBy } from "../../outputs/Wp_term_relationshipsGroupBy";

@TypeGraphQL.Resolver(_of => Wp_term_relationships)
export class Wp_term_relationshipsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_term_relationships, {
    nullable: false
  })
  async aggregateWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_term_relationshipsArgs): Promise<AggregateWp_term_relationships> {
    return getPrismaFromContext(ctx).wp_term_relationships.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWp_term_relationshipsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_relationships, {
    nullable: false
  })
  async createOneWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_term_relationshipsArgs): Promise<Wp_term_relationships> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWp_term_relationshipsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_relationships, {
    nullable: true
  })
  async deleteOneWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_term_relationshipsArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_relationships, {
    nullable: true
  })
  async findFirstWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_term_relationshipsArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_relationships, {
    nullable: true
  })
  async findFirstWp_term_relationshipsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_term_relationshipsOrThrowArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_term_relationships], {
    nullable: false
  })
  async findManyWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_term_relationshipsArgs): Promise<Wp_term_relationships[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_relationships, {
    nullable: true
  })
  async findUniqueWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_term_relationshipsArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_relationships, {
    nullable: true
  })
  async findUniqueWp_term_relationshipsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_term_relationshipsOrThrowArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_term_relationshipsGroupBy], {
    nullable: false
  })
  async groupByWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_term_relationshipsArgs): Promise<Wp_term_relationshipsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWp_term_relationshipsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_relationships, {
    nullable: true
  })
  async updateOneWp_term_relationships(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_term_relationshipsArgs): Promise<Wp_term_relationships | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_relationships.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
