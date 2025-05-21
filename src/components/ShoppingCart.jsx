import Button from './Button';

function ShoppingCart({ cartItems, onRemove, showFull = false }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
      <h3>Shopping Cart ({totalItems} items)</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>
            <strong>{item.title}</strong> × {item.quantity}
            <div>${item.price * item.quantity}</div>
            <Button onClick={() => onRemove(item.id)} variant="danger">Remove</Button>
          </li>
        ))}
      </ul>
      {showFull && (
        <>
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Total: ${totalPrice}</div>
          <Button onClick={() => alert(`Checkout complete: $${totalPrice}`)} variant="success">Checkout</Button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
