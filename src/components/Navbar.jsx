function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <h2>🍔 Food Order</h2>

            <div>
                🛒 Cart ({cartCount})
            </div>
        </nav>
    );
}

export default Navbar;