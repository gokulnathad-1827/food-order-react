function Cart({ cart, increaseQty, decreaseQty, total }) {
    return (
        <div className="cart">
            <h2>🛒 Your Cart</h2>

            {cart.length === 0 ? (
                <p>Cart is Empty</p>
            ) : (
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <div>
                            <h4>{item.name}</h4>
                            <p>₹{item.price}</p>
                        </div>

                        <div className="qty">
                            <button onClick={() => decreaseQty(item.id)}>
                                -
                            </button>

                            <span>{item.qty}</span>

                            <button onClick={() => increaseQty(item.id)}>
                                +
                            </button>
                        </div>
                    </div>
                ))
            )}

            <h3>Total: ₹{total}</h3>

            <button className="checkout-btn">
                Checkout
            </button>
        </div>
    );
}

export default Cart;