import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [ConfigModule.forRoot({ expandVariables: true }), CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
