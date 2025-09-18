import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usuariosMock } from "@/data/data";
import { useState } from "react";

export function User() {
  //   cria uma variavel de estado para armazenar o status selecionado do proprio js o SetStatus, é a atulização do status
  const [status, setStatus] = useState("Ativo");

  //   cria uma varialvel que filtra os usuarios com base no status selecionado; o filter percorre todos os itens de um array e cria um novo array contendo somente os itens que passam em um teste (condição) que você define
  const filteredUsers = usuariosMock.filter((user) => user.situacao === status);

  return (
    <div className="flex flex-col gap-6 p-6">
      <Tabs defaultValue="Ativo" onValueChange={(value) => setStatus(value)}>
        <TabsList className="bg-white rounded-full p-1 w-fit mx-auto shadow">
          <TabsTrigger
            value="Ativo"
            className="data-[state=active]:bg-[#124E79] data-[state=active]:text-white rounded-full px-5 py-2 transition-colors"
          >
            Ativo
          </TabsTrigger>
          <TabsTrigger
            value="Inativo"
            className="data-[state=active]:bg-[#124E79] data-[state=active]:text-white rounded-full px-5 py-2 transition-colors"
          >
            Inativo
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((mockDado) => (
          <Card
            className="flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            key={mockDado.nome}
          >
            <CardHeader className="text-3xl flex flex-col items-center text-center text-[#124E79]">
              {<mockDado.icon className="w-16 h-16 font-[#124E79]" />}
              {mockDado.nome}
              <Label className="bg-[#124E79] border-[#124E79] border-6 rounded-2xl text-white font-family shadow-xs">
                {mockDado.funcao}
              </Label>
            </CardHeader>
            <hr></hr>
            <CardContent className="space-y-3 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex flex-col gap-4 pr-4 text-[#124E79]">
                  <Label className="text-[12px]">
                    <strong>E-mail:</strong> {mockDado.email}
                  </Label>
                  <Label className="text-[12px] whitespace-nowrap">
                    <strong>Telefone:</strong> {mockDado.telefone}
                  </Label>
                  <Label className="text-[12px] whitespace-nowrap">
                    <strong>CPF:</strong> {mockDado.cpf}
                  </Label>
                </div>
                <div className="flex flex-col gap-4 text-[#124E79]">
                  <Label className="text-[12px] whitespace-nowrap">
                    <strong>Salario Bruto:</strong>{" "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(mockDado.salarioBruto)}
                  </Label>
                  <Label className="text-[12px] whitespace-nowrap">
                    <strong>Data de aniversario:</strong> {mockDado.dataNascimento}
                  </Label>
                  <Label className="text-[12px] whitespace-nowrap">
                    <strong>Gênero:</strong> {mockDado.genero}
                  </Label>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[#124E79]">
                <Label className="text-[12px]">
                  <strong>Endereço:</strong>{mockDado.endereco.rua} , {mockDado.endereco.numero}{" "}
                  - {mockDado.endereco.bairro}
                </Label>
                <Label className="text-[12px]">
                  {mockDado.endereco.estado},{mockDado.endereco.cidade}
                </Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default User;
