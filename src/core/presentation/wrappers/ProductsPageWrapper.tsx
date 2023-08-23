import { di, setupDependencies } from "../../infrastructure/di/dependencies.ts";
import {
  GetProductsUseCase,
  GetProductsUseCaseKey,
} from "../../domain/usecases";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductsPageDependenciesProvider } from "../contexts/ProductsPageDependencies";

// The lazy loaded module will wait for the dependencies to be setup before being imported
await setupDependencies();

export function ProductsPageWrapper() {
  const getProductsUseCase = di.get<GetProductsUseCase>(GetProductsUseCaseKey);

  return (
    <ProductsPageDependenciesProvider dependencies={{ getProductsUseCase }}>
      <ProductsPage />
    </ProductsPageDependenciesProvider>
  );
}
