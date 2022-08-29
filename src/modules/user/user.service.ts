import { Inject, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { UserDTO } from "./dto";
import { UserI } from "../../common/interfaces";
import { Db } from 'mongodb'

@Injectable()
export class UserService {
  constructor(@Inject('MONGO') private database: Db) {
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async getAll() {
    const userCollection = this.database.collection('users');
    return await userCollection.find().toArray();
  }

  getOne(id: bigint) {}

  async createOne(userDTO: UserDTO): Promise<UserI> {
    return null;
  }
  updateOne() {}
  deleteOne() {}
}
