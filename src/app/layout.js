import "./globals.css";
import { Providers } from "@/redux/provider";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/utils/theme";

export const metadata = {
  title: "Ankasa",
  description: "Find your Flight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
