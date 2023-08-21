import { Module } from '@nestjs/common';
import { PostService } from "./post.service";
import { PostResolver } from "./post.resolver";
import { PrismaModule } from '../prisma/prisma.module';
import { DateScalar } from '../common/date.scalar';

@Module({
    providers: [ PostResolver, PostService, DateScalar],
    imports: [ PrismaModule],
})
export class PostModule { }