import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ChartColumnDecreasing, ChevronUp, Settings, User } from "lucide-react";
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
        nome: "Usuários",
        urls: "/users",
        icon: User
    }
];
export function AppSideBar(){
    return(
        <Sidebar className="w-60">
            <SidebarContent className="border-r border-black bg-gradient-to-t from-[#124E79] to-[#3D769E]  flex flex-col h-full">
                <SidebarGroup>
                    <div className="flex items-center justify-between h-20">
                        <span className="text-[16px] font-normal  text-white ">User agilizer</span>
                        <img src="/chart-pie.svg" alt="Logo" className=" w-16 h-16  object-contain m-1 mt-1"></img>
                    </div>
                    <hr></hr>
                </SidebarGroup>
                <SidebarGroup className="border-border p-3 mt-10 ">
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-4">
                        {url.map((item) => (
                            <SidebarMenuItem key={item.urls}>
                            <SidebarMenuButton asChild className="text-2xl font-normal  text-white">
                                <Link to={item.urls}>{<item.icon className="w-4 h-4 flex  text-white" />} {item.nome}</Link>
                            </SidebarMenuButton>
                            <hr></hr>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter className="mt-auto">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton className=" text-white font-normal">
                                        Username
                                        <ChevronUp className="ml-auto"/>
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                                    <DropdownMenuItem>
                                        <span>Conta</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Entrar</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}