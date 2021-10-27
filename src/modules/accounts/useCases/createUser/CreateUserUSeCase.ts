
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
  constructor(
    @inject()
    private usersRepository: IUserRepository
  ){}

 async execute({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void>{
    await this.usersRepository.create({
      name,
      username, 
      email, 
      password, 
      driver_license,
    });
  }
}

export { CreateUserUseCase };