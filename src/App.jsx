import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {

  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<h1>Bienvenida</h1>}/>
      </Routes>
    </main>

    </>
  )
}

export default App;
