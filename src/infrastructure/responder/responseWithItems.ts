import { ApiProperty } from '@nestjs/swagger';
import Response from './response.class.js';

export default class ResponseWithItems<T = unknown> extends Response {
  @ApiProperty()
  items: T[];

  @ApiProperty()
  total: number;
}
