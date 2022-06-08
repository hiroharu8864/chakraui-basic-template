import { ChakraProvider } from "@chakra-ui/react";

import { globalTheme } from "./theme/globalTheme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={globalTheme}>
      <Router />
    </ChakraProvider>
  );
}
