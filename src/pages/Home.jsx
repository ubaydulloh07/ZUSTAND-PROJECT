import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="container">
      <h1>Mahsulotlar</h1>
      <div className="product-list">
      <ProductList />
      </div>
    </div>
  );
}

export default Home;


