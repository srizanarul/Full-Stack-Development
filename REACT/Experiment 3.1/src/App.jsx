import './App.css'
import ProductsList from './ProductList'

function App() {
  return (
    <>
      <ProductsList name="Laptop" price="50000" stock="Available" />
      <ProductsList name="Mobile" price="30000" stock="Out of Stock" />
      <ProductsList name="Tablet" price="20000" stock="Available" />
    </>
  );
}

export default App
