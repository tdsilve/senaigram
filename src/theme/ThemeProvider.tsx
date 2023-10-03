"use client";

import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
  CssBaseline,
} from "@mui/material";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#fb55fb",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fcdbfc",
    },
    common: {
      black: "#000",
    },
    info: {
      main: "#3e3e3e",
    },
    action: {
      disabledBackground: "#fcdbfc",
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
