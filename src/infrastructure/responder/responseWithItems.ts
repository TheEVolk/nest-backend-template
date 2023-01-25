import { ApiProperty } from '@nestjs/swagger';
import Response from './response.class.js';

export default class ResponseWithItems<T = unknown> extends Response {
  @ApiProperty()
  public items: T[];

  @ApiProperty()
  public total: number;
}
