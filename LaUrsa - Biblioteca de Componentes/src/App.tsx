
import { Avatar } from "./components/ui/avatar"
import { AvatarImage } from "./components/ui/avatar"
import { AvatarFallback } from "./components/ui/avatar"

export function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">La Ursa - Biblioteca de Componentes</h1>
      
      <Avatar className="size-22">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      
      
    </>
  )
}

export default App
