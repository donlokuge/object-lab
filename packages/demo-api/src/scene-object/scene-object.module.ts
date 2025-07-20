import { Module } from '@nestjs/common';
import { SceneObjectController } from './scene-object.controller';
import { SceneObjectService } from './scene-object.service';

@Module({
  controllers: [SceneObjectController],
  providers: [SceneObjectService],
})
export class SceneObjectModule {}
