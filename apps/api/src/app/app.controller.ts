import { Message } from '@archives/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { Auth } from './decorators/auth.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Auth('read:hello', 'hello')
  getData(): Message {
    return this.appService.getData();
  }
}
