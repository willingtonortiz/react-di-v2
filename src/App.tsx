import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HomePage } from "./core/presentation/pages/HomePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const LazyProductsPage = lazy(() =>
  import("./core/presentation/wrappers/ProductsPageWrapper.tsx").then((m) => ({
    default: m.ProductsPageWrapper,
  })),
);

const LazyAboutPage = lazy(() =>
  import("./core/presentation/pages/AboutPage/AboutPage.tsx").then((m) => ({
    default: m.AboutPage,
  })),
);

function App() {
  useEffect(() => {}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          {/* If we import the component directly, its dependencies will be imported */}
          {/*<Route path="products" element={<ProductsPage />} />*/}

          {/* If we lazily import, then neither the component nor its dependencies will be imported */}
          <Route
            path="products"
            element={
              <Suspense fallback={<p>Loading LazyProductsPage component</p>}>
                <LazyProductsPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<p>Loading LazyAboutPage component</p>}>
                <LazyAboutPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
