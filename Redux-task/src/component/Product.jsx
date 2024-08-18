import { useDispatch } from "react-redux";

function Product({ value }) {
  const { id, name, price } = value;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: value });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
export default Product;
