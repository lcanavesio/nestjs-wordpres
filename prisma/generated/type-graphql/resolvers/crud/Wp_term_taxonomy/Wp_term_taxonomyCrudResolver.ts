import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_term_taxonomyArgs } from "./args/AggregateWp_term_taxonomyArgs";
import { CreateManyWp_term_taxonomyArgs } from "./args/CreateManyWp_term_taxonomyArgs";
import { CreateOneWp_term_taxonomyArgs } from "./args/CreateOneWp_term_taxonomyArgs";
import { DeleteManyWp_term_taxonomyArgs } from "./args/DeleteManyWp_term_taxonomyArgs";
import { DeleteOneWp_term_taxonomyArgs } from "./args/DeleteOneWp_term_taxonomyArgs";
import { FindFirstWp_term_taxonomyArgs } from "./args/FindFirstWp_term_taxonomyArgs";
import { FindFirstWp_term_taxonomyOrThrowArgs } from "./args/FindFirstWp_term_taxonomyOrThrowArgs";
import { FindManyWp_term_taxonomyArgs } from "./args/FindManyWp_term_taxonomyArgs";
import { FindUniqueWp_term_taxonomyArgs } from "./args/FindUniqueWp_term_taxonomyArgs";
import { FindUniqueWp_term_taxonomyOrThrowArgs } from "./args/FindUniqueWp_term_taxonomyOrThrowArgs";
import { GroupByWp_term_taxonomyArgs } from "./args/GroupByWp_term_taxonomyArgs";
import { UpdateManyWp_term_taxonomyArgs } from "./args/UpdateManyWp_term_taxonomyArgs";
import { UpdateOneWp_term_taxonomyArgs } from "./args/UpdateOneWp_term_taxonomyArgs";
import { UpsertOneWp_term_taxonomyArgs } from "./args/UpsertOneWp_term_taxonomyArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Wp_term_taxonomy } from "../../../models/Wp_term_taxonomy";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWp_term_taxonomy } from "../../outputs/AggregateWp_term_taxonomy";
import { Wp_term_taxonomyGroupBy } from "../../outputs/Wp_term_taxonomyGroupBy";

@TypeGraphQL.Resolver(_of => Wp_term_taxonomy)
export class Wp_term_taxonomyCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_term_taxonomy, {
    nullable: false
  })
  async aggregateWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_term_taxonomyArgs): Promise<AggregateWp_term_taxonomy> {
    return getPrismaFromContext(ctx).wp_term_taxonomy.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWp_term_taxonomyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_taxonomy, {
    nullable: false
  })
  async createOneWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_term_taxonomyArgs): Promise<Wp_term_taxonomy> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWp_term_taxonomyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async deleteOneWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_term_taxonomyArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async findFirstWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_term_taxonomyArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async findFirstWp_term_taxonomyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_term_taxonomyOrThrowArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_term_taxonomy], {
    nullable: false
  })
  async wp_term_taxonomies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_term_taxonomyArgs): Promise<Wp_term_taxonomy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async wp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_term_taxonomyArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async getWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_term_taxonomyOrThrowArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_term_taxonomyGroupBy], {
    nullable: false
  })
  async groupByWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_term_taxonomyArgs): Promise<Wp_term_taxonomyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWp_term_taxonomyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_taxonomy, {
    nullable: true
  })
  async updateOneWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_term_taxonomyArgs): Promise<Wp_term_taxonomy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_term_taxonomy, {
    nullable: false
  })
  async upsertOneWp_term_taxonomy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_term_taxonomyArgs): Promise<Wp_term_taxonomy> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_term_taxonomy.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
