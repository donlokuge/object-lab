import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SceneObject, Vector3 } from '../entities/scene-object.entity';
import {
  createSceneObjectSchema,
  updateSceneObjectSchema,
} from './schemas/scene-object.schema';

@Injectable()
export class SceneObjectService {
  private sceneObjects: SceneObject[] = [];

  findAll(): SceneObject[] {
    return this.sceneObjects;
  }

  findOne(id: string): SceneObject | undefined {
    return this.sceneObjects.find((obj) => obj.id === id);
  }

  create(data: unknown): SceneObject {
    const parsed = createSceneObjectSchema.parse(data);

    const newObject = new SceneObject(
      randomUUID(),
      parsed.type,
      new Vector3(parsed.position.x, parsed.position.y, parsed.position.z),
      new Vector3(parsed.scale.x, parsed.scale.y, parsed.scale.z),
      parsed.color
    );

    this.sceneObjects.push(newObject);
    return newObject;
  }

  update(id: string, data: unknown): SceneObject | undefined {
    const index = this.sceneObjects.findIndex((obj) => obj.id === id);
    if (index === -1) return undefined;

    const existing = this.sceneObjects[index];
    const parsed = updateSceneObjectSchema.parse(data);

    if (parsed.position) {
      existing.moveTo(
        new Vector3(parsed.position.x, parsed.position.y, parsed.position.z)
      );
    }
    if (parsed.scale) {
      existing.resize(
        new Vector3(parsed.scale.x, parsed.scale.y, parsed.scale.z)
      );
    }
    if (parsed.color) {
      existing.color = parsed.color;
    }
    if (parsed.type) {
      existing.type = parsed.type;
    }

    return existing;
  }

  remove(id: string): boolean {
    const index = this.sceneObjects.findIndex((obj) => obj.id === id);
    if (index === -1) return false;

    this.sceneObjects.splice(index, 1);
    return true;
  }
}
