import { IsEnum, IsString, IsHexColor, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Vector3Dto {
  @IsString()
  x: number;

  @IsString()
  y: number;

  @IsString()
  z: number;
}

export class CreateSceneObjectDto {
  @IsEnum(['cube', 'sphere'], { message: 'Type must be either cube or sphere' })
  type: 'cube' | 'sphere';

  @ValidateNested()
  @Type(() => Vector3Dto)
  position: Vector3Dto;

  @ValidateNested()
  @Type(() => Vector3Dto)
  scale: Vector3Dto;

  @IsHexColor()
  color: string;
}
