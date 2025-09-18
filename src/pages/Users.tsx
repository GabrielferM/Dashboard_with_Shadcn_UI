import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usuariosMock } from "@/data/data";


export function User() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Tabs defaultValue="Ativo">
        <TabsList>
          <TabsTrigger value="Ativo">Ativo</TabsTrigger>
          <TabsTrigger value="Inativo">Inativo</TabsTrigger>
        </TabsList>
        {usuariosMock.map((mockDado) => (

          <Card
            className="flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            key={mockDado.nome}
          >
            <CardHeader className="text-3xl flex flex-col items-center text-center">
              {<mockDado.icon className="w-16 h-16" />}
              {mockDado.nome}
              <Label className="bg-[#124E79] border-[#124E79] border-6 rounded-2xl text-white font-family shadow-xs">
                {mockDado.funcao}
              </Label>
            </CardHeader>
            <hr></hr>
            <CardContent className="space-y-3 p-4">
              <div className="flex gap-4">
                <div className="flex flex-col gap-4 pr-4 border-r-2">
                  <Label className="text-[20px] whitespace-nowrap">
                    E-mail: {mockDado.email}
                  </Label>
                  <Label className="text-[20px] whitespace-nowrap">
                    Telefone: {mockDado.telefone}
                  </Label>
                  <Label className="text-[20px] whitespace-nowrap">
                    CPF: {mockDado.cpf}
                  </Label>
                </div>
                <div className="flex flex-col gap-4">
                  <Label className="text-[20px] whitespace-nowrap">
                    Salario Bruto:{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(mockDado.salarioBruto)}
                  </Label>
                  <Label className="text-[20px] whitespace-nowrap">
                    Data de aniversario: {mockDado.dataNascimento}
                  </Label>
                  <Label className="text-[20px] whitespace-nowrap">
                    Gênero: {mockDado.genero}
                  </Label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-[20px]">Endereço:</Label>
                <Label className="text-[20px]">
                  {mockDado.endereco.rua} , {mockDado.endereco.numero} -{" "}
                  {mockDado.endereco.bairro}
                </Label>
                <Label className="text-[20px]">
                  {mockDado.endereco.estado},{mockDado.endereco.cidade}
                </Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </Tabs>
    </div>
  );
}

export default User;
