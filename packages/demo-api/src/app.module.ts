import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { SceneObjectModule } from './scene-object/scene-object.module';

@Module({
  imports: [SceneObjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
