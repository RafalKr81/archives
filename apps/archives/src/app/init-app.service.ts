import { Injectable } from '@angular/core';
import { AuthControllerService } from '@archives/auth';

@Injectable()
export class InitAppService {
  constructor(private authControllerService: AuthControllerService) {}

  init(): void {
    this.authControllerService.init();
  }
}
