import { FC, memo } from "react";
import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export const QueryCheck: FC = memo(() => {
  return <p>QueryCheck Page</p>;
});
