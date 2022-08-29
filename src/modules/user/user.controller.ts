import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getAll() {
    const data = await this.userService.getAll();
    return {
      message: 'getAll',
      data,
    }
  }

  @Post()
  async create(@Body() userDTO: UserDTO) {
    const data = await this.userService.createOne(userDTO);
    return {
      message: 'createOne',
      data
    }
  }
}
