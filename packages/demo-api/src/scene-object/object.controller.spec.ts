import { Test, TestingModule } from '@nestjs/testing';
import { SceneObjectService } from './scene-object.service';
import { SceneObjectController } from './scene-object.controller';
import { SceneObject, Vector3 } from '../entities/scene-object.entity';
import { CreateSceneObjectInput } from './schemas/scene-object.schema';

describe('SceneObjectController', () => {
  let controller: SceneObjectController;
  let service: SceneObjectService;

  const mockSceneObject = new SceneObject(
    '123',
    'cube',
    new Vector3(0, 0, 0),
    new Vector3(1, 1, 1),
    '#ffffff'
  );

  const mockService = {
    findAll: jest.fn(() => [mockSceneObject]),
    findOne: jest.fn((id: string) =>
      id === '123' ? mockSceneObject : undefined
    ),
    create: jest.fn((data) => ({
      ...mockSceneObject,
      ...data,
      id: 'generated-id',
    })),
    update: jest.fn((id, data) =>
      id === '123' ? { ...mockSceneObject, ...data } : undefined
    ),
    remove: jest.fn((id) => id === '123'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SceneObjectController],
      providers: [
        {
          provide: SceneObjectService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<SceneObjectController>(SceneObjectController);
    service = module.get<SceneObjectService>(SceneObjectService);
  });

  it('should return all scene objects', () => {
    const result = controller.findAll();
    expect(result).toEqual([mockSceneObject]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one scene object by id', () => {
    const result = controller.findOne('123');
    expect(result).toEqual(mockSceneObject);
    expect(service.findOne).toHaveBeenCalledWith('123');
  });

  it('should throw NotFoundException for invalid id', () => {
    expect(() => controller.findOne('999')).toThrowError(
      'SceneObject 999 not found'
    );
  });

  it('should create a new scene object', () => {
    const input: CreateSceneObjectInput = {
      type: 'cube',
      position: { x: 1, y: 1, z: 1 },
      scale: { x: 1, y: 1, z: 1 },
      color: '#00ff00',
    };
    const result = controller.create(input);
    expect(result.id).toBe('generated-id');
    expect(service.create).toHaveBeenCalledWith(input);
  });

  it('should update a scene object', () => {
    const update = { color: '#000000' };
    const result = controller.update('123', update);
    expect(result.color).toBe('#000000');
    expect(service.update).toHaveBeenCalledWith('123', update);
  });

  it('should throw NotFoundException on failed update', () => {
    expect(() => controller.update('999', { color: '#000' })).toThrowError(
      'SceneObject 999 not found'
    );
  });

  it('should delete a scene object', () => {
    const result = controller.remove('123');
    expect(result).toBeUndefined();
    expect(service.remove).toHaveBeenCalledWith('123');
  });

  it('should throw NotFoundException on failed delete', () => {
    expect(() => controller.remove('999')).toThrowError(
      'SceneObject 999 not found'
    );
  });
});
