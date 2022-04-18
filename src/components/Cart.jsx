import { useCart } from "react-use-cart"
import {Button, Container} from "react-bootstrap";

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;
  
    return (
      <Container className="cart-container m-3" sticky='top' >
        <h5>Cart ({totalUniqueItems})</h5>
  
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.name}  €{item.price.toFixed(2)}  <img id="country-flag" src={item.flag} alt=""/>
              <br></br>
              <Button className="m-1"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <Button className="m-1"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <Button className="m-1" variant='danger' onClick={() => removeItem(item.id)}>&times;</Button>
            </li>
          ))}
        </ul>
        <h5>Total:€{cartTotal.toFixed(2)}</h5>
      </Container>
    );
  }

  export default Cart;
  