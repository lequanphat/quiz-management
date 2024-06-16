import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DB_CONFIG } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { CommonModule } from './common/common.module';
import { UserVerification } from './entities/UserVerification';
import { VocabulariesModule } from './vocabularies/vocabularies.module';
import { Vocabulary } from './entities/Vocabulary';
import { VocabularyExample } from './entities/VocabularyExample';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: parseInt(DB_CONFIG.PORT),
      host: DB_CONFIG.HOST,
      username: DB_CONFIG.USERNAME,
      password: DB_CONFIG.PASSWORD,
      database: DB_CONFIG.NAME,
      entities: [User, UserVerification, Vocabulary, VocabularyExample],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    VocabulariesModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'users*', method: RequestMethod.ALL });
  }
}
