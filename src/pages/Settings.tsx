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

function Settings() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-[800px] text-[#063B60]">
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
                    type="string"
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
                    <SelectTrigger className="w-[300px]">
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
                    <SelectTrigger className="w-[300px]">
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
                        className="w-[300px] justify-between"
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
                    <SelectTrigger className="w-[300px]">
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
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 flex-wrap">
                  <div className="grid gap-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="CEP" type="string" placeholder="xxxxxx-xx"  className="w-[120px]" required />
                  </div>
                  <div className="flex-1 grid gap-2">
                    <Label htmlFor="endereço">
                      Endereço
                    </Label>
                    <Input
                      id="endereço"
                      type="string"
                      placeholder="Rua, Av, Lagrouro.."
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="numero">
                      Numero
                    </Label>
                    <Input
                      id="cidade"
                      type="string"
                      placeholder="N°"
                      className="w-[100px]"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div className="flex flex-col flex-1 gap-2">
                    <Label htmlFor="bairro">
                      Bairro
                    </Label>
                    <Input
                      id="rua"
                      type="string"
                      placeholder="Digite o nome do bairro"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <Label htmlFor="idade">
                      Cidade
                    </Label>
                    <Input
                      id="numero"
                      type="string"
                      placeholder="Cidade"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="estado">
                      Estado
                    </Label>
                    <Input
                      id="uf"
                      type="string"
                      placeholder="UF"
                      className="w-[100px]"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 justify-end mt-10">
            <Button
              type="reset"
              variant="cancel"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="salve"
              
            >
              Salvar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Settings;
