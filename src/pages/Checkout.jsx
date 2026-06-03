import { Link } from "react-router-dom";

<Link to="/checkout">
    <button className="checkout-btn">
        Checkout
    </button>
</Link>
function Checkout() {
    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Phone Number" />

            <button>Place Order</button>
        </div>
    );
}

export default Checkout;
