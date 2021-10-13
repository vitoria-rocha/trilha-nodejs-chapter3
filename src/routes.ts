import { Request, Response } from 'express'; 
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request, response: Response){
 
  CreateCourseService.execute({
    name:"nodejs", 
    educator: "vitória",
    duration: 10
  });

  CreateCourseService.execute({
    name:"reactjs", 
    educator: "diego"
  });

  return response.send();
} 