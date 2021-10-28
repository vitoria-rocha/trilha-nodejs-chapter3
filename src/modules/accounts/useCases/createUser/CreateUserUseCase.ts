import { hash } from "bcrypt";
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
    
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new Error("user already exists");
    }

    const passwordHash = await hash(password,8);

    await this.usersRepository.create({
      name,
      email, 
      password: passwordHash, 
      driver_license,
    });
  }
}

export { CreateUserUseCase };