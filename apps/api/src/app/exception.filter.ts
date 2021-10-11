import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsLoggerFilter extends BaseExceptionFilter {
  private logger = new Logger(AllExceptionsLoggerFilter.name);

  // todo: zastanowic sie co mozna logowac
  catch(exception: unknown, host: ArgumentsHost) {
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse();
    // const request = ctx.getRequest();

    // const status =
    //   exception instanceof HttpException
    //     ? exception.getStatus()
    //     : HttpStatus.INTERNAL_SERVER_ERROR;

    // response.status(status).json({
    //   statusCode: status,
    //   timestamp: new Date().toISOString(),
    //   path: request.url,
    // });

    this.logger.error('Exception thrown: ' + JSON.stringify(exception));
    super.catch(exception, host);
  }
}
