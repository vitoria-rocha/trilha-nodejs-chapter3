import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/cars/entities/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/entities/repositories/ICategoriesRepository";

import { SpecificationRepository } from "../../modules/cars/entities/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/entities/repositories/ISpecificationRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
)