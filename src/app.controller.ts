import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('hello-world')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello world' })
  @ApiResponse({
    status: 200,
    description: 'Hello world!',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
