import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/rotas";
import { AppSideBar } from "./hooks/sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SidebarProvider>
          <AppSideBar />
          <SidebarTrigger/>
          <main className="flex-1 flex flex-col justify-center items-center p-8"> 
            <AppRoutes />
          </main>
        </SidebarProvider>
      </div>
    </BrowserRouter>
  );
}
