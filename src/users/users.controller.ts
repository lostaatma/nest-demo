import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [];
  }

  // get using query way
  @Get()
  getUsers(@Query('name') name: string) {
    return [{ name }];
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return {
      id,
    };
  }

  //   @Post()
  //   createUser() {
  //     return {};
  //   }
  @Post()
  createUser(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.send('Created');
  }
  /**
   * Updates a user
   * @param id the id of the user to update
   */
  @Put(':id')
  updateUser(@Param('id') id: string) {
    return { id };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
