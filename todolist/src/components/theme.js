import React from "react";
import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});

export default Theme;