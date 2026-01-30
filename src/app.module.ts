import { Module } from '@nestjs/common';
import { EnvService } from './config/env.service';

@Module({
  imports: [],
  controllers: [],
  providers: [EnvService],
})
export class AppModule {}
