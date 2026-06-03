function Offers() {
    const offers = [
        "🎉 First Order 20% OFF",
        "🍕 Buy 1 Get 1 Free Pizza",
        "🚚 Free Delivery Above ₹499",
        "🔥 Weekend Special 30% OFF",
    ];

    return (
        <div className="offers">
            <h2>Special Offers</h2>

            <div className="offer-container">
                {offers.map((offer, index) => (
                    <div className="offer-card" key={index}>
                        {offer}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offers;