import { PartialType } from '@nestjs/mapped-types';
import { CreateSceneObjectDto } from './create-scene-object.dto';

export class UpdateSceneObjectDto extends PartialType(CreateSceneObjectDto) {}
