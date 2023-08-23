import { Observable } from "rxjs";
import { Product } from "../models";

export interface GetProductsUseCase {
  execute(): Observable<Product[]>;
}

export const GetProductsUseCaseKey = Symbol("GetProductsUseCase");
