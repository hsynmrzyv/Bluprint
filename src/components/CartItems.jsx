// Components
import CartItem from "./CartItem";

// Hooks
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart);

  console.log(cartItems);
  return (
    <div className="border-y border-neutral-100 pt-10 pb-20 flex overflow-x-scroll gap-20">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItems;
