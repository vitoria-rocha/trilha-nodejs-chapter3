import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/entities/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/entities/repositories/implementations/CategoriesRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)