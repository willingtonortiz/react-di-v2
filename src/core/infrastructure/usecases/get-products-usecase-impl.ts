import { delay, Observable } from "rxjs";
import { inject, injectable } from "tsyringe";
import {
  type ProductsRepository,
  ProductsRepositoryKey,
} from "../../domain/repositories";
import { Product } from "../../domain/models";
import { GetProductsUseCase } from "../../domain/usecases";

@injectable()
export class GetProductsUseCaseImpl implements GetProductsUseCase {
  constructor(
    @inject(ProductsRepositoryKey)
    private readonly productsRepository: ProductsRepository,
  ) {
    console.log("GetProductsUseCaseImpl created!");
  }

  execute(): Observable<Product[]> {
    return this.productsRepository.getProducts().pipe(delay(2000));
  }
}
