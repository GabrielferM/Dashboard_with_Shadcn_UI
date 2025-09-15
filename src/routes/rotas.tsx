import Dashboard from "@/pages/Dashboard";
//import Home from "@/pages/Home";
import Settings from "@/pages/Settings";
import Users from "@/pages/Users";
import { Route, Routes } from "react-router-dom";


export function AppRoutes(){
    return(
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}
