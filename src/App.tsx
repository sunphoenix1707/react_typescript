import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"


const App = () => {
  return (
    <main>
      <h1> React + typescript</h1>
      <Navbar/>
      <AddToDo/>
      <Todos />
    </main>
  )
}

export default App
