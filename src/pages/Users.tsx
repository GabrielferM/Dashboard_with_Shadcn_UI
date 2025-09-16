import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover } from "@radix-ui/react-popover";

function Users() {
  return(
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Fórmulario de usuário</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
              <div className=" flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" type="nome" placeholder="Digite o seu nome..."/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="1@gmail.com"/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" type="text" placeholder="___.___.___-__" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="data">Data</Label>
                  <Popover open></Popover>
                </div>
              </div>
          </CardContent>
          <CardFooter className=" gap-2">
            <Button type="submit" className="w-full">
              Salvar
            </Button>
            <Button type="reset" className="w-full">
              Cancelar
            </Button>
          </CardFooter>
        </form>
      </Card>
  )
}

export default Users;