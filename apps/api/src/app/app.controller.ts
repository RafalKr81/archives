import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Message } from '@archives/api-interfaces';

import { AppService } from './app.service';
import { PermissionsGuard } from '../permissions.guard';
import { Permissions } from '../permissions.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get('hello')
  @Permissions('read:hello')
  getData(): Message {
    return this.appService.getData();
  }
}
