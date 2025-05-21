import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cartItems, onRemoveFromCart }) {
  return (
    <div>
      <h1>Cart Page</h1>
      <ShoppingCart cartItems={cartItems} onRemove={onRemoveFromCart} showFull={true} />
    </div>
  );
}

export default CartPage;
