import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { usuariosMock } from "@/data/data";
import {
  chartConfigEscolariedade,
  chartConfigEstados,
  chartDataEscolariedade,
  chartDataEstados,
  chatConfigGenero,
  chatDataGenero,
  quantidadeAtivo,
  quantidadeInativo,
  salarioMedio,
} from "@/hooks/dashboard";
import { UserRoundCheck, UserRoundX } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

// Adicione essa variável no seu global.css:
// :root {
//   --color-valor: #6366f1; /* Indigo-500 */
// }

export function Dashboard() {
  return (
    <div className="space-y-10 p-6 lg:p-10 min-h-screen">
      {/* Cards principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="rounded-2xl shadow-lg hover:shadow-2xl t">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-lg font-semibold text-[#3D769E] ">
              Ativos
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-[#3D769E]">
            <Label className="text-4xl font-bold">{quantidadeAtivo}</Label>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg hover:shadow-2xl ">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-lg font-semibold text-[#3D769E]">
              Inativos
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-[#3D769E]">
            <Label className="text-4xl font-bold ">{quantidadeInativo}</Label>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg hover:shadow-2xl">
          <CardHeader className="items-center text-center">
            <CardTitle className="text-lg font-semibold text-[#3D769E] ">
              Salário médio
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-[#3D769E]">
            <Label className="text-4xl font-bold ">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(salarioMedio)}
            </Label>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center items-center ">
        <Card className="flex w-full rounded-2xl shadow-lg hover:shadow-2xl">
          <CardHeader className="items-center">
            <CardTitle className="text-[#3D769E] text-2xl">
              Quantidada por Escolariedade
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center p-6 h-80">
            <ChartContainer
              config={chartConfigEscolariedade}
              className="h-full w-full"
            >
              <BarChart accessibilityLayer data={chartDataEscolariedade}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="grau"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <Bar dataKey="valor" fill="var(--color-valor)" radius={6} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent/>}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center gap-2">
        <Card className="w-full max-w-5xl rounded-2xl shadow-lg hover:shadow-2xl">
          <CardHeader className="items-center pb-0">
            <CardTitle className="text-[#3D769E] text-2xl">
              Quantidade por Genero
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chatConfigGenero}
              className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={chatDataGenero}
                  dataKey="visitors"
                  label
                  nameKey="genero"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="w-full  rounded-2xl shadow-lg hover:shadow-2xl">
          <CardHeader className="items-center">
            <CardTitle className="text-[#3D769E] text-2xl">
              Quantidade por Estado
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 h-90">
            <ChartContainer
              config={chartConfigEstados}
              className="mx-auto aspect-square max-h-full"
            >
              
              <BarChart
                accessibilityLayer
                data={chartDataEstados}
                layout="vertical"
                margin={{ left: -20 }}
              >
                <CartesianGrid horizontal={false} />
                <XAxis type="number" dataKey="valor" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent/>}
                />
                <Bar dataKey="valor" radius={5} />
              </BarChart>
            </ChartContainer>
            
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardContent>
            <div className="flex gap-6">
              <ScrollArea className="w-full h-72">
                <div className="p-4">
                  
                  <h4 className=" flex gap-2 mb-4 text-2xl leading-none font-medium text-[#3D769E]">
                   <UserRoundCheck className="text-green-600"/> Ativos
                  </h4>
                  
                  {usuariosMock
                    .filter((user) => user.situacao === "Ativo")
                    .map((user) => (
                      <React.Fragment key={user.nome}>
                        <div className="text-lg">{user.nome}</div>
                        <Separator className="my-3" />
                      </React.Fragment>
                    ))}
                </div>
              </ScrollArea>

              <ScrollArea className="w-full h-72">
                <div className="p-4">
                  <h4 className="flex gap-2 mb-4 text-2xl leading-none font-medium text-[#124E79]">
                    <UserRoundX className="text-red-600"/>Inativos
                  </h4>
                  {usuariosMock
                    .filter((user) => user.situacao === "Inativo") 
                    .map((user) => (
                      <React.Fragment key={user.nome}>
                        <div className="text-lg">{user.nome}</div>
                        <Separator className="my-3" />
                      </React.Fragment>
                    ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
