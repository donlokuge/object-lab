/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * Scene API
 * OpenAPI spec version: 1.0
 */
import type { UpdateSceneObjectDtoType } from './updateSceneObjectDtoType';
import type { Vector3Dto } from './vector3Dto';

export interface UpdateSceneObjectDto {
  type?: UpdateSceneObjectDtoType;
  position?: Vector3Dto;
  scale?: Vector3Dto;
  color?: string;
}
