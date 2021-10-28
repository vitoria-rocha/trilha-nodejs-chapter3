import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){}

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void>{
    await this.usersRepository.create({
      name,
      email, 
      password, 
      driver_license,
    });
  }
}

export { CreateUserUseCase };