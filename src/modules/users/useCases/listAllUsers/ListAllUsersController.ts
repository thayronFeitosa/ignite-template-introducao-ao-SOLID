import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let all = [];
    try {
      all = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
    } catch (error) {
      return response.status(400).json({ error: "List users is empty" });
    }
    return response.status(200).json(all);
  }
}

export { ListAllUsersController };
