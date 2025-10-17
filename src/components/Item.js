import React , {useState} from "react";
import items from "../data/items";


function Item({ name, category }) {
  const [inInCart, setIsInCart] = useState(false);
  
  function handleAddToCart (items) {
    setIsInCart((prev) => !prev)  
  }
   
  return (
    <li className={inInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>{inInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );

}

export default Item;
