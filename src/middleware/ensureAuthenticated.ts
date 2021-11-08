import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  
  const authHeader = request.headers.authorization;
  
  if (!authHeader){
    throw new Error("Token missing");
  }

  /* [0] Bearer
     [1] token 9
  */
  const [, token] = authHeader.split(" ");
  verify(token, )
}