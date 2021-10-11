import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const content = {
      ip: req.ip,
      hostname: req.hostname,
      method: req.method,
      isSecure: req.secure,
      xhr: req.xhr,
      url: req.baseUrl,
      params: req.params,
      queryParams: req.query,
      body: req.body,
    };

    this.logger.debug(`Http Request: ${JSON.stringify(content)}`);
    next();
  }
}
