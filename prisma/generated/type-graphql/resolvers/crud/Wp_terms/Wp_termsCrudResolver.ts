import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateWp_termsArgs } from "./args/AggregateWp_termsArgs";
import { CreateManyWp_termsArgs } from "./args/CreateManyWp_termsArgs";
import { CreateOneWp_termsArgs } from "./args/CreateOneWp_termsArgs";
import { DeleteManyWp_termsArgs } from "./args/DeleteManyWp_termsArgs";
import { DeleteOneWp_termsArgs } from "./args/DeleteOneWp_termsArgs";
import { FindFirstWp_termsArgs } from "./args/FindFirstWp_termsArgs";
import { FindFirstWp_termsOrThrowArgs } from "./args/FindFirstWp_termsOrThrowArgs";
import { FindManyWp_termsArgs } from "./args/FindManyWp_termsArgs";
import { FindUniqueWp_termsArgs } from "./args/FindUniqueWp_termsArgs";
import { FindUniqueWp_termsOrThrowArgs } from "./args/FindUniqueWp_termsOrThrowArgs";
import { GroupByWp_termsArgs } from "./args/GroupByWp_termsArgs";
import { UpdateManyWp_termsArgs } from "./args/UpdateManyWp_termsArgs";
import { UpdateOneWp_termsArgs } from "./args/UpdateOneWp_termsArgs";
import { UpsertOneWp_termsArgs } from "./args/UpsertOneWp_termsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Wp_terms } from "../../../models/Wp_terms";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateWp_terms } from "../../outputs/AggregateWp_terms";
import { Wp_termsGroupBy } from "../../outputs/Wp_termsGroupBy";

@TypeGraphQL.Resolver(_of => Wp_terms)
export class Wp_termsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateWp_terms, {
    nullable: false
  })
  async aggregateWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWp_termsArgs): Promise<AggregateWp_terms> {
    return getPrismaFromContext(ctx).wp_terms.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyWp_termsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_terms, {
    nullable: false
  })
  async createOneWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneWp_termsArgs): Promise<Wp_terms> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyWp_termsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Wp_terms, {
    nullable: true
  })
  async deleteOneWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneWp_termsArgs): Promise<Wp_terms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_terms, {
    nullable: true
  })
  async findFirstWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_termsArgs): Promise<Wp_terms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Wp_terms, {
    nullable: true
  })
  async findFirstWp_termsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstWp_termsOrThrowArgs): Promise<Wp_terms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => Wp_terms, {
    nullable: true
  })
  async findUniqueWp_termsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueWp_termsOrThrowArgs): Promise<Wp_terms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Wp_termsGroupBy], {
    nullable: false
  })
  async groupByWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByWp_termsArgs): Promise<Wp_termsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyWp_termsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => Wp_terms, {
    nullable: false
  })
  async upsertOneWp_terms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneWp_termsArgs): Promise<Wp_terms> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).wp_terms.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
