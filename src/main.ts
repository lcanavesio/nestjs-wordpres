import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(7000, () => {
    console.log(`
🚀 Server ready at: http://localhost:7000/graphql
`)
  })
}
bootstrap()
