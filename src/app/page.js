import Navigation from "@/components/navigation/Navigation"
import AddTodo from "@/components/AddTodo"
import Todos from "@/components/Todos"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      {/* 
      - Wie das Design
      - Wie funktoniert das Input field
      ----
      - Was sind die einzelen steps
      - Wie zerlege die steps in weitere einzelen steps
      ---> Todos --> Todo
      - Wie sieht das ganze aus -> dumb / prototype
      - Wir fügen alle components zusammen
      - Erst dann kommt die Logik
      - Und am Ende fügen wir alles zusammen
      */}
      <main>
        <Navigation />
        <h1>Here is my todo list</h1>
        <AddTodo />
        <Todos />
      </main>
      <Footer
        bgColor="orange"
      />
    </div>
  )
}
