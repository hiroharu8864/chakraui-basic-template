import { FC, memo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevTools } from "react-query-devtools";
import { BrandGithub } from "tabler-icons-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export const QueryCheck: FC = memo(() => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevTools initialIsOpen={false} />
    </QueryClientProvider>
  );
});
