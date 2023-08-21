import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_commentmetaArgs } from "./args/AggregateWp_commentmetaArgs";
import { CreateManyWp_commentmetaArgs } from "./args/CreateManyWp_commentmetaArgs";
import { CreateOneWp_commentmetaArgs } from "./args/CreateOneWp_commentmetaArgs";
import { DeleteManyWp_commentmetaArgs } from "./args/DeleteManyWp_commentmetaArgs";
import { DeleteOneWp_commentmetaArgs } from "./args/DeleteOneWp_commentmetaArgs";
import { FindFirstWp_commentmetaArgs } from "./args/FindFirstWp_commentmetaArgs";
import { FindFirstWp_commentmetaOrThrowArgs } from "./args/FindFirstWp_commentmetaOrThrowArgs";
import { FindManyWp_commentmetaArgs } from "./args/FindManyWp_commentmetaArgs";
import { FindUniqueWp_commentmetaArgs } from "./args/FindUniqueWp_commentmetaArgs";
import { FindUniqueWp_commentmetaOrThrowArgs } from "./args/FindUniqueWp_commentmetaOrThrowArgs";
import { GroupByWp_commentmetaArgs } from "./args/GroupByWp_commentmetaArgs";
import { UpdateManyWp_commentmetaArgs } from "./args/UpdateManyWp_commentmetaArgs";
import { UpdateOneWp_commentmetaArgs } from "./args/UpdateOneWp_commentmetaArgs";
import { UpsertOneWp_commentmetaArgs } from "./args/UpsertOneWp_commentmetaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Wp_commentmeta } from "../../../models/Wp_commentmeta";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWp_commentmeta } from "../../outputs/AggregateWp_commentmeta";
import { Wp_commentmetaGroupBy } from "../../outputs/Wp_commentmetaGroupBy";

@TypeGraphQL.Resolver(_of => Wp_commentmeta)
export class Wp_commentmetaCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_commentmeta, {
    nullable: false
  })
  async aggregateWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_commentmetaArgs): Promise<AggregateWp_commentmeta> {
    return getPrismaFromContext(ctx).wp_commentmeta.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWp_commentmetaArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_commentmeta, {
    nullable: false
  })
  async createOneWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_commentmetaArgs): Promise<Wp_commentmeta> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWp_commentmetaArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_commentmeta, {
    nullable: true
  })
  async deleteOneWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_commentmetaArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_commentmeta, {
    nullable: true
  })
  async findFirstWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_commentmetaArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_commentmeta, {
    nullable: true
  })
  async findFirstWp_commentmetaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_commentmetaOrThrowArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_commentmeta], {
    nullable: false
  })
  async wp_commentmetas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_commentmetaArgs): Promise<Wp_commentmeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_commentmeta, {
    nullable: true
  })
  async wp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_commentmetaArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_commentmeta, {
    nullable: true
  })
  async getWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_commentmetaOrThrowArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_commentmetaGroupBy], {
    nullable: false
  })
  async groupByWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_commentmetaArgs): Promise<Wp_commentmetaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWp_commentmetaArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_commentmeta, {
    nullable: true
  })
  async updateOneWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_commentmetaArgs): Promise<Wp_commentmeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_commentmeta, {
    nullable: false
  })
  async upsertOneWp_commentmeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_commentmetaArgs): Promise<Wp_commentmeta> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_commentmeta.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
