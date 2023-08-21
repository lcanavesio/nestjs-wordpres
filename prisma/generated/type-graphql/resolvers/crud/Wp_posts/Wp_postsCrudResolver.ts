import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_postsArgs } from "./args/AggregateWp_postsArgs";
import { CreateManyWp_postsArgs } from "./args/CreateManyWp_postsArgs";
import { CreateOneWp_postsArgs } from "./args/CreateOneWp_postsArgs";
import { DeleteManyWp_postsArgs } from "./args/DeleteManyWp_postsArgs";
import { DeleteOneWp_postsArgs } from "./args/DeleteOneWp_postsArgs";
import { FindFirstWp_postsArgs } from "./args/FindFirstWp_postsArgs";
import { FindFirstWp_postsOrThrowArgs } from "./args/FindFirstWp_postsOrThrowArgs";
import { FindManyWp_postsArgs } from "./args/FindManyWp_postsArgs";
import { FindUniqueWp_postsArgs } from "./args/FindUniqueWp_postsArgs";
import { FindUniqueWp_postsOrThrowArgs } from "./args/FindUniqueWp_postsOrThrowArgs";
import { GroupByWp_postsArgs } from "./args/GroupByWp_postsArgs";
import { UpdateManyWp_postsArgs } from "./args/UpdateManyWp_postsArgs";
import { UpdateOneWp_postsArgs } from "./args/UpdateOneWp_postsArgs";
import { UpsertOneWp_postsArgs } from "./args/UpsertOneWp_postsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Wp_posts } from "../../../models/Wp_posts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWp_posts } from "../../outputs/AggregateWp_posts";
import { Wp_postsGroupBy } from "../../outputs/Wp_postsGroupBy";

@TypeGraphQL.Resolver(_of => Wp_posts)
export class Wp_postsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_posts, {
    nullable: false
  })
  async aggregateWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_postsArgs): Promise<AggregateWp_posts> {
    return getPrismaFromContext(ctx).wp_posts.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWp_postsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_posts, {
    nullable: false
  })
  async createOneWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_postsArgs): Promise<Wp_posts> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWp_postsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_posts, {
    nullable: true
  })
  async deleteOneWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_postsArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_posts, {
    nullable: true
  })
  async findFirstWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_postsArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_posts, {
    nullable: true
  })
  async findFirstWp_postsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_postsOrThrowArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_posts], {
    nullable: false
  })
  async findManyWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyWp_postsArgs): Promise<Wp_posts[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_posts, {
    nullable: true
  })
  async findUniqueWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_postsArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_posts, {
    nullable: true
  })
  async findUniqueWp_postsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_postsOrThrowArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_postsGroupBy], {
    nullable: false
  })
  async groupByWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_postsArgs): Promise<Wp_postsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWp_postsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_posts, {
    nullable: true
  })
  async updateOneWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneWp_postsArgs): Promise<Wp_posts | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_posts, {
    nullable: false
  })
  async upsertOneWp_posts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_postsArgs): Promise<Wp_posts> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_posts.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
