import { Observable, of } from "rxjs";
import { injectable } from "tsyringe";

import { ProductsRepository } from "../../domain/repositories";
import { Product } from "../../domain/models";

@injectable()
export class ProductsRepositoryImpl implements ProductsRepository {
  constructor() {
    console.log("ProductsRepositoryImpl created!");
  }

  getProducts(): Observable<Product[]> {
    return of([
      { id: "1", name: "Product 1", price: 100 },
      { id: "2", name: "Product 2", price: 200 },
      { id: "3", name: "Product 3", price: 300 },
    ]);
  }
}
