import { Injectable } from '@angular/core';
import { ConfigService } from '@nestjs/config';
import { DbConfiguration, AuthConfiguration } from './configuration.model';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  getPort(): string {
    return this.configService.get<string>('port');
  }

  getAuth(): AuthConfiguration {
    return this.configService.get<AuthConfiguration>('auth0');
  }

  static getDbUri(configService: ConfigService) {
    const dbConfig = configService.get<DbConfiguration>('database');
    return `mongodb+srv://${dbConfig.u}:${dbConfig.p}@${dbConfig.url}/${dbConfig.dbName}?retryWrites=true&w=majority`;
  }
}
