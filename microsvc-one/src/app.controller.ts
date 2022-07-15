import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly appService: MathService) {}
  private logger = new Logger('AppController');
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.appService.accumulate(data);
  }
}
