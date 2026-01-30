import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvModule } from './config/env.module';
import { EnvService } from './config/env.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: (envService: EnvService) => ({
        type: 'postgres',
        host: envService.dbHost,
        port: envService.dbPort,
        username: envService.dbUser,
        password: envService.dbPassword,
        database: envService.dbName,
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
