import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

export default App;
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}
