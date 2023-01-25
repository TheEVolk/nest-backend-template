import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('/health')
export default class HealthController {
  @Get()
  @ApiOperation({
    summary: 'Only returns code 200'
  })
  public async handler() {}
}
