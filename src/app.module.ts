import { ApolloDriver } from '@nestjs/apollo';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { Module } from '@nestjs/common';
import { TypeGraphQLModule } from "typegraphql-nestjs";
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ApolloArmor } from '@escape.tech/graphql-armor';

const armor = new ApolloArmor();

@Module({
    imports: [
        TypeGraphQLModule.forRootAsync({
            driver: ApolloDriver,
            useFactory: async () => ({
            cache: new InMemoryLRUCache({
                // 200 Mib
                maxSize: Math.pow(2, 20) * 200,
                // 4 minutes in miliseconds
                ttl: 4 * 60 * 1000,
              }),
              path: "/",
              emitSchemaFile: "./schema.gql",
              validate: false,
              ...armor.protect()
            }),
           
          }),
        PostModule,
    ],
    //providers: (crudResolvers as unknown) as Provider<any>[],
    providers: [AppService],
})
export class AppModule {}
