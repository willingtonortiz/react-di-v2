import { useQuery } from "@tanstack/react-query";
import { firstValueFrom } from "rxjs";
import { Link } from "react-router-dom";
import { useProductsPageDependencies } from "../../contexts/ProductsPageDependencies";

export function ProductsPage() {
  const { getProductsUseCase } = useProductsPageDependencies();

  const { isFetching, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => firstValueFrom(getProductsUseCase.execute()),
    initialData: [],
  });

  return (
    <div>
      <h1>Products Page</h1>

      {isFetching ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}

      <Link to={"/"}>Return Home</Link>
    </div>
  );
}
