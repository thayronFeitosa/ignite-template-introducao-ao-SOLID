import { response } from "express";

import { listAllUsersController } from ".";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    if (!userAlreadyExists) {
      throw new Error("User does not exists");
    }

    if (!userAlreadyExists.admin) {
      throw new Error("User does not have permission");
    }

    const list = this.usersRepository.list();
    return list;
  }
}

export { ListAllUsersUseCase };
