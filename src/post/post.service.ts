import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Wp_posts } from '../../prisma/generated/type-graphql';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(where: Prisma.wp_postsFindUniqueArgs): Promise<Wp_posts> {
    try {
      this.logger.log({
        action: 'findUnique',
        where,
      });
      const query = await this.prisma.wp_posts.findUnique(where);

      this.logger.log({
        action: 'Result findUnique',
        query,
      });

      return query;
    } catch (error) {
      this.logger.error({
        action: 'error findUnique',
        error,
      });

      throw new Error("error al obtener post");
    }
  }

  async findMany(
    args: Prisma.wp_postsFindManyArgs,
  ): Promise<Wp_posts[]> {
    try {
      this.logger.log({
        action: 'getManyfindManyPost',
        args,
      });
      
      const query = await this.prisma.wp_posts.findMany(args);

      this.logger.log({
        action: 'Result findMany',
        query,
      });

      return query;
    } catch (error) {
      this.logger.error({
        action: 'error findMany',
        error,
      });

      throw new Error("error al obtener posts");
    }
  }

  async create(data: Prisma.wp_postsCreateArgs): Promise<Wp_posts> {
    try {
      this.logger.log({
        action: 'create',
        data,
      });
      const query = await this.prisma.wp_posts.create(data);

      this.logger.log({
        action: 'Result create',
        query,
      });

      return query;
    } catch (error) {
      this.logger.error({
        action: 'error create',
        error,
      });

      throw new Error("error al crear post");
    }
  }

  async update(
    args: Prisma.wp_postsUpdateArgs,
  ): Promise<Wp_posts> {
    try {
      this.logger.log({
        action: 'update',
        args,
      });
      const query = await this.prisma.wp_posts.update(args);

      this.logger.log({
        action: 'Result update',
        query,
      });

      return query;
    } catch (error) {
      this.logger.error({
        action: 'error update',
        error,
      });

      throw new Error("error al actualizar post");
    }
  }
}
