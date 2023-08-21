import { Args, Query, Resolver } from 'type-graphql';
import {
  FindManyWp_postsArgs,
  FindUniqueWp_postsArgs,
  Wp_posts
} from '../../prisma/generated/type-graphql';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Wp_posts)
  post(
    @Args()
    args: FindUniqueWp_postsArgs,
  ): Promise<Wp_posts> {
    const { where } = args;
    return this.postService.findUnique({
      where: {
        ...where,
        ID: where.ID,
      },
    });
  }

  @Query(() => [Wp_posts])
  posts(
    @Args()
    args: FindManyWp_postsArgs,
  ): Promise<Wp_posts[]> {
    const { where } = args;
    return this.postService.findMany({
      where: {
        ...where,
      },
    });
  }

  // @Mutation(() => Wp_posts)
  // createPost(
  //   @Args() args: CreateOneWp_postsArgs,
  // ): Promise<Wp_posts> {
  //   const { data } = args;
  //   return this.postService.create({
  //     data: {
  //       ...data,
  //     },
  //   });
  // }

  // @Mutation(() => Wp_posts)
  // updatePost(
  //   @Args() args: UpdateOneWp_postsArgs,
  // ): Promise<Wp_posts> {
  //   const { data, where } = args;
  //   return this.postService.update({
  //     data: data,
  //     where: {
  //      ID: where.ID,
  //      ...where,
  //     },
  //   });
  // }
}
