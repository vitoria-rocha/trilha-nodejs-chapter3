import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
/* QUando eu faço uma requisição o decode me retorna alguams informações no terminal
    console.log(decoded);
 {
  iat: 1636484675,
  exp: 1636571075,
  sub: 'ee615765-0824-47a3-a96d-56ead95b453c'
}
mas eu preciso só do SUB, por isso criaremos a interface
*/
interface IPayload{
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  
  const authHeader = request.headers.authorization;
  
  if (!authHeader){
    throw new AppError("Token missing", 401);
  }

  /* [0] Bearer
     [1] token 9
  */
  const [, token] = authHeader.split(" ");
  try{
    //const decoded = verify(token, "5030ac5a7d06ad257defb8b66a892d23");
    //console.log(decoded);
    const { sub: user_id } = verify(token, "5030ac5a7d06ad257defb8b66a892d23") as IPayload;
    
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if(!user){
      throw new AppError("user does not exists!", 401);
    }

    next();
  } catch{
    throw new AppError("invalid token!", 401);
  }
}