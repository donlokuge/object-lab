import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { SceneObjectModule } from './scene-object/scene-object.module'
import { AppService } from './app.service';
import { AppController } from './app.controller';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    SceneObjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
