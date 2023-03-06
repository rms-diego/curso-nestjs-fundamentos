import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('findMany')
  findAll() {
    return 'all courses';
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: number) {
    return `course id: ${id}`;
  }

  @Post('create')
  create(@Body() body) {
    return body;
  }
}
