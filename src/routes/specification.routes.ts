import { request, response, Router } from "express";
import { createSpecificationController } from "../modules/cars/model/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response)=>{
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };