
    //Add coluna avatar na tabela de users
    //yarn typeorm migration:create -n AlterUserAddAvatar
    //faz a inserção da tabela no arquivo da migration criada
    //yarn typeorm migration:run
    //insere o arquivo de entidades users.ts

import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

    //REfatorar usuário com coluna avatar
    //Configurar upload no multer
    //Criar regra de negócio do upload
    //Criar controller

interface IRequest{
  user_id:string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ user_id, avatar_file}: IRequest): Promise<void> {
   const user = await this.userRepository.findById(user_id);

   user.avatar = avatar_file;
   
   await this.userRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };