import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NewsListPage } from "./pages/NewsListPage";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsListPage />
    </QueryClientProvider>
  );
};
