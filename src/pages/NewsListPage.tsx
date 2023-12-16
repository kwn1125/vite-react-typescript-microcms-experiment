import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { NewsListContainer } from "@/features/news/container/NewsListContainer";

export const NewsListPage = () => {
  return (
    <ErrorBoundary fallback={<h1>Error!!!</h1>}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NewsListContainer />
      </Suspense>
    </ErrorBoundary>
  );
};
