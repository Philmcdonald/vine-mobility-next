'use client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}