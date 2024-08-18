import Product from "./Product";
function ProductList() {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 200 },
  ];
  return (
    <>
      <h1>PRODUCTS:</h1>
      <div className="Products">
        {products.map((product) => {
          return <Product key={product.id} value={product} />;
        })}
      </div>
    </>
  );
}
export default ProductList;
