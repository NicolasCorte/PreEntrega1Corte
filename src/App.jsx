import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <main className="navbar-main">
      <Navbar />
      <ItemListContainer greeting="Tienda de Zapatillas" />
    </main>
  );
}

export default App;
