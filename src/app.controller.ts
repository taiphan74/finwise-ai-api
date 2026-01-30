import { Controller, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiServiceUnavailableResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import type { HealthResponse } from './app.service';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({ summary: 'Health check' })
  @ApiOkResponse({
    description: 'Service is healthy',
    schema: {
      example: { status: 'ok', timestamp: '2026-01-30T10:00:00.000Z' },
    },
  })
  health(): HealthResponse {
    return this.appService.health();
  }

  @Get('health/db')
  @ApiOperation({ summary: 'Database connectivity check' })
  @ApiOkResponse({
    description: 'Database is reachable',
    schema: {
      example: { status: 'ok', timestamp: '2026-01-30T10:00:00.000Z' },
    },
  })
  @ApiServiceUnavailableResponse({
    description: 'Database unavailable',
    schema: {
      example: {
        statusCode: 503,
        message: 'Database unavailable: connection error',
        error: 'Service Unavailable',
      },
    },
  })
  dbHealth(): Promise<HealthResponse> {
    return this.appService.dbHealth();
  }
}
