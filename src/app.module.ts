import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { ReviewController } from './controllers/review/review.controller';
import { CourseController } from './controllers/course/course.controller';
import { BootcampController } from './controllers/bootcamp.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, UserController, ReviewController, CourseController],
  providers: [AppService],
})
export class AppModule {}
