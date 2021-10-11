import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';

import appConfiguration from './config/app-configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConfigService } from './config/api-config.service';
import { AllExceptionsLoggerFilter } from './exception.filter';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfiguration] }),
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ApiConfigService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
