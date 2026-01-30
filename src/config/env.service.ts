import { Injectable } from '@nestjs/common';
import { env } from './env';

@Injectable()
export class EnvService {
  get nodeEnv(): 'development' | 'test' | 'production' {
    return env.NODE_ENV;
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  get port(): number {
    return env.PORT;
  }

  get dbHost(): string {
    return env.DB_HOST;
  }

  get dbPort(): number {
    return env.DB_PORT;
  }

  get dbName(): string {
    return env.DB_NAME;
  }

  get dbUser(): string {
    return env.DB_USER;
  }

  get dbPassword(): string {
    return env.DB_PASSWORD;
  }
}
