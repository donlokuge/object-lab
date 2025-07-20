import { SceneObject, Vector3 } from '../entities/scene-object.entity';
import { SceneObjectService } from './scene-object.service';

describe('SceneObjectService', () => {
  let service: SceneObjectService;

  beforeEach(() => {
    service = new SceneObjectService();
  });

  it('should create a scene object', () => {
    const input = {
      type: 'cube',
      position: { x: 1, y: 2, z: 3 },
      scale: { x: 1, y: 1, z: 1 },
      color: '#ffffff',
    };

    const result = service.create(input);
    expect(result).toBeInstanceOf(SceneObject);
    expect(result.position).toEqual(new Vector3(1, 2, 3));
  });

  it('should find all objects', () => {
    service.create({
      type: 'cube',
      position: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: '#000000',
    });

    const all = service.findAll();
    expect(all.length).toBe(1);
  });
});
