import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usuariosMock } from "@/data/data";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  Phone,
  Banknote,
  VenusAndMars,
} from "lucide-react";

export function User() {
  // cria uma variável de estado para armazenar o status selecionado
  const [status, setStatus] = useState("Ativo");

  // filtra os usuários com base no status selecionado
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((mockDado) => (
          <Card
            key={mockDado.nome}
            className="flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <CardHeader className="text-3xl flex flex-col items-center text-center text-[#124E79]">
              {mockDado.icon && (
                <mockDado.icon className="w-16 h-16 text-[#124E79]" />
              )}
              {mockDado.nome}
              <Label className="bg-[#124E79] border-[#124E79] border-6 rounded-2xl text-white mt-2 px-3 py-1 shadow-xs">
                {mockDado.funcao}
              </Label>
            </CardHeader>

            <hr />

            <CardContent className="space-y-4 p-5 text-gray-700 ">
              <div className="space-y-3">
                <h3 className="text-[#124E79] text-2xl font-semibold">
                  Contado
                </h3>
                <p className="flex items-center gap-2 text-lg">
                  <Mail className="w-4 h-4 text-[#124E79]" />
                  {mockDado.email}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <Phone className="w-4 h-4 text-[#124E79]" />
                  {mockDado.telefone}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <CreditCard className="w-4 h-4 text-[#124E79]" />
                  {mockDado.cpf}
                </p>
              </div>
              <h3 className="text-[#124E79] text-2xl font-semibold">
                Informações
              </h3>
              <div className="flex flex-wrap gap-10">
                <p className="flex items-center gap-2 text-lg">
                  <Banknote className="text-[#124E79] w-4 h-4" />{" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(mockDado.salarioBruto)}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <VenusAndMars className="w-4 h-4 text-[#124E79]" />{" "}
                  {mockDado.genero}
                </p>
              </div>
              <p className="flex items-center gap-2 text-lg">
                <Calendar className="w-4 h-4 text-[#124E79]" />
                {mockDado.dataNascimento}
              </p>
              <div className="space-y-1">
                <h3 className="text-[#124E79] text-2xl font-semibold">
                  Endereço
                </h3>
                <p className="flex items-center gap-2 text-lg">
                  <MapPin className="w-4 h-4 text-[#124E79]" />
                  {mockDado.endereco.rua}, {mockDado.endereco.numero} -{" "}
                  {mockDado.endereco.bairro}
                </p>
                <p className="text-lg text-[#124E79]">
                  {mockDado.endereco.estado}, {mockDado.endereco.cidade}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default User;
