import { Observable } from "rxjs";
import { Product } from "../models";

export interface ProductsRepository {
  getProducts(): Observable<Product[]>;
}

export const ProductsRepositoryKey = Symbol("ProductsRepository");
