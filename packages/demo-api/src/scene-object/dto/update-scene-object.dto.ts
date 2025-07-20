import { Vector3Dto } from './create-scene-object.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsHexColor, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSceneObjectDto {
  @ApiProperty({ enum: ['cube', 'sphere'], required: false })
  @IsEnum(['cube', 'sphere'], { message: 'Type must be either cube or sphere' })
  type?: 'cube' | 'sphere';

  @ApiProperty({ type: () => Vector3Dto, required: false })
  @ValidateNested()
  @Type(() => Vector3Dto)
  position?: Vector3Dto;

  @ApiProperty({ type: () => Vector3Dto, required: false })
  @ValidateNested()
  @Type(() => Vector3Dto)
  scale?: Vector3Dto;

  @ApiProperty({ example: '#ff0000', required: false })
  @IsHexColor()
  color?: string;
}
