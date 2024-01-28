import "./App.css";
import Home from "./pages/home/home"
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggler";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
