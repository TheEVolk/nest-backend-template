import type { Type } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import ResponseWithItem from './responseWithItem.js';
import ResponseWithItems from './responseWithItems.js';

export function ApiOkResponseWithItem<DataDto extends Type<unknown>>(
  dataDto: DataDto,
) {
  return applyDecorators(
    ApiExtraModels(ResponseWithItem, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseWithItem) },
          {
            properties: {
              item: {
                $ref: getSchemaPath(dataDto),
              },
            },
          },
        ],
      },
    }),
  );
}

export function ApiOkResponseWithItems<DataDto extends Type<unknown>>(
  dataDto: DataDto,
) {
  return applyDecorators(
    ApiExtraModels(ResponseWithItems, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseWithItems) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
}
