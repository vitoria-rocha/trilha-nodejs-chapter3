import { JsonWebTokenError } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

interface IRequest{
  email: string;
  password: string;
}

interface IResponse{
  user: {
    name: string,
    email: string,
  },
  token: string,
}

@injectable()
class AuthenticateUserUseCase{
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){}
  async execute({email, password}: IRequest): Promise<IResponse>{
    //Usuario existe, precisa do usersrepository
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new Error ("Email or password incorrect!");
    }
    
    //Senha correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Email or password incorrect");
    }

    //Gerar token no site md5 hash generator
    const token = sign({}, "5030ac5a7d06ad257defb8b66a892d23", {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      user, 
      token,
    };


  }

}

export { AuthenticateUserUseCase };