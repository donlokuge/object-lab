import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { SceneObjectService } from './scene-object.service';
import { SceneObject } from '../entities/scene-object.entity';
import { CreateSceneObjectDto } from './dto/create-scene-object.dto';
import { UpdateSceneObjectDto } from './dto/update-scene-object.dto';

@Controller('scene-objects')
export class SceneObjectController {
  constructor(private readonly sceneObjectService: SceneObjectService) {}

  @Get()
  findAll(): SceneObject[] {
    return this.sceneObjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): SceneObject {
    const object = this.sceneObjectService.findOne(id);
    if (!object) throw new NotFoundException(`SceneObject ${id} not found`);
    return object;
  }

  @Post()
  create(@Body() createDto: CreateSceneObjectDto): SceneObject {
    return this.sceneObjectService.create(createDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateSceneObjectDto
  ): SceneObject {
    const updated = this.sceneObjectService.update(id, updateDto);
    if (!updated) throw new NotFoundException(`SceneObject ${id} not found`);
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    const success = this.sceneObjectService.remove(id);
    if (!success) throw new NotFoundException(`SceneObject ${id} not found`);
  }
}
