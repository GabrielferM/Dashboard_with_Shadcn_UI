import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDados } from "../data/data.ts";

function Users() {
  return(
    <section className='py-20 px-20'>
      <div className="flex gap-4 mx-auto max-w-6xl ">
        {mockDados.map((mockDado, index) =>(
          <Card key={index} className='w-full max-w-sm'>
            <CardHeader>
                <CardTitle className='text-lg'>{mockDado.nome}</CardTitle>
            </CardHeader> 
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Users;