import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

import { CategoriesRepository } from "../../modules/cars/entities/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/entities/repositories/ICategoriesRepository";

import { SpecificationRepository } from "../../modules/cars/entities/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/entities/repositories/ISpecificationRepository";

import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);