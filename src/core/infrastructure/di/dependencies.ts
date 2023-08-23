import { container, Lifecycle, RegistrationOptions } from "tsyringe";
import { ProductsRepositoryKey } from "../../domain/repositories";
import { ProductsRepositoryImpl } from "../repositories/products-repository-impl.ts";
import { GetProductsUseCaseKey } from "../../domain/usecases";
import { GetProductsUseCaseImpl } from "../usecases/get-products-usecase-impl.ts";
import constructor from "tsyringe/dist/typings/types/constructor";

class DIContainer {
  constructor() {}

  register<T>(
    key: symbol,
    value: constructor<T>,
    options: RegistrationOptions = { lifecycle: Lifecycle.Singleton },
  ) {
    container.register<T>(key, { useClass: value }, options);
  }

  get<T>(key: symbol) {
    return container.resolve<T>(key);
  }
}

export const di = new DIContainer();

export async function setupDependencies() {
  di.register(ProductsRepositoryKey, ProductsRepositoryImpl);
  di.register(GetProductsUseCaseKey, GetProductsUseCaseImpl);

  // wait for one second
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Dependencies setup done!");
}
