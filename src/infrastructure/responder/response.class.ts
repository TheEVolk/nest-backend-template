import { ApiProperty } from '@nestjs/swagger';

export default class Response {
  @ApiProperty()
  public isSuccess: boolean;
}
