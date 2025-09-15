import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ChartColumnDecreasing, Settings, User } from "lucide-react";
import { Link } from 'react-router-dom';

const url = [
    { 
        nome: "Dashboard",
        urls: "/dashboard",
        icon: ChartColumnDecreasing
    },
    {
        nome: "Configurações",
        urls: "/settings",
        icon: Settings
    },
    {
        nome: "Usuarios",
        urls: "/users",
        icon: User
    }
];
export function AppSideBar(){
    return(
        <Sidebar>
            <SidebarContent className="bg-gray-300 border-r border-black">
                <SidebarGroup className="border-border p-3 gap-y-20">
                <SidebarGroupLabel className="text-5xl">Logo</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="space-y-2">
                    {url.map((item) => (
                        <SidebarMenuItem key={item.urls}>
                        <SidebarMenuButton asChild className="text-2xl font-mono">
                            <Link to={item.urls}>{<item.icon className="w-4 h-4 flex" />} {item.nome}</Link>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        // <Sidebar className="" >
        //     <SidebarContent className="border-border">
        //         <SidebarGroup className="border-border p-3 text-2xl space-y-2">
        //             <SidebarGroupLabel>Application</SidebarGroupLabel>
        //                 <Link to="/dashboard"><ChartColumnDecreasing className="w-4 h-4 flex"/> Dashboard</Link>
        //                 <Link to="/settings">Configurações</Link>
        //                 <Link to="/users">Usuários</Link>
        //         </SidebarGroup>
        //     </SidebarContent>
        //     <SidebarFooter>Rodapé</SidebarFooter>
        // </Sidebar> 
    )
}