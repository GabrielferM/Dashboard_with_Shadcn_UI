import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Popover } from "@radix-ui/react-popover";
import { SelectValue } from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { ptBR } from "date-fns/locale";

function Users() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-[800px]">
        <form>
          <CardHeader>
            <CardTitle className="text-3xl">Fórmulario de usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-col gap-6">
              <div className="flex gap-2">
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="nome" className="text-xl text">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Digite o seu nome..."
                  />
                </div>
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="email" className="text-xl">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="usuario@gmail.com"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="cpf" className="text-xl">
                    CPF
                  </Label>
                  <Input
                    id="cpf"
                    type="text"
                    placeholder="___.___.___-__"
                    required
                  />
                </div>
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="telefone" className="text-xl">
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    type="number"
                    placeholder="(xx) xxxx-xxxx"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="funcao" className="text-xl">
                    Função
                  </Label>
                  <Input
                    id="funcao"
                    type="string"
                    placeholder="Digite a função"
                    required
                  />
                </div>
                <div className="grid gap-2 flex-1">
                  <Label htmlFor="salarioBruto" className="text-xl">
                    Salario Bruto
                  </Label>
                  <Input
                    id="salarioBruto"
                    type="number"
                    placeholder="Digite o salário bruto"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="genero" className="text-xl">
                    Gênero
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[195px]">
                      <SelectValue
                        placeholder="Selecione um gênero"
                        id="genero"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="naoBinario">Não-Binario</SelectItem>
                        <SelectItem value="naoRespoder">
                          Não-Responder
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="escolariedade" className="text-xl">
                    Escolaridade
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[275px]">
                      <SelectValue
                        placeholder="Selecione a sua escolariedade"
                        id="Escolariedade"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="ensinoFundamentalIncompleto">
                          Ensino Fundamental Incompleto
                        </SelectItem>
                        <SelectItem value="ensinoFundamentalCompleto">
                          Ensino Fundamental Completo
                        </SelectItem>
                        <SelectItem value="ensinoMedioIncompleto">
                          Ensino Médio Incompleto
                        </SelectItem>
                        <SelectItem value="ensinoMedioCompleto">
                          Ensino Médio Completo
                        </SelectItem>
                        <SelectItem value="ensinoTecnico">
                          Ensino Técnico
                        </SelectItem>
                        <SelectItem value="ensinoSuperiorIncompleto">
                          Ensino Superior Incompleto
                        </SelectItem>
                        <SelectItem value="ensinoSuperiorCompleto">
                          Ensino Superior Completo
                        </SelectItem>
                        <SelectItem value="posgraduaçãoEspecialização">
                          Pós-graduação / Especialização
                        </SelectItem>
                        <SelectItem value="mestrado">Mestrado</SelectItem>
                        <SelectItem value="doutorado">Doutorado</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="data" className="text-xl">
                    Data de nascimento
                  </Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-mona"
                      >
                        {date ? date.toLocaleDateString() : "Selecione data"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        locale={ptBR}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          setDate(date);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="situação" className="text-xl">
                    Situação
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[230px]">
                      <SelectValue placeholder="Selecione a situação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="Inativo">Inativo</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="endereço" className="text-xl">
                  Endereço
                </Label>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-3">
                    <Input
                      id="estado"
                      type="string"
                      placeholder="Estado"
                      className="basis-64"
                      required
                    />
                    <Input
                      id="cidade"
                      type="string"
                      placeholder="Cidade"
                      className="basis-64"
                      required
                    />
                  </div>
                  <Input
                    id="bairro"
                    type="string"
                    placeholder="Bairro"
                    required
                  />
                  <div className="flex gap-3">
                    <Input 
                      id="rua" 
                      type="string" 
                      placeholder="Rua"
                      className="basis-128" 
                      required 
                    />
                    <Input
                      id="numero"
                      type="string"
                      placeholder="Numero"
                      className="basis-64"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 justify-end mt-10">
            <Button type="reset" className="text-2xl bg-white text-red-600 border-red-600 border-3">
              Cancelar
            </Button>
            <Button type="submit" className="text-2xl bg-white text-green-600 border-green-600 border-3">
              Salvar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Users;
