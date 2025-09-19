import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import {
  chartConfigEscolariedade,
  chartDataEscolariedade,
  chartDataEstados,
  chatConfigGenero,
  chatDataGenero,
  quantidadeAtivo,
  quantidadeInativo,
  salarioMedio,
} from "@/hooks/dashboard";
import { Bar, BarChart, Pie, PieChart, XAxis, YAxis } from "recharts";

export function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap gap-6 p-6">
        <Card className="flex-1 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="items-center">
            <CardTitle>Ativos</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <Label>{quantidadeAtivo}</Label>
          </CardContent>
        </Card>
        <Card className="flex-1 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="items-center">
            <CardTitle>Inativos</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <Label>{quantidadeInativo}</Label>
          </CardContent>
        </Card>
        <Card className="flex-1 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="items-center">
            <CardTitle>Salario médio</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <Label>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(salarioMedio)}
            </Label>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Card className="flex w-[1000px] rounded-2xl">
          <CardHeader className="items-center">
            <CardTitle>Quantidada por Escolariedade</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <ChartContainer
              config={chartConfigEscolariedade}
              className="min-h-[200px] w-full"
            >
              <BarChart accessibilityLayer data={chartDataEscolariedade}>
                <XAxis dataKey="grau" />
                <Bar dataKey="valor" fill="var(--color-valor)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Card className="flex w-[1000px] rounded-2xl">
          <CardHeader className="items-center">
            <CardTitle>Quantidada por gênero</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chatConfigGenero}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chatDataGenero}
                  dataKey="valor"
                  nameKey="genero"
                  outerRadius={80}
                  label
                >
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Card className="flex w-[1000px] rounded-2xl">
          <CardHeader className="items-center">
            <CardTitle>Quantidada por estado</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chatConfigGenero}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <BarChart accessibilityLayer data={chartDataEstados} layout="vertical" margin={{left: 0,}}>
                <XAxis type="number" dataKey="valor" hide/>
                <YAxis dataKey="name" type="category" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0,3)}/>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>}/>
                <Bar dataKey="valor" fill="var(--color-valor)" radius={5}/>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
