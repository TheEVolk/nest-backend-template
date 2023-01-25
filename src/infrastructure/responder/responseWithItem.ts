import { ApiProperty } from '@nestjs/swagger';
import Response from './response.class.js';

export default class ResponseWithItem<T = unknown> extends Response {
  @ApiProperty()
  public item: T;
}
