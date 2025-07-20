import { IsEnum, IsHexColor, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class Vector3Dto {
  @ApiProperty()
  @IsNumber()
  x: number;

  @ApiProperty()
  @IsNumber()
  y: number;

  @ApiProperty()
  @IsNumber()
  z: number;
}

export class CreateSceneObjectDto {
  @ApiProperty({ enum: ['cube', 'sphere'], description: 'Shape type' })
  @IsEnum(['cube', 'sphere'], { message: 'Type must be either cube or sphere' })
  type: 'cube' | 'sphere';

  @ApiProperty({ type: () => Vector3Dto })
  @ValidateNested()
  @Type(() => Vector3Dto)
  position: Vector3Dto;

  @ApiProperty({ type: () => Vector3Dto })
  @ValidateNested()
  @Type(() => Vector3Dto)
  scale: Vector3Dto;

  @ApiProperty({ example: '#ff0000', description: 'Hex color code' })
  @IsHexColor()
  color: string;
}
