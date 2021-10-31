import { Message } from '@archives/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { Auth } from '../auth.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  // @Permissions('read:hello')
  @Get('hello')
  @Auth('read:hello')
  getData(): Message {
    return this.appService.getData();
  }
}
