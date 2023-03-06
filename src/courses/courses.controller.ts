import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('findMany')
  findMany() {
    return 'all courses';
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return `course id: ${id}`;
  }

  @Post('create')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }
}
