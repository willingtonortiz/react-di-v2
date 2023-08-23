import { createContext, ReactNode, useContext } from "react";
import { GetProductsUseCase } from "../../../domain/usecases";

type ProductsPageDependencies = {
  getProductsUseCase: GetProductsUseCase;
};

const ProductsPageDependenciesContext = createContext<ProductsPageDependencies>(
  {
    getProductsUseCase: {} as GetProductsUseCase,
  },
);

type ProductsPageDependenciesProviderProps = {
  dependencies: ProductsPageDependencies;
  children: ReactNode;
};

export function ProductsPageDependenciesProvider({
  dependencies,
  children,
}: ProductsPageDependenciesProviderProps) {
  return (
    <ProductsPageDependenciesContext.Provider value={dependencies}>
      {children}
    </ProductsPageDependenciesContext.Provider>
  );
}

export function useProductsPageDependencies() {
  return useContext(ProductsPageDependenciesContext);
}
