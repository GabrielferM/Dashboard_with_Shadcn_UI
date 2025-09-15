
import { Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow } from "@/components/ui/table";
// import { Bar, BarChart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart.tsx";
import { mockDados } from "../data/data.ts";

export function Dashboard() {
  return ( 
    <div>
      <h1>Dashboard</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-100 border border-black bg-white'>Nome</TableHead>
            <TableHead className='w-100 border border-black bg-white'>CPF</TableHead>
            <TableHead className='w-100 border border-black bg-white'>E-mail</TableHead>
            <TableHead className='w-100 border border-black bg-white'>Telefone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockDados.map((mockDado) => (
            <TableRow key={mockDado.nome}>
              <TableCell className='font-medium border border-black bg-white'>{mockDado.nome}</TableCell>
              <TableCell className='font-medium border border-black bg-white'>{mockDado.email}</TableCell>
              <TableCell className='font-medium border border-black bg-white'>{mockDado.cpf}</TableCell>
              <TableCell className='font-medium border border-black bg-white'>{mockDado.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div>
        <ChartContainer>
          <BarChart data={mockDados}>
            <Bar dataKey="nome" />
            <ChartTooltip content={<ChartTooltipContent/>} />
          </BarChart>
        </ChartContainer>
      </div> */}
    </div>
  );
}

export default Dashboard;