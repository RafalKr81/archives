import { Settings } from './app/settings';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = Settings.server.prefix;
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  // todo: for production disableErrorMessages set to true
  // todo: for prod add whitelist section with abort exception when param on non whitelist
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, disableErrorMessages: false })
  );

  // const apiConfigService = app.get(ApiConfigService);
  const port = Settings.server.port;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
